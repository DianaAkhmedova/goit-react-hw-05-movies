import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';

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
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};

export default Layout;
