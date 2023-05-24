import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/routes';
import userInfo from './data/userInfo';
import { tests } from './data/tests';
import { AuthProvider } from './context/auth';

function App() {
  useEffect(() => {
    const rating = window.localStorage.getItem('rating') || 0;
    userInfo.rating = +rating;
    const finishedTests = window.localStorage.getItem('finishedTests') || '';
    const finishedTestsIds = finishedTests.split(',');
    tests.forEach(test => {
      if (finishedTestsIds.includes(String(test.id))) {
        test.completed = true;
      }
    });
  }, []);

  return (
    <div className="main-container">
      <AuthProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
