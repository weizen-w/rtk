import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export default function Layout(): JSX.Element {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer style={{ marginTop: '60px', backgroundColor: 'grey', height: '70px' }}>
        By Wladimir Weizen
      </footer>
    </>
  );
}
