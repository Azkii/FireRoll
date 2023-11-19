import { NextRequest, NextResponse } from "next/server";

const AUTHORIZED_ROUTES = ["/"];
const NOT_AUTH_REDIRECT_ROUTE = "/login";

const middleware = async (req: NextRequest, res: NextResponse) => {
  if (AUTHORIZED_ROUTES.includes(req.nextUrl.pathname)) {
    req.nextUrl.pathname = NOT_AUTH_REDIRECT_ROUTE;
    return NextResponse.redirect(req.nextUrl);
  }
};

export default middleware;
