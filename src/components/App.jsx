import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {
  return (
    <>
      <Header /> {}
      {}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {}
          <Route path="/" element={<Home />} /> {}
          <Route path="/movies" element={<Movies />} /> {}
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} /> {}
            <Route path="reviews" element={<Reviews />} /> {}
          </Route>
          {}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}
