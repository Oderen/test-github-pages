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
          <Route path="catalog" element={<SecondPage />} />
          <Route path="favourites" element={<ThirdPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
