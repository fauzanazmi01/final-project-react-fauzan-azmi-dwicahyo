import './App.css';
import Index from './pages/Index';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path=":id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
