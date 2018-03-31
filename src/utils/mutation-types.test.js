import test from "ava"
import { make } from "./mutation-types"

test("make uniq values", t => {
  t.is(new Set(make("1"), make("1"), make("1")).size === 3)
})
