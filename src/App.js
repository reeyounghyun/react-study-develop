import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import data from "./data";
import Detail from './detail/Detail';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

function App() {
  let [database, setDatabase] = useState(data);

  const headerRef = useRef(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  let handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };
  let handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  useEffect(()=>{
    const handleScroll = () => {
      if(headerRef.current){
        if(window.scrollY > headerRef.current.clientHeight){
          setIsHeaderFixed(true);
        } else {
          setIsHeaderFixed(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <Navbar ref={headerRef} style={{
        backgroundImage : isHeaderFixed
        ? 'none' 
        : `url(${process.env.PUBLIC_URL}/nav.png)`,
        position : isHeaderFixed ? 'fixed' : 'relative',
        top:0,
        width:'100%',
        zIndex:1000,
        color:'#fff !important'
      }}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              className="text-white ml-6 mr-4 opacity-70 hover:!opacity-100"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white mr-4 opacity-70 hover:!opacity-100"
              to="about"
            >
              About
            </Link>
            <div className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className="text-white mr-4 opacity-70 hover:!opacity-100"
                to="detail/0"
              >
                Detail
              </Link>
              {
                isDropdownVisible && (
                  <>
                    <ul className="absolute z-50 pt-3 left-1/2 -translate-x-1/2">
                      <li>
                        <Link to="detail/0" 
                        className="inline-block border-0 rounded-none
                        text-white h-10 leading-10 px-4 min-w-36 text-center
                        bg-[#ff541e] hover:bg-[rgb(234,64,8)]
                        ">
                          Mario
                        </Link>
                      </li>
                      <li>
                        <Link to="detail/1" 
                        className="inline-block border-0 rounded-none
                        text-white h-10 leading-10 px-4 min-w-36 text-center
                        bg-[#ff541e] hover:bg-[rgb(234,64,8)]
                        ">
                          Zelda
                        </Link>
                      </li>
                      <li>
                        <Link to="detail/2" 
                        className="inline-block border-0 rounded-none
                        text-white h-10 leading-10 px-4 min-w-36 text-center
                        bg-[#ff541e] hover:bg-[rgb(234,64,8)]
                        ">
                          Pokemon
                        </Link>
                      </li>
                    </ul>
                  </>
                )
              }
              
            </div>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Swiper 코드 작성 */}
              <Swiper navigation={true} pagination={{type:'fraction'}} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                  <img src={`${process.env.PUBLIC_URL}/bg1.jpg`} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${process.env.PUBLIC_URL}/bg2.jpg`} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={`${process.env.PUBLIC_URL}/bg3.jpg`} />
                </SwiperSlide>
              </Swiper>

              <div className="container my-32">
                <div className="row">
                  {data.map((v, i) => {
                    return (
                      <Card
                        database={database[i]}
                        i={i + 1}
                        key={i}
                        mt={i === 1 ? "mt-16" : null}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          }
        />

        {/* 
            Route 코드 작성

            /about 경로에 소개페이지 컴포넌트 만들기
            /detail 경로에 Detail 컴포넌트 만들기

        */}
        <Route path='/about' element={<div>소개페이지</div>} />
        <Route path='/detail/:id' element={
          <>
            <Detail database={database} />
          </>
        } />
        <Route path='*' element={<div>404 Page</div>} />
      </Routes>
    </>
  );
}

function Card(props) {
  return (
    <div className={`col-md-4 text-center ${props.mt}`}>
      <img
        className="mb-2 rounded-3xl"
        src={`${process.env.PUBLIC_URL}/thumb${props.i}.jpg`}
        alt=""
      />
      <h4 className="text-6xl en-txt mb-2 text-[#ff541e]">
        {props.database.title}
      </h4>
      <p className="text-2xl en-txt">{props.database.price}</p>
      <p className="mb-2">{props.database.content}</p>
    </div>
  );
}

export default App;
