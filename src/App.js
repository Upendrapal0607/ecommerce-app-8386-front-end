import logo from './logo.svg';
import './App.css';
import Header from './Componants/Headers/Header';
import MainRoute from './Pages/MainRoute';
import { Footer } from './Componants/Footer/Footer';
import BackToTop from './Componants/BacktTop';

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoute />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
