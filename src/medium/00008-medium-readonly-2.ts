// ============= Test Cases =============
import type { Alike, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];

// @ts-expect-error
type error = MyReadonly2<Todo1, "title" | "invalid">;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// ============= Your Code Here =============
/**
 * This can also be done without the built-in functions like this,
 * since it makes everything readonly then intersects it with
 * 3 - Omit of the ones we don't want to be readonly.
 * @example
 * type MyReadonly2<T, K extends keyof T = keyof T> = {
 *   readonly [P in keyof T]: T[P];
 * } & {
 *   [P in keyof T as P extends K ? never : P]: T[P];
 * };
 */
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in keyof T]: T[P];
};
