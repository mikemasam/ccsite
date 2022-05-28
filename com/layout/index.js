import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import { Layout } from '@douyinfe/semi-ui';
import { LocaleProvider } from '@douyinfe/semi-ui';
import AppSideBar from './AppSideBar';
import AppNav from './AppNav';
import StaticNav from './StaticNav';

export default ({ appProps, children }) => {
  const { Header, Footer, Sider, Content } = Layout;
  //style={{ minWidth: 230 }}
  return (
    <LocaleProvider locale={zh_CN}>
      <Layout>
        <Header style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
          <StaticNav />
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
        <footer style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <p> &copy;</p>
          <p>学习汉语</p>
        </footer>
      </Layout>
    </LocaleProvider>
  );
};
