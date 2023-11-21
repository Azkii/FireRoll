import {
  AUTHORIZED_ROUTES,
  AUTH_ROUTES,
  NOT_AUTH_REDIRECT_ROUTE,
  ROUTES,
} from "@utils/constants/routes";
import { NextRequest, NextResponse } from "next/server";

const isAuth = true;

const middleware = async (req: NextRequest, res: NextResponse) => {
  if (isAuth && AUTH_ROUTES.includes(req.nextUrl.pathname as ROUTES)) {
    req.nextUrl.pathname = ROUTES.HOME;
    return NextResponse.redirect(req.nextUrl);
  }

  if (!isAuth && AUTHORIZED_ROUTES.includes(req.nextUrl.pathname as ROUTES)) {
    req.nextUrl.pathname = NOT_AUTH_REDIRECT_ROUTE;
    return NextResponse.redirect(req.nextUrl);
  }
};

export default middleware;
