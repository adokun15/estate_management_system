import {
  type RouteConfig,
  index,
  layout,
  prefix,
  // prefix,
  route,
} from "@react-router/dev/routes";
export default [
  //Public: landing
  route("/", "./pages/layout.tsx", [index("./pages/page.tsx")]),

  //auth: /login, /register, /forgot_password
  layout("./pages/auth/layout.tsx", [
    route("login", "./pages/auth/login.tsx"),
    route("register", "./pages/auth/signup.tsx"),
    route("forgot_pas  csword", "./pages/auth/forgot_password.tsx"),
  ]),
] satisfies RouteConfig;
