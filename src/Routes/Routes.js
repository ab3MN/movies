import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviePage = lazy(() =>
  import(
    '../pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */
  ),
);

const CastPage = lazy(() =>
  import('../pages/CastPage/CastPage' /* webpackChunkName: "cast-page" */),
);

const ReviewsPage = lazy(() =>
  import(
    '../pages/ReviewsPage/ReviewsPage' /* webpackChunkName: "reviews-page" */
  ),
);

export default {
  HOME_PAGE: {
    path: '/home',
    component: HomePage,
  },
  MOVIEDETAILS_PAGE: {
    path: '/movies/:id',
    component: MovieDetailsPage,
  },
  MOVIES_PAGE: {
    path: '/movies',
    component: MoviePage,
  },
  CAST_PAGE: {
    path: '/cast',
    component: CastPage,
  },
  REVIEWS_PAGE: {
    path: '/review',
    component: ReviewsPage,
  },
};
