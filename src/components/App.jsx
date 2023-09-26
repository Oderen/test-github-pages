import { Routes, Route, Link } from 'react-router-dom';

import MainPage from './MainPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import NotFound from './NotFound';

export const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/second">Second</Link>
        <Link to="/third">Third</Link>
        <div>Changes was made</div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};
