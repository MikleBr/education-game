import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/routes';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
