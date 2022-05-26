import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Divider, Tag, Card, List, Space, Typography, Avatar, Button, Toast } from '@douyinfe/semi-ui';
import { IconHash } from '@douyinfe/semi-icons';
import { DateTime } from 'luxon';
import AppRoute from '@com/appcom/route';
import useApiGet from '@com/api/useApiGet';

export default function EditorChallengesPage() {
  const { data, load, paginate } = useApiGet({ url: "/api/editor/challenges" });
  return (
    <div>
      <div style={{ display: "flex", marginBottom: 20, justifyContent: "space-between"  }}>
        <Space spacing={"loose"} align="center">
          <IconHash />
          <Typography.Title heading={5} style={{ flex: 1 }}>Challenges</Typography.Title>
        </Space>
        <Link href="/editor/challenges/create">
          <Button type='primary' theme='solid'>
            Create
          </Button>
        </Link>
      </div>
      <List
        size="large"
        loading={data.loading}
        dataSource={data.results || []}
        renderItem={item => <ChallengeItem reload={load} item={item} /> }
      />
    </div>
  )
}

function ChallengeItem({ item, reload }){
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
            {item.status == 1 && "Active"}
            {item.status == 0 && "Removed"}
          </Typography.Text>
        </Space>
        {item.status == 0 &&
        <Button onClick={onEnable}>
          Enable
        </Button>
        }
        {item.status == 1 &&
          <Button type="danger" onClick={onRemove}>
            Remove
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
  console.log("loading home...");
}, { secured: false });
