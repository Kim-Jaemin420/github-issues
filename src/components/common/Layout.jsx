import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      공통 레이아웃
      {<Outlet />}
    </>
  );
}

export default Layout;
