import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from './api';
import { router } from './router';

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
