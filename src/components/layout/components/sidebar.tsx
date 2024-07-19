import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { DashboardOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { MenuInfo } from 'rc-menu/lib/interface';

const items: MenuProps['items'] = [
  {
    key: '/',
    label: 'Dashboard',
    icon: <DashboardOutlined />,
  },
  {
    key: 'users',
    label: 'Users',
    icon: <DashboardOutlined />,
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <LogoutOutlined />,
  },
];

function Sidebar() {
  const [current, setCurrent] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.slice('/'.length)) return setCurrent(pathname.slice('/'.length));
    return setCurrent('/');
  }, [pathname]);

  const handleClick = (e: MenuInfo) => {
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <section>
      <Sider breakpoint='sm' width={250} className='h-screen'>
        <div className='p-5'>
          <h1 className='flex justify-center font-bold text-white md:text-xl sm:text-base'>Title</h1>
        </div>
        <Menu theme='dark' mode='inline' selectedKeys={[current]} onClick={handleClick} items={items} />
      </Sider>
    </section>
  );
}

export default Sidebar;
