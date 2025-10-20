import { useState } from 'react';

import { Layout as LayoutAnt } from 'antd';

import ScrollToTop from 'helpers/scroll-to-top';

import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';

function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const collapsedStates = { collapsed, setCollapsed };

  return (
    <LayoutAnt className='main-layout'>
      <ScrollToTop />
      <Sidebar collapsedStates={collapsedStates} />
      <LayoutAnt>
        <Header collapsedStates={collapsedStates} />
        <Content />
        <Footer />
      </LayoutAnt>
    </LayoutAnt>
  );
}

export default Layout;
