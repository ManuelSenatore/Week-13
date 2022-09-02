import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <MyMain></MyMain>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
