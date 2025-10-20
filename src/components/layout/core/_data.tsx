import { MenuProps } from 'antd';

import WindowIcon from 'assets/icons/window-icon.svg?react';

export const sidebarItems: MenuProps['items'] = [
  {
    key: '/',
    label: 'Dashboard',
    icon: <WindowIcon />,
  },
  {
    key: 'users',
    label: 'Users',
    icon: <WindowIcon />,
  },
];
