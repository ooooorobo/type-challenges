/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #보통 #union #built-in

  ### 질문

  `T`에서 `K` 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Omit<T, K>`를 이를 사용하지 않고 구현하세요.

  예시:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```

  > GitHub에서 보기: https://tsch.js.org/3/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// keyof T를 그냥 쓰는게 아니라 as로 리매핑을 해줘야 한다!!
// 안그러면 삼항연산자 결과부분에서 쓸때 조건문에 있던거랑 매핑이 안돼서 이상하게 들어가는 듯?
// In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type.
// ref: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
type MyOmit<T, K extends keyof T> = { [key in keyof T as key extends K ? never : key]: T[key] }

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3/answer/ko
  > 정답 보기: https://tsch.js.org/3/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
