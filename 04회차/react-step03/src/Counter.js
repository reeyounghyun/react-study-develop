import React from 'react'
import { useRecoilState } from 'recoil'
import { counterState } from './store'

const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);
  return (
    <div>
        <h3>Counter.js 카운터 : {count}</h3>
        <button onClick={()=>{ setCount(count+1)}}>증가</button>
        <button onClick={()=>{ setCount(count-1)}}>감소</button>
    </div>
  )
}

export default Counter