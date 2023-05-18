import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/routes';
import userInfo from './data/userInfo';

function App() {
  useEffect(() => {
    const rating = window.localStorage.getItem('rating') || 0;
    console.log('rating :', rating);
    userInfo.rating = rating;
    // window.localStorage.getItem('finishedTests');
  }, []);

  return (
    <div className="main-container">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
