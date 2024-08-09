## 1. 이미지 넣는 법

1. src에 직접 이미지 넣어서 사용가능
./이미지폴더/이미지.jpg

2. 리액트에서 추천하는 방법
import 이미지 from './이미지경로/이미지.jpg'
{이미지}

3. public 폴더 이용
/이미지.jpg

서브페이지 만들때 이미지 경로가 안먹히는 문제!
sbs.com/about/  ->  /about/이미지.jpg

<해결방안>
src={`${process.env.PUBLIC_URL}/이미지.jpg`}
 
