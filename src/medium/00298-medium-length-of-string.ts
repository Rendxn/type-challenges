// ============= Test Cases =============
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];

// ============= Your Code Here =============
/**
 * I thought it'd be as trivial as doing string['length'], but TS just shows `number`.
 * So I had to look for an article that showed that I had to convert the string to a tuple first
 * and then access the length of said tuple.
 * @see https://ghaiklor.github.io/type-challenges-solutions/en/medium-length-of-string.html
 */
type StringToTuple<S extends string> = S extends `${infer F}${infer Rest}` ? [F, ...StringToTuple<Rest>] : [];
type LengthOfString<S extends string> = StringToTuple<S>["length"];
type A = LengthOfString<"Sound! Euphonium">;
