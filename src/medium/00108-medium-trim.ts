// ============= Test Cases =============
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];

// ============= Your Code Here =============
/**
 * I could've also used TrimLeft and TrimRight,
 * but at the time I don't have TrimRight and
 * I kinda want to do it bare bones.
 * It would've been something like this
 * @example
 * TrimRight<TrimLeft<S>>
 */
type Trim<S extends string> = S extends `${TrimChars}${infer M}` | `${infer M}${TrimChars}` ? Trim<M> : S;

type TrimChars = " " | "\t" | "\n";
