/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #보통 #object

  ### 질문

  Merge two types into a new type. Keys of the second type overrides keys of the first type.

  For example

  ```ts
  type foo = {
    name: string;
    age: string;
  }
  type coo = {
    age: number;
    sex: string
  }

  type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
  ```

  > GitHub에서 보기: https://tsch.js.org/599/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Merge<F, S> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/599/answer/ko
  > 정답 보기: https://tsch.js.org/599/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
