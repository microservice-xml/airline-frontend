import { Navigate, Route, Routes } from "react-router-dom";
import News from "../pages/news";
import Blog from "../pages/blog";
import LandingPage from "../pages/landing-page";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ChooseFlight from "../pages/choose-flight";
import ForbiddenPage from "../pages/error/403";
import NotFoundPage from "../pages/error/404";
import { useContext } from "react";
import AuthContext from "../store/login/AuthContext";
import UnauthorizedPage from "../pages/error/401";
import CreateFlight from "../pages/flight/create-flight";

let unregisteredPages = {
  News: {
    path: "/news",
    component: <News />,
  },
  Blog: {
    path: "/news/:slug",
    component: <Blog />,
  },
  Landing: {
    path: "/",
    component: <LandingPage />,
  },
  Login: {
    path: "/authenticate",
    component: <LoginPage />,
  },
  ChooseFlight: {
    path: "/choose-flight",
    component: <ChooseFlight />,
  },
  Register: {
    path: "/register",
    component: <RegisterPage />,
  },
  CreateFlight: {
    path: "/add-flight",
    component: <CreateFlight />,
  },
  Forbidden: {
    path: "/403",
    component: <ForbiddenPage />,
  },
  NotFound: {
    path: "/404",
    component: <NotFoundPage />,
  },
  Unauthorized: {
    path: "/401",
    component: <UnauthorizedPage />,
  },
  Redirect: {
    path: "*",
    component: <Navigate to="/404" />,
  },
};

let ROUTES: any = {};

Object.assign(ROUTES, ROUTES, unregisteredPages);

export function getRoutes() {
  let result: any[] = [];

  for (const [key, value] of Object.entries(ROUTES)) {
    result.push(
      <Route
        key={"route-" + key}
        path={(value as any).path}
        element={(value as any).component}
      />
    );
  }

  return <Routes>{result}</Routes>;
}
