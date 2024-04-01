import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from './redux/auth/operations';
import { selectParams } from './redux/auth/selectors';

import SharedLayout from 'components/SharedLayout/SharedLayout';

import ErrorPage from 'pages/ErrorPage/ErrorPage';

import { lazy } from 'react';

import { PrivateRoute } from './route/PrivateRoute';
import { RestrictedRoute } from './route/RestrictedRoute';
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage/ExercisesPage'));
const ProfilePage = lazy(
  () => import('./pages/ProfilePage/ProfilePage/ProfilePage')
);
const DairyPage = lazy(() => import('./pages/DairyPage/DairyPage'));
import { Loader } from './components/Loader/Loader';

function App() {
  const params = useSelector(selectParams);
  let fullParams = params !== null ? true : false;
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/diary"
                component={<WelcomePage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              fullParams ? (
                <RestrictedRoute
                  redirectTo="/diary"
                  component={<LoginPage />}
                />
              ) : (
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<LoginPage />}
                />
              )
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route
            path="/diary"
            element={
              <PrivateRoute redirectTo="/login" component={<DairyPage />} />
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute redirectTo="/login" component={<ProductsPage />} />
            }
          />
          <Route
            path="/exercises"
            element={
              <PrivateRoute redirectTo="/login" component={<ExercisesPage />} />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
            }
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
