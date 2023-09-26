import { Routes, Route, Link } from 'react-router-dom';

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
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="second" element={<SecondPage />} />
            <Route path="third" element={<ThirdPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};
