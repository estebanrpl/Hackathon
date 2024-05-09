import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { MainContent } from '../components/Main';
import MainPage from './MainPage';

const BaseComponent = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};
export default BaseComponent;
