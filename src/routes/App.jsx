import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'
import AddPerson from '../forms/addPerson';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/person/add" element={<AddPerson />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
