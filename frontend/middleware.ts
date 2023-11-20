import {
  AUTHORIZED_ROUTES,
  NOT_AUTH_REDIRECT_ROUTE,
  ROUTES,
} from "@utils/constants/routes";
import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest, res: NextResponse) => {
  if (AUTHORIZED_ROUTES.includes(req.nextUrl.pathname as ROUTES)) {
    req.nextUrl.pathname = NOT_AUTH_REDIRECT_ROUTE;
    return NextResponse.redirect(req.nextUrl);
  }
};

export default middleware;
