/*
    [ import & export ]
    - 자바스크립트를 다른 파일로 나누는 코드
    - 내가 원하는 변수, 함수, class만 다른 파일로 보낼 수 있음
    - import해온 변수, 함수는 사용 가능, 수정 불가
*/

let a = 10;
let b = 10;
let c = 10;
// export default a;
export {a, b}; 
/*
    export default는 한번만 사용가능,
    import시엔 변수명을 새롭게 작명가능

    export는 {변수명1, 변수명2, ....} 이렇게 사용가능,
    import시엔 정확히 변수명 써줘야함

*/