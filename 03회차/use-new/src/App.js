import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className='flex App'>
      <header className='App-header flex-none w-[280px] '>
        <div className='fixed w-[280px] p-3 h-full border-r border-gray-300 border-solid flex flex-col justify-between'>
          <div>
            <h1 className='w-[103px]'><img src='/logo.svg' alt ="인스타그램"/></h1>
            <ul className='flex flex-col text-lg text-black'>
              <li className='p-[12px]'>
                <a href="/" className='flex items-center gap-[12px]'>
                  <img src='/icon01.svg' alt ="홈"/>
                  홈
                </a>
              </li>
              <li className='p-[12px]'>
                <a href="/" className='flex items-center gap-[12px]'>
                  <img src='/icon02.svg' alt ="로고크기"/>
                  로고크기 103px
                </a>
              </li>
              <li className='p-[12px]'>
                <a href="/" className='flex items-center gap-[12px]'>
                  <img src='/icon03.svg' alt ="너비값"/>
                  너비값 280px
                </a>
              </li>
              <li className='p-[12px]'>
                <a href="/" className='flex items-center gap-[12px]'>
                  <img src='/icon04.svg' alt ="모든패딩"/>
                  모든패딩 12px  
                </a>
              </li>
              <li className='p-[12px]'>
                <a href="/" className='flex items-center gap-[12px]'>
                  <img src='/icon05.svg' alt ="호버시"/>
                  호버시 241 245 249
                </a>
              </li>
              <li className='p-[12px]'>
                <a href="/" className='flex items-center gap-[12px]'>
                  <img src='/icon06.svg' alt ="알림"/>
                  알림
                </a>
              </li>
              <li className='p-[12px]'>
                <a href="/" className='flex items-center gap-[12px]'>
                  <img src='/icon07.svg' alt ="만들기"/>
                  만들기
                </a>
              </li>
            </ul>
          </div>
          <div className='p-3 hover:bg-slate-100 rounded-xl'>
            <a href="/" className='flex items-center gap-[12px] text-lg'>
              <img src='/icon09.svg' alt='더보기'/>
              <sapn className="pl-4">더보기</sapn>
            </a>
          </div>
        </div>
      </header>
      <section className='w-full'>
        <div className='w-[460px] mt-8 mb-14 mx-auto'>
          <div className='flex items-center justify-between mb-3'>
            <div class="flex items-center">
              <img src="/profile1.jpg" alt='마리오' class="w-[32px] rounded-full"/>
              <span class="pl-3">Mario</span>  
            </div>
            <img src="./icon10.svg" alt="이미지" />
          </div>
          <div className="mb-3">
            <img src="/thumb1.jpg" alt="마리오_배너" className="w-full" />
          </div>
          <div>
            <div className="mb-3">
              <button typ="button" className="hover:opacity-35">
                <img src="/icon11.svg" alt="종아요 버튼"/>
              </button>
            </div>
            <div>
              <p className="mb-3">
                좋아요
                <span>0</span>
                개
              </p>
              <h4 class="mb-3">내용은 data에서 가져오세요.</h4>
              <p class="mb-3 text-base">컨텐츠 너비는 480px 입니다. 모든 margin-buttom은 12px</p>
            </div>
            <div>
              <input type="text" className="w-full border-b border-solid border-gray-300 py-3" placeholder="댓글달기" />
            </div>
          </div>
        </div>
        <div className='w-[460px] mt-8 mb-14 mx-auto'>
          <div className='flex items-center justify-between mb-3'>
            <div class="flex items-center">
              <img src="/profile2.jpg" alt='마리오' class="w-[32px] rounded-full"/>
              <span class="pl-3">Zelda</span>  
            </div>
            <img src="./icon10.svg" alt="이미지" />
          </div>
          <div className="mb-3">
            <img src="/thumb2.jpg" alt="Zelda" className="w-full" />
          </div>
          <div>
            <div className="mb-3">
              <button typ="button" className="hover:opacity-35">
                <img src="/icon11.svg" alt="종아요 버튼"/>
              </button>
            </div>
            <div>
              <p className="mb-3">
                좋아요
                <span>0</span>
                개
              </p>
              <h4 class="mb-3">내용은 data에서 가져오세요.</h4>
              <p class="mb-3 text-base">컨텐츠 너비는 480px 입니다. 모든 margin-buttom은 12px</p>
            </div>
            <div>
              <input type="text" className="w-full border-b border-solid border-gray-300 py-3" placeholder="댓글달기" />
            </div>
          </div>
        </div>
        <div className='w-[460px] mt-8 mb-14 mx-auto'>
          <div className='flex items-center justify-between mb-3'>
            <div class="flex items-center">
              <img src="/profile3.jpg" alt='마리오' class="w-[32px] rounded-full"/>
              <span class="pl-3">Pokemon</span>  
            </div>
            <img src="./icon10.svg" alt="이미지" />
          </div>
          <div className="mb-3">
            <img src="/thumb3.jpg" alt="Pokemon_배너" className="w-full" />
          </div>
          <div>
            <div className="mb-3">
              <button typ="button" className="hover:opacity-35">
                <img src="/icon11.svg" alt="종아요 버튼"/>
              </button>
            </div>
            <div>
              <p className="mb-3">
                좋아요
                <span>0</span>
                개
              </p>
              <h4 class="mb-3">내용은 data에서 가져오세요.</h4>
              <p class="mb-3 text-base">컨텐츠 너비는 480px 입니다. 모든 margin-buttom은 12px</p>
            </div>
            <div>
              <input type="text" className="w-full border-b border-solid border-gray-300 py-3" placeholder="댓글달기" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
