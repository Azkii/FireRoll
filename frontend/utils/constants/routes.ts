export enum ROUTES {
  LOGIN = "/login",
  FORGOT_PASSWORD = "/forgot-password",
  CREATE_ACCOUNT = "/create-account",
  HOME = "/",
}

export const AUTH_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.FORGOT_PASSWORD,
  ROUTES.CREATE_ACCOUNT,
];
export const AUTHORIZED_ROUTES = [ROUTES.HOME];

export const NOT_AUTH_REDIRECT_ROUTE = ROUTES.LOGIN;
