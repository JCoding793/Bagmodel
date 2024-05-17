import logo from './logo.svg';
import NavBar from './Layout/nav';
import './App.css';
import Banner from './Layout';
import { Outlet } from 'react-router-dom';
import Footer from './Layout/footer';
function App() {
  return(
   <div>
   <NavBar />
   <Outlet />
   <Footer />
   </div>
  );
}

export default App;
