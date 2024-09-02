import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Main from './screens/main';
import About from './screens/about';
import Menu from './screens/menu';
import Chef from './screens/chef';
import Contact from './screens/contact';
import Login from './screens/login';
import CreateAccount from './screens/createAccount';
import HomeCli from './screens/homeCli';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/main' element={<Main></Main>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/chef' element={<Chef></Chef>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/createAccount' element={<CreateAccount></CreateAccount>}></Route>
        {/* <Route path="/homeAdmin" element={<HomeAdmin />} /> */}
        <Route path="/homeCli" element={<HomeCli />} />

      </Routes>
    </div>
  );
}

export default App;

