#리엑트 프로젝트 방침

## 1. 리엑트는 HTML대신 jsx문법을 사용함
    -jsx는 리엑트 프로젝트 개발할때만 사용
    -공식적인 자바스크립트 문법은 아니다.
    -jsx파일에 자바스크립트와 html을 동시에 작성하여 편리하다.

## 2.리엑트는 최상단에 하나의 부모태그가 있어야 한다.
    - <div> </div> = <> </> 같다

## 3. 하나로만 되어있는 태그는 꼭 닫아줘야 한다.
    -img tag
    -input tag
    . 등

## 4. class는 className으로 사용해야 한다.
    -class는 자바스크립트에 사용되는 예약어 이기 때문.

## 5. style을 작성할 때는 중괄호{} 를 두개를 사용해야 함.
    -{{속성 명(카멜케이스) : 속성 값}}
    backgroungColor : 카멜케이스

## 6. 변수를 html에 작성할때는 중괄호{} 를 사용해야 한다.

## 7. click event
    -onClick = [실행할함수];
    -onClick = {function()(실행할함수)};
    -onClick = {() => (실행할함수)};


## 8. 라이브 설치는  -npm(노드패키지메니저) i  / npm install 라이브명

    - 프로젝트 삭제 npm remove
    - npx - 한 번 실행 명령어


## 9. 모든 데이터는 변수가 아닌 state 값에 담아서 사용


  let [a, b] = useState([0,0,0]);
  let [like, setLike] = useState([0,0,0]);
  setLike(값변경) => like = 값

## 10. 변수대신 사용하는 이유?
    - State는 변동사항이 생기면 State를 사용하고 있는 html도 자동으로 재랜더링 됨.
