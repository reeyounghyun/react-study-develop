import React, { useEffect, useState } from 'react'

/*
    [ useEffect ]
    React에서 컴포넌트가 렌더링될때마다 특정 작업을
    수행할 수 있도록 하는 훅

    컴포넌트가 처음 렌더링될 때와 업데이트될 때마다 실행
*/
const PageUseEffect = () => {
    const [count, setCount] = useState(0);
    /*
    useEffect(()=>{
        // 컴포넌트가 렌더링될 때마다 실행
        console.log('컴포넌트가 렌더링 되었습니다.');

        // 선택사항 : 컴포넌트 언마운트 전, 업데이트 전 실행
        return () => {
            console.log(
                '컴포넌트가 언마운트되거나 업데이트 되기 전 실행문 적기'
            )
        }
    })
    */

    /*
        [ dependency : 의존성 배열 ]
        특정값이 변경될 때만 useEffect를 실행하고 싶은 경우 사용
        빈 배열을 넣으면 컴포넌트가 처음 렌더링 될때 한번만 실행
    */

    useEffect(()=>{
        console.log(`카운트가 ${count}로 변경`);
    }, []);

  return (
    <>
        <div>
            <p>카운트 : {count}</p>
            <button onClick={()=>{
                setCount(count + 1);
            }}>카운트 증가</button>
        </div>
    </>
  )
}

export default PageUseEffect