import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <div className='flex flex-row w-full'>
        <div className='border-b border-b-[#000]'>
          <h1 className='w-[103px]'><img src='/logo.svg'/>로고</h1>
          <div>
            <ul className='flex flex-col text-black text-lg'>
              <li className='p-[12px]'><button><img src='/icon01.svg' ait =""/></button>홈</li>
              <li className='p-[12px]'><button><img src='/icon02.svg' ait =""/></button>로고크기 103px</li>
              <li className='p-[12px]'><button><img src='/icon03.svg' ait =""/></button>너비값 280px</li>
              <li className='p-[12px]'><button><img src='/icon04.svg' ait =""/></button>모든패딩 12px</li>
              <li className='p-[12px]'><button><img src='/icon05.svg' ait =""/></button>호버시 241 245 249</li>
              <li className='p-[12px]'><button><img src='/icon06.svg' ait =""/></button>알림</li>
              <li className='p-[12px]'><button><img src='/icon07.svg' ait =""/></button>만들기</li>
            </ul>
          </div>
        </div>
        <div>컨탠츠</div>
      </div>

    </div>
  );
}
//인스타그램 정답 깃 https://github.com/seik1224/react-ex01insta-build
export default App;
