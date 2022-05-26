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
        <Typography.Title style={{ textAlign: "center", margin: 10 }}>Create Account</Typography.Title>
        <Form onSubmit={onSubmit}>
          <Form.Input field='name' label='Display Name' />
          <Form.Input field='username' label='User Name' />
          <Form.Input field='password' type="password" label='Password' />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Button htmlType="reset">Reset</Button>
            <Button type="primary" htmlType="submit">Submit</Button>
          </div>
        </Form>
      </Col>
    </Row>
  )
}
