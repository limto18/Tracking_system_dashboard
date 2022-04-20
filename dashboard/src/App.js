import logo from './logo.svg';
import './App.css';
import Performance from './performance/Performance';
import Rejection from './rejection/Rejection';
import Detail from './details/Detail';
import Heading from './heading/Heading';

function App() {
  return (
    <div className="App">
      <Performance/>
      <Rejection/>
      <Detail/>
      <Heading/>
    </div>
  );
}

export default App;
