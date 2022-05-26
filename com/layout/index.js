import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import { Layout } from '@douyinfe/semi-ui';
import { LocaleProvider } from '@douyinfe/semi-ui';
import AppSideBar from './AppSideBar';
import AppNav from './AppNav';

export default ({ appProps, children }) => {
  const { Header, Footer, Sider, Content } = Layout;
  //style={{ minWidth: 230 }}
  return (
    <LocaleProvider locale={en_US}>
      <Layout style={{border: '1px solid var(--semi-color-border)'}}>
        <Header style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
          <AppNav appProps={appProps} />
        </Header>
        <Layout>
          <Sider style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
            <AppSideBar appProps={appProps} />
          </Sider>
          <Content style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)'
          }}>{children}</Content>
        </Layout>
      </Layout>
    </LocaleProvider>
  );
};
