import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getData } from './api';
import RenderRouter from './router';

function App() {
  const [data, setData] = useState({});
  const requestData = async () => {
    const api = await getData();
    setData(api);
  }
  useEffect(() => {
    // requestData();
  }, []);
  return (
    <div>
      <RenderRouter />
    </div>
  );
}

export default App;
