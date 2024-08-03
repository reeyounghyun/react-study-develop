import { useRecoilState } from 'recoil';
import './App.css';
import Counter from './Counter';
import { counterState } from './store';

function App() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <>
      <div>
        <h1>리코일을 활용한 간단한 카운터</h1>
        <h3>App.js 카운터 : {count}</h3>
        <Counter />
      </div>
    </>
  );
}

export default App;
