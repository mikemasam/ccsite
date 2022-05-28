import Link from 'next/link';
import { Nav } from '@douyinfe/semi-ui';
export default function StaticNav(){
  return (
    <Nav mode='horizontal' style={{ height: 'auto', backgroundColor: "#EEC62A", margin: 0 }}>
      <Item href="/grammar" itemKey='grammar' text='Chinese Grammar' />
      <Item href="/dictionaries" itemKey='dictionaries' text='Chinese Dictionaries' />
      <Item href="/hsk" itemKey='hsk' text='汉语水平考试' />
      <Item href="/cjk-tools" itemKey='cjk-tools'>
        CJK <abbr /> Tools
      </Item>
      <Item href="/course" itemKey='course' text='初级汉语课本：第二册' />
      <Item href="/intermediatechinese_grammar" itemKey='intermediatechinese_grammar' text='Intermediate Grammar (2009)' />
    </Nav>
  );
}

function Item({ href, itemKey, text, children }){
  return (
    <Link href={href} passHref>
      <a>
        <Nav.Item component="a" itemKey={itemKey} text={text || children} style={{ color: "#7C3100" }}/>
      </a>
    </Link>
  );
}
