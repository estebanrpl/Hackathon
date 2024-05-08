import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { Sidebar } from '../components/Sidebar';

const BaseComponent = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Sidebar />
      <Outlet />
    </>
  );
};
export default BaseComponent;
