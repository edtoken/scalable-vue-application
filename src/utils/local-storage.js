const storage =
  typeof sessionStorage !== "undefined" ? sessionStorage : localStorage

export const get = key => {
  const data = storage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

export const del = key => storage.removeItem(key)

export const set = (key, val) => {
  if (typeof val === "string") {
    return storage.setItem(key, val)
  }

  storage.setItem(key, JSON.stringify(val))
}

export const clear = () => storage.clear()
