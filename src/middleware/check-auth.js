import { NON_AUTHORIZE_ROUTES } from "../config"

export default function({ store, redirect, route }) {
  if (
    !store.state.user.authenticated &&
    NON_AUTHORIZE_ROUTES.indexOf(route.name) === -1
  ) {
    redirect({ name: "login" })
  }

  return Promise.resolve()
}
