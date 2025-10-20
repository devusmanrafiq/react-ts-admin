import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Flex, Layout } from 'antd';

import Button from 'components/core-ui/button/button';

function Header({ collapsedStates }: any) {
  const { collapsed, setCollapsed } = collapsedStates;

  return (
    <Layout.Header className='!p-0'>
      <Flex style={{ background: '#FFF' }} justify='space-between' align='center'>
        <Button
          variant='text'
          prefixElement={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className='ms-4 p-3'
        />

        <div className='px-10 py-3'>
          <Flex gap={8} align='center'>
            <p className='font-bold'>User</p>
            <Button variant='rounded' className='px-5 font-semibold'>
              U
            </Button>
          </Flex>
        </div>
      </Flex>
    </Layout.Header>
  );
}

export default Header;
