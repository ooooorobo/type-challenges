/*
  531 - String to Union
  -------
  by Andrey Krasovsky (@bre30kra69cs) #보통 #union #string

  ### 질문

  Implement the String to Union type. Type take string argument. The output should be a union of input letters

  For example

  ```ts
  type Test = '123';
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
  ```

  > GitHub에서 보기: https://tsch.js.org/531/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type StringToUnion<T extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/531/answer/ko
  > 정답 보기: https://tsch.js.org/531/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
