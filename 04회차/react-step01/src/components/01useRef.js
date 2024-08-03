import React, { useRef, useState } from 'react'

const PageuseRef = () => {
    // 1. DOM 요소접근
    const buttonRef = useRef(null); // 초기값 null

    setTimeout(()=>{
        console.log(buttonRef.current);
    },1000);

    const handleClick = () => {
        if(buttonRef.current){
            buttonRef.current.innerText = '버튼이 클릭되었습니다.';
        }
    }
    // 2. 애니메이션 제어
    const animationRef = useRef(null);

    const startAni = () => {
        animationRef.current.classList.add('animate');
    }

    // 3. 토글
    const [isVisible, SetIsVisible] = useState(false);
    const toggleRef = useRef(false);

    const toggleVisibility = () => {
        toggleRef.current = !toggleRef.current;
        SetIsVisible(toggleRef.current);
    }

  return (
    <>
        {/* 1 */}
        <button ref={buttonRef} onClick={handleClick} >CLICK</button>
        {/* 2 */}
        <div ref={animationRef} className='box'></div>
        <button onClick={startAni}>애니메이션 시작</button>
        {/* 3 */}
        <button onClick={toggleVisibility}>토글</button>
        {isVisible && <div>표시됨</div>}
    </>
  )
}

export default PageuseRef