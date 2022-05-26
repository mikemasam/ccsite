import Link from 'next/link';
import { Nav, Avatar, Dropdown, Select, Button } from '@douyinfe/semi-ui';
import { IconArticle, IconHome, IconUserAdd, IconUser, IconSetting, IconEdit, IconLanguage } from '@douyinfe/semi-icons';

export default ({ children, appProps= {} }) => {
  const { user } = appProps;
  return (
    <Nav mode='horizontal' defaultSelectedKeys={['Home']}>
      <Nav.Header>
        <IconArticle  style={{ fontSize: 36 }} />
      </Nav.Header>
      <Link href="/" passHref>
        <a>
          <Nav.Item itemKey='Home' text='Home' />
        </a>
      </Link>
      <Link href="/daily" passHref>
        <a>
        <Nav.Item component="a" itemKey='challenges' text='每日挑战' />
        </a>
      </Link>
      <Link href="/resources">
        <Nav.Item component="a" itemKey='resources' text='外部资源' />
      </Link>
      <Link href="/leaderboard">
        <Nav.Item itemKey='Leaderboard' text='Leaderboard' />
      </Link>
      <Nav.Footer>
        {!user &&
        <>
          <Link href="/login">
            <Button theme="borderless" style={{ marginRight: 10 }}>Login</Button>
          </Link>
          <Link href="/create-account">
            <Button theme="borderless" style={{ marginRight: 10 }}>Create Account</Button>
          </Link>
        </>
        }
        {user &&
          <Avatar color='blue' size='small'>{user?.name?.[0]}</Avatar>
        }
      </Nav.Footer>
    </Nav>
  );
}

const items = [
  { itemKey: 'login', text: 'Login', icon: <IconUser size="large" /> },
  { itemKey: 'create-account', text: 'Create Account', icon: <IconUserAdd size="large" /> },
];
