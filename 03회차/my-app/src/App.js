import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let navName = '토너';
  let classCustom = 'red';

  //let [a, setA] = useState(0);
  let [b, setB] = useState(0);
  let [c, setC] = useState(0);
  let [like, setLike] = useState([0,0,0]);
  let [title, setTitle] = useState(['토너추천','로션추천','앰플추천']);

  return (
    <>
    <div className='bg-black text-white h-[80px] flex items-center justify-between'>
      <h4>LOGO</h4>
      <div className='flex gap-[10px]'>
        <div className={classCustom}>{navName}</div>
        <div className={classCustom}>{navName}</div>
        <div className={classCustom}>{navName}</div>
        <div className={classCustom}>{navName}</div>
      </div>
      <div>
        <a href='/'>로그인</a>
      </div>
    </div>
    <div>
      <div className='flex justify-between items-center p-[20ox] border-b border-[#111]'> 
        <h4 onClick={()=>{
          /**
           State 변경함수 작동원리
           1) 기존 State ===  신규 State 변경하지 않음 
           기존 상태와 신규 상태가 같으면 변경되지 않음

           2)Array는 참조가 같기 깨문
           **/
          let copy = [...like];
          copy[0] = copy[0] + 1;
          setLike(copy);
        }}
          >{title[0]}👍 {like[0]}</h4>
        <p>글 내용</p>
        <p>0</p>
      </div>
      <div className='flex justify-between items-center p-[20ox] border-b border-[#111]'> 
        <h4 onClick={() => {
          let copy = [...like];
          copy[0] = copy[0] + 1;
          setLike(copy);
        }}>{title[1]}👍 {b}</h4>
        <p>글 내용</p>
        <p>0</p>
      </div>
      <div className='flex justify-between items-center p-[20ox] border-b border-[#111]'> 
        <h4 onClick={()=> {
          let copy = [...like];
          copy[0] = copy[0] + 1;
          setLike(copy)
        }}>{title[2]}👍 {c}</h4>
        <p>글 내용</p>
        <p>0</p>
      </div>
    </div>
    </>
  );
}

export default App;