import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderWidget } from '@widgets';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWidget />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
