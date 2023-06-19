import './App.css';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to=""></Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
        </ul>
      </nav>

      <h1></h1>
      <Routes>
        <Route path="/" />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>
);

export default App;
