import './App.css';
import { Header } from './components/Header';
import { MainContent } from './components/Main';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <MainContent />
    </>
  );
}

export default App;
