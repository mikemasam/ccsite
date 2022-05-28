import { useEffect } from 'react';
import { DateTime } from 'luxon';
import { Typography  } from '@douyinfe/semi-ui';
import Router from 'next/router';
import Cookies from 'universal-cookie';

export default function LoginPage() {
  useEffect(() => {
    deauthenticate();
    Router.push("/");
    },[]);
  return (
    <Typography.Title style={{ textAlign: "center", margin: 10 }}>
      请稍等...
    </Typography.Title>
  )
}


const deauthenticate = () => {
  const cookies = new Cookies();
  const cookie = { 
    path: '/', 
    expires: DateTime.now().plus({ days: 14 }).toJSDate()
  }
  cookies.remove('chsession', cookie);
}
