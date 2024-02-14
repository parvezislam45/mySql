
import './App.css';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Update from './Pages/Update';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/add'element={<Add/>}/>
      <Route path='update/:id'element={<Update/>}/>

      </Routes>
    </div>
  );
}

export default App;
