import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Divider, Tag, Card, List, Space, Typography, Avatar, Button, Toast } from '@douyinfe/semi-ui';
import { Pagination } from '@douyinfe/semi-ui';
import { IconPlus, IconHash } from '@douyinfe/semi-icons';
import { DateTime } from 'luxon';
import AppRoute from '@com/appcom/route';
import useApiGet from '@com/api/useApiGet';

export default function EditorChallengesPage({ appProps }) {
  const { data, load, paginate } = useApiGet({ url: "/api/editor/challenges" });
  const { user }  = appProps || {};
  return (
    <div>
      <div style={{ display: "flex", marginBottom: 20, justifyContent: "space-between"  }}>
        <Space spacing={"loose"} align="center">
          <IconHash />
          <Typography.Title heading={5} style={{ flex: 1 }}>
            挑战
          </Typography.Title>
        </Space>
        <Link href="/challenges/create">
          <Button disabled={user?.user_type != 2} type='primary' theme='solid'>
            <IconPlus /> 添加新挑战 
          </Button>
        </Link>
      </div>
      <List
        size="large"
        loading={data.loading}
        dataSource={data.results || []}
        renderItem={item => <ChallengeItem user={user} reload={load} item={item} /> }
      />
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
        <Pagination total={data.total} pageSize={data.per_page} 
          onPageChange={paginate}
          showTotal style={{ margin: 15 }} />
      </div>
    </div>
  )
}

function ChallengeItem({ item, reload, user }){
  const { data, load, reset, api, setLoading } = useApiGet({ 
    url: `/api/editor/challenges/${item.id}/answers`, autoLoad: false 
  });
  const onClick = () => {
    if(!data.answers?.length) {
      load();
    }else {
      reset();
    }
  }

  const onToggleStatus = (e, status) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    api.get(`/api/editor/challenges/${item.id}/status`, { params: { status } }).then(res => {
      setLoading(false);
      if(res.success){
        Toast.info({ content: res.message });
        Router.push("/editor/challenges");
        reload();
      }else{
        Toast.error({ content: res.message });
      }
    });
  }
  const onEnable = (e) => onToggleStatus(e, "enable") ;
  const onRemove = (e) => onToggleStatus(e, "remove") ;
  return (
    <Card bodyStyle={{ padding: 10 }} 
      onClick={onClick}
      loading={data.loading} 
      style={{ cursor: "pointer", marginTop: 10 }}>
      <div style={{ fex: 1, marginBottom: 10, display: "flex" }}>
        {item.content}
      </div>
      <div style={{ 
        fex: 1, alignItems: "center", 
        justifyContent: "space-between", display: "flex" 
      }}>
        <Space>
          <Typography.Text code>
            {DateTime.fromMillis(item.created_at || 0).toLocaleString(DateTime.DATE_FULL)}
          </Typography.Text>
          <Typography.Text code>
            {item.status == 1 && "积极的"}
            {item.status == 0 && "移除"}
          </Typography.Text>
        </Space>
        {item.status == 0 &&
        <Button onClick={onEnable} disabled={user?.user_type != 2}>
          恢复挑战
        </Button>
        }
        {item.status == 1 &&
          <Button type="danger" disabled={user?.user_type != 2} onClick={onRemove}>
            从列表中删除
          </Button>
        }
      </div>
      {data?.answers?.length > 0 &&
      <Space vertical align="start" style={{ marginTop: 10 }}>
        {data.answers.map(a => (
          <Tag type="ghost" style={{ height: "auto", whiteSpace: 'pre-wrap', flex: 1 }} 
            color={a.status == 1 ? "green" : "blue"} >
            {a.content}
          </Tag>
        ))}
      </Space>
      }
    </Card>
  );
}


export const getServerSideProps = AppRoute(() => {
}, { secured: false });
