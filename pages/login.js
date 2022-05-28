import { DateTime } from 'luxon';
import { Row, Col, Button, Toast } from '@douyinfe/semi-ui';
import { Typography, Space, Form, Tooltip } from '@douyinfe/semi-ui';
import Router from 'next/router';
import Cookies from 'universal-cookie';
import useIsClient from '@com/hooks/useIsClient';
import useApi from '@com/api/useApi';

export default function LoginPage() {
  const loaded = useIsClient();
  const api = useApi();
  const onSubmit = (form) => {
    api.post("/api/login", form).then(res => {
      if(res.success){
        Toast.info({ content: res.message });
        authenticate(res.data.token);
        Router.push("/");
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
          登录
        </Typography.Title>
        <Form onSubmit={onSubmit}>
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


const authenticate = (token) => {
  if(!token) return;
  const cookies = new Cookies();
  const cookie = { 
    path: '/', 
    expires: DateTime.now().plus({ days: 14 }).toJSDate()
  }
  cookies.set('chsession', token, cookie);
}
