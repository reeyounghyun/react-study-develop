import { Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import HistoryPage from './HistoryPage';

function App() {
  return (
    <>
      <h1>HOME</h1>
      <Link to='/about'>소개페이지이동</Link>
      <br/>
      <Link to='/history'>히스토리페이지이동</Link>
      <br/>
      <Link to={`/user/1`}>사용자 1로 이동</Link>
      <br/>
      <Link to={`/user/2`}>사용자 2로 이동</Link>
      
      <Routes>
        <Route path='/' ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/history' element={<History/>} ></Route>
        <Route path='/user/:userId' element={<User/>} ></Route>
      </Routes>
    
    </>
  );
}

function About(){
  return <h1>소개페이지</h1>;
}

function History(){
  return <>
    <HistoryPage />
  </>;
}

function User() {
  const { userId } = useParams();
  return (
    <>
      <h1>마이페이지</h1>
      <p>사용자 ID : { userId }</p>
    </>
  )
}

export default App;
