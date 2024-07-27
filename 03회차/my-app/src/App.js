import logo from './logo.svg';
import './App.css';

function App() {
  let hi = '지금은 수업중';

  function func1(){
    console.log('click!');
  }

  return (
    <>
      <p className='red' style={{backgroundColor: 'yellow', fontSize:"30px"}}>{hi}</p> 
      <div onClick={func1}>click</div>
      <div onClick={func1}>click</div>
    </>
  );
}

export default App;