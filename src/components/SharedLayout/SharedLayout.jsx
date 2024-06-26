import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.Styles';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Container>

      <Toaster />
    </>
  );
};

export default SharedLayout;
