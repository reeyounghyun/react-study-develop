# React-Router-Dom

npm i react-router-dom@6

---

## 1. 세팅

index.js에 가서

1. import {BrowserRouter} from 'react-router-dom';
2.
<BrowserRouter>
<App />
</BrowserRouter>

---

## 2. 사용

App.js에 가서
1. import 로 Link, Routes, Route
2.
<Routes>
<Route path='/about' element={<About/>} ></Route>
<Route path='/history' element={<History/>} ></Route>
</Routes>

3. <Link to='/about'>소개페이지이동</Link>