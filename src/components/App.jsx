import { Routes, Route } from 'react-router-dom';

import MainPage from './MainPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import NotFound from './NotFound';
import Layout from './Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="second" element={<SecondPage />} />
          <Route path="third" element={<ThirdPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
