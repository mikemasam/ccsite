import { Row, Col, Button, Toast } from '@douyinfe/semi-ui';
import { Typography, Space, Form, Tooltip } from '@douyinfe/semi-ui';
import Router from 'next/router';
import useIsClient from '@com/hooks/useIsClient';
import useApi from '@com/api/useApi';

export default function CreateAccountPage() {
  const loaded = useIsClient();
  const api = useApi();
  const onSubmit = (form) => {
    api.post("/api/create-account", form).then(res => {
      if(res.success){
        Toast.info({ content: res.message });
        Router.push("/login");
      }else{
        Toast.error({ content: res.message });
      }
    });
  }
  if(!loaded) return null;
  return (
    <Row>
      <Col span={12} offset={6}>
        <Typography.Title style={{ textAlign: "center", margin: 10 }}>
          创建账户
        </Typography.Title>
        <Form onSubmit={onSubmit}>
          <Form.Input field='name' label='显示名称' />
          <Form.Input field='username' label='用户名' />
          <Form.Input field='password' type="password" label='密码' />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Button htmlType="reset">复位输入</Button>
            <Button type="primary" htmlType="submit">提交</Button>
          </div>
        </Form>
      </Col>
    </Row>
  )
}
