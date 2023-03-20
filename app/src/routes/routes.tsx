import { Route, Routes } from "react-router-dom";
import News from "../pages/news";
import Blog from "../pages/blog";
import LandingPage from "../pages/landing-page";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ChooseFlight from "../pages/choose-flight";

let unregisteredPages = {
  News: {
    path: '/news',
    component: <News />,
  },
  Blog: {
    path: '/news/:slug',
    component: <Blog />
  },
  Landing: {
    path: '/',
    component: <LandingPage />
  },
  Login: {
    path: '/authenticate',
    component: <LoginPage />
  },
  ChooseFlight: {
    path: '/choose-flight',
    component: <ChooseFlight />
  },
  Register: {
    path: "/register",
    component: <RegisterPage />,
  },
};

let ROUTES: any = {}

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
