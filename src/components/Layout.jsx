import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/second">Second</Link>
        <Link to="/third">Third</Link>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
