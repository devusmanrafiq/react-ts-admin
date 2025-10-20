import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

import WithSuspense from 'routes/with-suspense';

function Content() {
  return (
    <Layout.Content
      style={{
        margin: '24px 20px 0 20px',
        padding: 24,
        minHeight: 280,
        borderRadius: '14px',
        overflow: 'auto',
        maxHeight: 'calc(100vh - 150px)',
        backgroundColor: '#fff',
      }}
    >
      <WithSuspense>
        <Outlet />
      </WithSuspense>
    </Layout.Content>
  );
}

export default Content;
