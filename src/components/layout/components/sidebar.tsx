import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LogoutOutlined } from '@ant-design/icons';
import { Menu, Tooltip } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { MenuInfo } from 'rc-menu/lib/interface';
import twc from 'tw-classnames';

import Button from 'components/core-ui/button/button';

import { sidebarItems } from '../core/_data';

function Sidebar({ collapsedStates }: any) {
  const [selectedKeys, setSelectedKeys] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { collapsed } = collapsedStates;

  useEffect(() => {
    if (pathname.slice('/'.length)) return setSelectedKeys(pathname.slice('/'.length));
    return setSelectedKeys('/');
  }, [pathname]);

  const handleClick = (e: MenuInfo) => {
    setSelectedKeys(e.key);
    navigate(e.key);
  };

  return (
    <section>
      <Sider
        collapsible
        trigger={null}
        collapsed={collapsed}
        breakpoint='sm'
        width={300}
        style={{
          height: '100vh',
          overflow: 'auto',
          backgroundColor: 'white',
        }}
      >
        <div className='p-5'>
          <h1 className='flex justify-center font-bold md:text-xl sm:text-base'>Title</h1>
        </div>
        <Menu theme='light' mode='inline' selectedKeys={[selectedKeys]} onClick={handleClick} items={sidebarItems} />
        <div className={`absolute bottom-5 ${!collapsed ? 'left-2' : 'left-1/2 -translate-x-1/2'}`}>
          <Tooltip title={collapsed ? 'Logout' : ''} placement='right'>
            <Button
              prefixElement={<LogoutOutlined className='text-lg' />}
              className={twc(
                ' !bg-transparent w-full gap-3 flex items-center justify-center px-6',
                collapsed ? 'justify-center px-0' : ''
              )}
              variant='text'
              onClick={() => navigate('/logout')}
            >
              {!collapsed && <span className='text-sm font-medium'>Logout</span>}
            </Button>
          </Tooltip>
        </div>
      </Sider>
    </section>
  );
}

export default Sidebar;
