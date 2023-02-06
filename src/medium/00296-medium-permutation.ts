// ============= Test Cases =============
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Permutation<"A">, ["A"]>>,
  Expect<
    Equal<
      Permutation<"A" | "B" | "C">,
      ["A", "B", "C"] | ["A", "C", "B"] | ["B", "A", "C"] | ["B", "C", "A"] | ["C", "A", "B"] | ["C", "B", "A"]
    >
  >,
  Expect<
    Equal<
      Permutation<"B" | "A" | "C">,
      ["A", "B", "C"] | ["A", "C", "B"] | ["B", "A", "C"] | ["B", "C", "A"] | ["C", "A", "B"] | ["C", "B", "A"]
    >
  >,
  Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Permutation<never>, []>>
];

// ============= Your Code Here =============
/**
 * Couldn't figure this one out myself, but this explanation is great:
 * @see https://github.com/type-challenges/type-challenges/issues/614
 */
type Permutation<T, P = T> = [T] extends [never] ? [] : T extends P ? [T, ...Permutation<Exclude<P, T>>] : never;
