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
      defaultIsCollapsed
      //defaultOpenKeys={['task']}
      bodyStyle={{ minHeight: "75vh" }}
      items={user ? authItems : anonItems}
      onClick={onSelect}
      footer={{
        collapseButton: true,
      }}
    />
  );
}

const anonItems = [
  { 
    itemKey: 'challenges', 
    text: 'Challenges', 
    icon: <IconHash />,
    items: [
      { itemKey: "challenges", text: 'List', icon: <IconHash /> }, 
      { itemKey: "challenges/history", text: 'History', icon: <IconHash /> }, 
    ]
  },
  { 
    itemKey: 'exams', 
    text: 'Exams', 
    icon: <IconHourglass />,
  },
  { 
    itemKey: 'resouces', 
    text: 'Resources', 
    icon: <IconSourceControl />, 
  },
]
const authItems = [
  { 
    itemKey: 'challenges', 
    text: 'Challenges', 
    icon: <IconHash />,
    items: [
      { itemKey: "/challenges", text: 'List', icon: <IconHash /> }, 
      { itemKey: "/challenges/history", text: 'History', icon: <IconHash /> }, 
      { itemKey: "/editor/challenges", text: 'Manage', icon: <IconHash /> }, 
    ]
  },
  { 
    itemKey: 'exams', 
    text: 'Exams', 
    icon: <IconHourglass />,
    items: ['List', 'History', 'Manage']
  },
  { 
    itemKey: 'rosources', 
    text: 'Resources', 
    icon: <IconSourceControl />, 
    items: ['List', 'Manage']
  },
  { 
    itemKey: '/users', 
    text: 'Users', 
    icon: <IconUser />,
  },
]
