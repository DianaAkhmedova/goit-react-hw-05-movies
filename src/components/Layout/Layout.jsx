import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';

import Loader from 'shared/components/Loader/Loader';

import { Header, Main, Container } from './layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navbar />
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
