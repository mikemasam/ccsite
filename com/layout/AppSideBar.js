import { Nav } from '@douyinfe/semi-ui';
import Router from 'next/router';
import { 
  IconSourceControl, IconHash, IconHourglass, IconUser, IconStar, IconSetting 
} from '@douyinfe/semi-icons';

export default ({ appProps = {}, children }) => {
  const { user } = appProps;
  const onSelect = (item) => {
    if(item.isOpen === undefined){
      console.log(item);
      Router.push(item.itemKey);
    }
  }
  return (
    <Nav
      defaultIsCollapsed={true}
      //defaultOpenKeys={['task']}
      bodyStyle={{ minHeight: "75vh" }}
      items={items}
      onClick={onSelect}
      footer={{
        collapseButton: true,
      }}
    />
  );
}

const items = [
  { 
    itemKey: "/challenges", 
    text: '挑战', 
    icon: <IconHash />,
  },
  { 
    itemKey: '/users', 
    text: '用户', 
    icon: <IconUser />,
  },
]
