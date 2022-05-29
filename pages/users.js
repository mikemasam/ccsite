import { useState, useEffect } from 'react';
import { Space, Typography, Avatar, Button, Toast } from '@douyinfe/semi-ui';
import { Table } from '@douyinfe/semi-ui';
import { IconUser } from '@douyinfe/semi-icons';
import { DateTime } from 'luxon';
import AppRoute from '@com/appcom/route';
import useApiGet from '@com/api/useApiGet';

export default function UsersPage() {
  const { data, load, paginate } = useApiGet({ url: "/api/editor/users" });
  return (
    <div>
      <Space spacing={"loose"} align="center" style={{ marginBottom: 20 }}>
        <IconUser />
        <Typography.Title heading={5}>
          所有用户
        </Typography.Title>
      </Space>
      <Table
        loading={data.loading}
        columns={columns} 
        dataSource={data.results || []} 
        pagination={{
          currentPage: data.page,
          pageSize: data.per_page,
          total: data.total,
          onPageChange: paginate
        }}
      />
    </div>
  )
}
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: "加入日期",
    dataIndex: "created_at",
    render: (text, record, index) => {
      return DateTime.fromMillis(record.created_at || 0).toLocaleString(DateTime.DATE_FULL);
    }
  }
];
export const getServerSideProps = AppRoute(() => {
}, { secured: false });
