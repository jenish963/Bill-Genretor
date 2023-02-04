import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomizedSelects from './Components/CustomizedSelects';
import CustomizedTables from './Components/CustomizedTables';
import PDF from './Components/PDF';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomizedSelects/>} />
        <Route path="/Bill" element={<CustomizedTables/>} />
        <Route path="/Bill1" element={<PDF/>} />
      </Routes>
    </div> 
  );
}

export default App;
