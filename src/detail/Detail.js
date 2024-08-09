import { useEffect, useRef, useState } from "react";
import { Nav } from "react-bootstrap";
import { Outlet, useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let result = eval(id) + 1;

  let [alert, setAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  let [count, setCount] = useState(0);
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState("");

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  const animationRef = useRef(null);
  const startAnimation = () => {
    if (animationRef.current) {
      animationRef.current.classList.add("animate");
      setTimeout(() => {
        animationRef.current.classList.remove("animate");
      }, 300);
    }
  };


  const dataId = props.database[id].id;
  const [watch, setWatch] = useState([]);
  


  useEffect(() => {
   
    let watchedItemArray = JSON.parse(localStorage.getItem("watched") || "[]");
    watchedItemArray = watchedItemArray.filter(item => item !== dataId);

    watchedItemArray.unshift(dataId);

    localStorage.setItem("watched", JSON.stringify(watchedItemArray));
    console.log(watchedItemArray);
    setWatch(watchedItemArray);
  }, [dataId]);

  return (
    <>
      <div className="fixed w-40 right-10 top-24 p-2 bg-white z-50">
        <p className="text-center mb-4">최근 본 상품</p>
        <ul>
          <li>
            {watch.map((v, i) => {
              return (
                <img
                  src={`${process.env.PUBLIC_URL}/thumb${[eval(v) + 1]}.jpg`}
                  className="mb-2"
                  alt={`${v}`}
                  key={v}
                />
              );
            })}
          </li>
        </ul>
      </div>
      {alert === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <div className={`container-fluid start ${fade2}`}>
        <div
          className="absolute -z-10 w-full -m-3 h-[300px]"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/bg${[
              eval(id) + 1,
            ]}.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="row justify-center">
          <div className="col-md-6 text-center mt-10 mb-[200px]">
            <img
              ref={animationRef}
              src={`${process.env.PUBLIC_URL}/thumb${[eval(id) + 1]}.jpg`}
              className="rounded-[60px] mb-20"
              alt=""
            />
            <h4 className="text-6xl en-txt mb-6 text-[#ff541e]">
              {props.database[id].title}
            </h4>
            <p className="text-2xl en-txt">
              {alert === true
                ? props.database[id].price - 5000
                : props.database[id].price}
            </p>
            <p className=" mb-6">{props.database[id].content}</p>
            <button className="btn btn-danger" onClick={startAnimation}>
              주문하기
            </button>
          </div>
        </div>
      </div>

      <div className="w-[800px] pb-40 mx-auto">
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              className={` text-red-600 hover:text-red-400`}
              onClick={() => {
                setTab(0);
              }}
              eventKey="link0"
            >
              상세
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className=" text-red-600 hover:text-red-400"
              onClick={() => {
                setTab(1);
              }}
              eventKey="link1"
            >
              리뷰
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className=" text-red-600 hover:text-red-400"
              onClick={() => {
                setTab(2);
              }}
              eventKey="link2"
            >
              정보
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} />
      </div>
      <Outlet></Outlet>
    </>
  );
}

function TabContent(props) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [props.tab]);

  return (
    <>
      <div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}
      </div>
    </>
  );
}
export default Detail;
