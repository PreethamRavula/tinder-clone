import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
  return (
    // BEM naming Convention
    <div className="app">
      <Header />
      <TinderCards />
      {/* SwipeButtons */}

    </div>
  );
}

export default App;
