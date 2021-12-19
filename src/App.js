import logo from './logo.svg';
import Main from './components/mainComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Main />

    </div>
    </BrowserRouter>
  );
}

export default App;
