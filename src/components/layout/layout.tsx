import { Outlet } from 'react-router-dom';

import { Layout as LayoutAnt } from 'antd';

import ScrollToTop from 'helpers/scroll-to-top';

import WithSuspense from 'routes/with-suspense';

import Sidebar from './components/sidebar';

function Layout() {
  return (
    <LayoutAnt>
      <ScrollToTop />
      <Sidebar />
      <WithSuspense>
        <Outlet />
      </WithSuspense>
    </LayoutAnt>
  );
}

export default Layout;
