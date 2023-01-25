import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from './components/form/Form';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <ToastContainer limit={2}/>
      <Router>
        <Routes>
          <Route path='/' element={<Form />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
