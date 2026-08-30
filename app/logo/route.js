import logo from "../../Logo.png";

export function GET(request) {
  return Response.redirect(new URL(logo.src, request.url), 307);
}
