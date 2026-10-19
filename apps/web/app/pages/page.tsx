/* eslint-disable react-refresh/only-export-components */
import type { Route } from "../+types/root";
import SignOutButton from "../components/SignOut";
import { user_cookie_token } from "../cookies.server";
import { redirect } from "react-router";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await user_cookie_token.parse(cookieHeader)) || {};
  return cookie?.token;
}

export async function action() {
  return redirect("/", {
    headers: {
      "Set-Cookie": await user_cookie_token.serialize(
        {},
        {
          expires: new Date(0),
        },
      ),
    },
  });
}

export default function Homepage({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h3>Home PAGE</h3>
    </div>
  );
}
