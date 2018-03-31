export default function({ isServer, store, req }) {
  console.log("check-auth", isServer, store, req)

  if (isServer && !req) {
    return
  }
}
