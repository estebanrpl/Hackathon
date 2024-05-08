import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

const BaseComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default BaseComponent;
