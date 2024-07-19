import { Outlet } from 'react-router-dom';

import { Layout as LayoutAnt } from 'antd';

import Container from 'components/core-ui/container/container';

import ScrollToTop from 'helpers/scroll-to-top';

import WithSuspense from 'routes/with-suspense';

import Sidebar from './components/sidebar';

// import Footer from './footer';
// import Header from './header';

function Layout() {
  return (
    <Container>
      <LayoutAnt>
        <ScrollToTop />
        <Sidebar />
        {/* <Header /> */}

        <WithSuspense>
          <Outlet />
        </WithSuspense>

        {/* <Footer /> */}
      </LayoutAnt>
    </Container>
  );
}

export default Layout;
