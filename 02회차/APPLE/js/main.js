
let yOffset = 0; // window.scrollY 대신 쓸 변수
let prevScrollHeight = 0; // 현재 스크롤 위치 window.scrollY보다 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합
let currentScene = 0; // 현재 활성화된 섹션
let enterNewscene = false; // 새로운 섹션이이 시작되는 순간 true

const sceneInfo = [
  {
    // 0
    type: "sticky",
    heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
    scrollHeight: 0, // 여러 DEVICE에서 열때 높이값을 다르게 해주기 위해 초기값 0
    objs: {
      container: document.querySelector("#scroll-section-0"),
      messageA: document.querySelector("#scroll-section-0 .main-message.a"),
      messageB: document.querySelector("#scroll-section-0 .main-message.b"),
      messageC: document.querySelector("#scroll-section-0 .main-message.c"),
      messageD: document.querySelector("#scroll-section-0 .main-message.d"),
      canvas: document.querySelector("#video-canvas-0"),
      context: document.querySelector("#video-canvas-0").getContext("2d"),
      videoImages: [], // 이미지 담아줄 배열
    },
    values: {
      videoImageCount: 66, // 이미지 개수
      imageSequence: [0, 65], // 이미지 범위
      canvas_opacity_out: [1, 0, { start: 0.9, end: 1.0 }], // 캔버스도 씬이 끝날때 사라지게
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
      messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
      messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
      messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
      messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
      messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
      messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
      messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
      messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
    },
  },
  {
    // 1
    type: "normal",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-1"),
    },
  },
  {
    // 2
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-2"),
      messageA: document.querySelector("#scroll-section-2 .a"),
      messageB: document.querySelector("#scroll-section-2 .b"),
      messageC: document.querySelector("#scroll-section-2 .c"),
      pinB: document.querySelector("#scroll-section-2 .b .pin"),
      pinC: document.querySelector("#scroll-section-2 .c .pin"),
      canvas: document.querySelector("#video-canvas-1"),
      context: document.querySelector("#video-canvas-1").getContext("2d"),
      videoImages: [],
    },
    values: {
      videoImageCount: 114,
      imageSequence: [0, 113],
      canvas_opacity_in: [0, 1, { start: 0, end: 0.1 }],
      canvas_opacity_out: [1, 0, { start: 0.95, end: 1 }],
      messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
      messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
      messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
      messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
      messageC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
      messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
      messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
      messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
      messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
      messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
      messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
      pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
      pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
      pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
      pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
      pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
    },
  },
  {
    // 3
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-3"),
      messageA: document.querySelectorAll("#scroll-section-3 .a li"),
      messageB: document.querySelectorAll("#scroll-section-3 .b li"),
      messageC: document.querySelectorAll("#scroll-section-3 .c li"),
    },
    values: {
      messageA_translateX_in: [
        [-5, 0, { start: 0.15, end: 0.2 }],
        [-5, 0, { start: 0.18, end: 0.23 }],
        [-5, 0, { start: 0.21, end: 0.26 }],
        [-5, 0, { start: 0.24, end: 0.29 }],
      ],
      messageA_translateX_out: [
        [0, 5, { start: 0.3, end: 0.35 }],
        [0, 5, { start: 0.3, end: 0.35 }],
        [0, 5, { start: 0.3, end: 0.35 }],
        [0, 5, { start: 0.3, end: 0.35 }],
      ],
      messageA_opacity_in: [
        [0, 1, { start: 0.15, end: 0.2 }],
        [0, 1, { start: 0.18, end: 0.23 }],
        [0, 1, { start: 0.21, end: 0.26 }],
        [0, 1, { start: 0.24, end: 0.29 }],
      ],
      messageA_opacity_out: [
        [1, 0, { start: 0.3, end: 0.35 }],
        [1, 0, { start: 0.3, end: 0.35 }],
        [1, 0, { start: 0.3, end: 0.35 }],
        [1, 0, { start: 0.3, end: 0.35 }],
      ],

      messageB_translateX_in: [
        [5, 0, { start: 0.5, end: 0.55 }],
        [5, 0, { start: 0.53, end: 0.58 }],
        [5, 0, { start: 0.56, end: 0.61 }],
        [5, 0, { start: 0.59, end: 0.64 }],
      ],
      messageB_translateX_out: [
        [0, -5, { start: 0.58, end: 0.63 }],
        [0, -5, { start: 0.58, end: 0.63 }],
        [0, -5, { start: 0.58, end: 0.63 }],
        [0, -5, { start: 0.58, end: 0.63 }],
      ],
      messageB_opacity_in: [
        [0, 1, { start: 0.5, end: 0.55 }],
        [0, 1, { start: 0.53, end: 0.58 }],
        [0, 1, { start: 0.56, end: 0.61 }],
        [0, 1, { start: 0.59, end: 0.64 }],
      ],
      messageB_opacity_out: [
        [1, 0, { start: 0.58, end: 0.63 }],
        [1, 0, { start: 0.58, end: 0.63 }],
        [1, 0, { start: 0.58, end: 0.63 }],
        [1, 0, { start: 0.58, end: 0.63 }],
      ],

      messageC_translateX_in: [
        [-5, 0, { start: 0.72, end: 0.77 }],
        [-5, 0, { start: 0.75, end: 0.8 }],
        [-5, 0, { start: 0.78, end: 0.83 }],
        [-5, 0, { start: 0.81, end: 0.86 }],
      ],
      messageC_translateX_out: [
        [0, 5, { start: 0.85, end: 0.9 }],
        [0, 5, { start: 0.85, end: 0.9 }],
        [0, 5, { start: 0.85, end: 0.9 }],
        [0, 5, { start: 0.85, end: 0.9 }],
      ],
      messageC_opacity_in: [
        [0, 1, { start: 0.72, end: 0.77 }],
        [0, 1, { start: 0.75, end: 0.8 }],
        [0, 1, { start: 0.78, end: 0.83 }],
        [0, 1, { start: 0.81, end: 0.86 }],
      ],
      messageC_opacity_out: [
        [1, 0, { start: 0.85, end: 0.9 }],
        [1, 0, { start: 0.85, end: 0.9 }],
        [1, 0, { start: 0.85, end: 0.9 }],
        [1, 0, { start: 0.85, end: 0.9 }],
      ],
    },
  },
];

function setCanvasImages() {
  for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
    let result = `${i}`.padStart(4, "0");
    imgElem = new Image();
    imgElem.src = `./video/001/${result}.png`;
    sceneInfo[0].objs.videoImages.push(imgElem);
  }
  // console.log(sceneInfo[0].objs.videoImages);
  let imgElem2;
  for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
    let result = `${i}`.padStart(5, "0");
    imgElem2 = new Image();
    imgElem2.src = `./video/002/large_${result}.jpg`;
    sceneInfo[2].objs.videoImages.push(imgElem2);
  }
}

setCanvasImages();

// 각 스크롤 섹션의 높이 세팅
function setLayout() {
  const sec3Title = document.querySelector("#scroll-section-3 .sticky-message");

  for (let i = 0; i < sceneInfo.length; i++) {
    if (sceneInfo[i].type === "sticky") {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    } else if (sceneInfo[i].type === "normal") {
      sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
    }
    console.log(sec3Title);
    sec3Title.style.height = `${sceneInfo[3].scrollHeight}px`;
    sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
  }
  // console.log(sceneInfo);

  // 새로고침 시
  yOffset = window.screenY;
  let totalScrollHeight = 0;
  for (let i = 0; i < sceneInfo.length; i++) {
    totalScrollHeight += sceneInfo[i].scrollHeight;
    if (totalScrollHeight >= yOffset) {
      currentScene = i;
      break;
    }
  }
  document.body.setAttribute("id", `show-scene-${currentScene}`);

  const heightRatio = window.innerHeight / 1080; // window.innerHeight / 캔버스 원래 height 비율
  sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
  sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
}

// 계산해주는 함수
//currentYoffset : 현재 얼마나 스크롤 되었는지에 따라 values : opacity 조정

function calcValues(values, currentYoffset) {
  let rv;

  const scrollHeight = sceneInfo[currentScene].scrollHeight; //현재 섹션의 scrollHeight
  // 현재스크롤에서 얼마나 스크롤 했는지 비율 구하기
  let scrollRatio = currentYoffset / sceneInfo[currentScene].scrollHeight;

  if (values.length === 3) {
    // start ~ end 사이에서 애니메이션 실행
    const partScrollStart = values[2].start * scrollHeight;
    const partScrollEnd = values[2].end * scrollHeight;
    const partScrollHeight = partScrollEnd - partScrollStart;

    // 범위안에 들어올때만 작동위해 if문 .. 안그러면 currentYoffset 음수값...
    if (currentYoffset >= partScrollStart && currentYoffset <= partScrollEnd) {
      // 현재씬에서 얼마나 스크롤 되었는지가 S와 E사이에 들어가야함 :: 비율 구하려면 S와 E사이에서만의 얼마나 스크롤 되었는지를 알아야 함
      rv =
        ((currentYoffset - partScrollStart) / partScrollHeight) *
          (values[1] - values[0]) +
        values[0];
    } else if (currentYoffset < partScrollStart) {
      rv = values[0];
    } else if (currentYoffset > partScrollStart) {
      rv = values[1];
    }
  } else {
    // return scrollRatio; -> console.log(calcValues(values, currentYoffset));
    rv = scrollRatio * (values[1] - values[0]) + values[0]; // [200, 900] opacity가 아니라 포지션이라면?을 생각해서 계산
  }

  return rv;
}

// 애니메이션에 대한 함수
function playAnimation() {
  const objs = sceneInfo[currentScene].objs;
  const values = sceneInfo[currentScene].values;
  const currentYoffset = yOffset - prevScrollHeight;
  //yOffset - prevScrollHeight : 현재 스크롤된 양 - 이미 지나간 섹션들의 합 : 현재씬에서 얼마나 스크롤 했는지 나옴
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  const scrollRatio = currentYoffset / scrollHeight; // 현재씬에서 얼마나 스크롤 했는지 비율 :: 얼마나스크롤 되었는지(현재스크롤 된거 - 이미 스크롤된 섹션들) / 현재섹션의 scrollHeight
  // 스크롤 비율에 따라 in을 적용할지 out을 적용할지 해줌 0.22 기준으로 작으면 in 크면 out

  // console.log(currentScene, currentYoffset);
  switch (currentScene) {
    case 0:
      // console.log("0 play");
      // let messageA_opacity_0 = sceneInfo[0].values.messageA_opacity[0];
      // let messageA_opacity_1 = sceneInfo[0].values.messageA_opacity[1];

      let sequence = Math.round(
        calcValues(values.imageSequence, currentYoffset)
      );
      console.log(sequence);
      objs.context.drawImage(objs.videoImages[sequence], 0, 0);
      objs.canvas.style.opacity = calcValues(
        values.canvas_opacity_out,
        currentYoffset
      );
      if (scrollRatio <= 0.22) {
        objs.messageA.style.opacity = calcValues(
          values.messageA_opacity_in,
          currentYoffset
        );
        objs.messageA.style.transform = `translateY(${calcValues(
          values.messageA_translateY_in,
          currentYoffset
        )}%)`;
      } else {
        objs.messageA.style.opacity = calcValues(
          values.messageA_opacity_out,
          currentYoffset
        );
        objs.messageA.style.transform = `translateY(${calcValues(
          values.messageA_translateY_out,
          currentYoffset
        )}%)`;
      }

      if (scrollRatio <= 0.42) {
        // in
        objs.messageB.style.opacity = calcValues(
          values.messageB_opacity_in,
          currentYoffset
        );
        objs.messageB.style.transform = `translate3d(0, ${calcValues(
          values.messageB_translateY_in,
          currentYoffset
        )}%, 0)`;
      } else {
        // out
        objs.messageB.style.opacity = calcValues(
          values.messageB_opacity_out,
          currentYoffset
        );
        objs.messageB.style.transform = `translate3d(0, ${calcValues(
          values.messageB_translateY_out,
          currentYoffset
        )}%, 0)`;
      }

      if (scrollRatio <= 0.62) {
        // in
        objs.messageC.style.opacity = calcValues(
          values.messageC_opacity_in,
          currentYoffset
        );
        objs.messageC.style.transform = `translate3d(0, ${calcValues(
          values.messageC_translateY_in,
          currentYoffset
        )}%, 0)`;
      } else {
        // out
        objs.messageC.style.opacity = calcValues(
          values.messageC_opacity_out,
          currentYoffset
        );
        objs.messageC.style.transform = `translate3d(0, ${calcValues(
          values.messageC_translateY_out,
          currentYoffset
        )}%, 0)`;
      }

      if (scrollRatio <= 0.82) {
        // in
        objs.messageD.style.opacity = calcValues(
          values.messageD_opacity_in,
          currentYoffset
        );
        objs.messageD.style.transform = `translate3d(0, ${calcValues(
          values.messageD_translateY_in,
          currentYoffset
        )}%, 0)`;
      } else {
        // out
        objs.messageD.style.opacity = calcValues(
          values.messageD_opacity_out,
          currentYoffset
        );
        objs.messageD.style.transform = `translate3d(0, ${calcValues(
          values.messageD_translateY_out,
          currentYoffset
        )}%, 0)`;
      }

      break;
    case 1:
      // console.log("1 play");
      break;
    case 2:
      // console.log("2 play");
      let sequence2 = Math.round(
        calcValues(values.imageSequence, currentYoffset)
      );
      objs.context.drawImage(objs.videoImages[sequence2], 0, 0);

      if (scrollRatio <= 0.5) {
        // in
        objs.canvas.style.opacity = calcValues(
          values.canvas_opacity_in,
          currentYoffset
        );
      } else {
        // out
        objs.canvas.style.opacity = calcValues(
          values.canvas_opacity_out,
          currentYoffset
        );
      }

      if (scrollRatio <= 0.25) {
        // in
        objs.messageA.style.opacity = calcValues(
          values.messageA_opacity_in,
          currentYoffset
        );
        objs.messageA.style.transform = `translate3d(0, ${calcValues(
          values.messageA_translateY_in,
          currentYoffset
        )}%, 0)`;
      } else {
        // out
        objs.messageA.style.opacity = calcValues(
          values.messageA_opacity_out,
          currentYoffset
        );
        objs.messageA.style.transform = `translate3d(0, ${calcValues(
          values.messageA_translateY_out,
          currentYoffset
        )}%, 0)`;
      }

      if (scrollRatio <= 0.57) {
        // in
        objs.messageB.style.transform = `translate3d(0, ${calcValues(
          values.messageB_translateY_in,
          currentYoffset
        )}%, 0)`;
        objs.messageB.style.opacity = calcValues(
          values.messageB_opacity_in,
          currentYoffset
        );
        objs.pinB.style.transform = `scaleY(${calcValues(
          values.pinB_scaleY,
          currentYoffset
        )})`;
      } else {
        // out
        objs.messageB.style.transform = `translate3d(0, ${calcValues(
          values.messageB_translateY_out,
          currentYoffset
        )}%, 0)`;
        objs.messageB.style.opacity = calcValues(
          values.messageB_opacity_out,
          currentYoffset
        );
        objs.pinB.style.transform = `scaleY(${calcValues(
          values.pinB_scaleY,
          currentYoffset
        )})`;
      }

      if (scrollRatio <= 0.83) {
        // in
        objs.messageC.style.transform = `translate3d(0, ${calcValues(
          values.messageC_translateY_in,
          currentYoffset
        )}%, 0)`;
        objs.messageC.style.opacity = calcValues(
          values.messageC_opacity_in,
          currentYoffset
        );
        objs.pinC.style.transform = `scaleY(${calcValues(
          values.pinC_scaleY,
          currentYoffset
        )})`;
      } else {
        // out
        objs.messageC.style.transform = `translate3d(0, ${calcValues(
          values.messageC_translateY_out,
          currentYoffset
        )}%, 0)`;
        objs.messageC.style.opacity = calcValues(
          values.messageC_opacity_out,
          currentYoffset
        );
        objs.pinC.style.transform = `scaleY(${calcValues(
          values.pinC_scaleY,
          currentYoffset
        )})`;
      }

      break;
    case 3:
      // console.log("3 play");

      if (scrollRatio <= 0.1 || scrollRatio >= 0.9) {
        // objs.container.style.transform = `translate3d(-50% ,-50% ,  0)`;
      }

      if (scrollRatio <= 0.25) {
        // in
        objs.messageA[0].style.opacity = calcValues(
          values.messageA_opacity_in[0],
          currentYoffset
        );
        objs.messageA[0].style.transform = `translate3d(${calcValues(
          values.messageA_translateX_in[0],
          currentYoffset
        )}%,0,  0)`;
        objs.messageA[1].style.opacity = calcValues(
          values.messageA_opacity_in[1],
          currentYoffset
        );
        objs.messageA[1].style.transform = `translate3d(${calcValues(
          values.messageA_translateX_in[1],
          currentYoffset
        )}%,0,  0)`;
        objs.messageA[2].style.opacity = calcValues(
          values.messageA_opacity_in[2],
          currentYoffset
        );
        objs.messageA[2].style.transform = `translate3d(${calcValues(
          values.messageA_translateX_in[2],
          currentYoffset
        )}%,0,  0)`;
        objs.messageA[3].style.opacity = calcValues(
          values.messageA_opacity_in[3],
          currentYoffset
        );
        objs.messageA[3].style.transform = `translate3d(${calcValues(
          values.messageA_translateX_in[3],
          currentYoffset
        )}%,0,  0)`;
      } else {
        // out
        objs.messageA[0].style.opacity = calcValues(
          values.messageA_opacity_out[0],
          currentYoffset
        );
        objs.messageA[0].style.transform = `translate3d(${calcValues(
          values.messageA_translateX_out[0],
          currentYoffset
        )}%,0,  0)`;
        objs.messageA[1].style.opacity = calcValues(
          values.messageA_opacity_out[1],
          currentYoffset
        );
        objs.messageA[1].style.transform = `translate3d(${calcValues(
          values.messageA_translateX_out[1],
          currentYoffset
        )}%,0,  0)`;
        objs.messageA[2].style.opacity = calcValues(
          values.messageA_opacity_out[2],
          currentYoffset
        );
        objs.messageA[2].style.transform = `translate3d(${calcValues(
          values.messageA_translateX_out[2],
          currentYoffset
        )}%,0,  0)`;
        objs.messageA[3].style.opacity = calcValues(
          values.messageA_opacity_out[3],
          currentYoffset
        );
        objs.messageA[3].style.transform = `translate3d(${calcValues(
          values.messageA_translateX_out[3],
          currentYoffset
        )}%,0,  0)`;
      }

      if (scrollRatio <= 0.57) {
        // in
        objs.messageB[0].style.opacity = calcValues(
          values.messageB_opacity_in[0],
          currentYoffset
        );
        objs.messageB[0].style.transform = `translate3d(${calcValues(
          values.messageB_translateX_in[0],
          currentYoffset
        )}%,0,  0)`;
        objs.messageB[1].style.opacity = calcValues(
          values.messageB_opacity_in[1],
          currentYoffset
        );
        objs.messageB[1].style.transform = `translate3d(${calcValues(
          values.messageB_translateX_in[1],
          currentYoffset
        )}%,0,  0)`;
        objs.messageB[2].style.opacity = calcValues(
          values.messageB_opacity_in[2],
          currentYoffset
        );
        objs.messageB[2].style.transform = `translate3d(${calcValues(
          values.messageB_translateX_in[2],
          currentYoffset
        )}%,0,  0)`;
        objs.messageB[3].style.opacity = calcValues(
          values.messageB_opacity_in[3],
          currentYoffset
        );
        objs.messageB[3].style.transform = `translate3d(${calcValues(
          values.messageB_translateX_in[3],
          currentYoffset
        )}%,0,  0)`;
      } else {
        // out
        objs.messageB[0].style.opacity = calcValues(
          values.messageB_opacity_out[0],
          currentYoffset
        );
        objs.messageB[0].style.transform = `translate3d(${calcValues(
          values.messageB_translateX_out[0],
          currentYoffset
        )}%,0,  0)`;
        objs.messageB[1].style.opacity = calcValues(
          values.messageB_opacity_out[1],
          currentYoffset
        );
        objs.messageB[1].style.transform = `translate3d(${calcValues(
          values.messageB_translateX_out[1],
          currentYoffset
        )}%,0,  0)`;
        objs.messageB[2].style.opacity = calcValues(
          values.messageB_opacity_out[2],
          currentYoffset
        );
        objs.messageB[2].style.transform = `translate3d(${calcValues(
          values.messageB_translateX_out[2],
          currentYoffset
        )}%,0,  0)`;
        objs.messageB[3].style.opacity = calcValues(
          values.messageB_opacity_out[3],
          currentYoffset
        );
        objs.messageB[3].style.transform = `translate3d(${calcValues(
          values.messageB_translateX_out[3],
          currentYoffset
        )}%,0,  0)`;
      }

      if (scrollRatio <= 0.83) {
        // in
        objs.messageC[0].style.opacity = calcValues(
          values.messageC_opacity_in[0],
          currentYoffset
        );
        objs.messageC[0].style.transform = `translate3d(${calcValues(
          values.messageC_translateX_in[0],
          currentYoffset
        )}%,0,  0)`;
        objs.messageC[1].style.opacity = calcValues(
          values.messageC_opacity_in[1],
          currentYoffset
        );
        objs.messageC[1].style.transform = `translate3d(${calcValues(
          values.messageC_translateX_in[1],
          currentYoffset
        )}%,0,  0)`;
        objs.messageC[2].style.opacity = calcValues(
          values.messageC_opacity_in[2],
          currentYoffset
        );
        objs.messageC[2].style.transform = `translate3d(${calcValues(
          values.messageC_translateX_in[2],
          currentYoffset
        )}%,0,  0)`;
        objs.messageC[3].style.opacity = calcValues(
          values.messageC_opacity_in[3],
          currentYoffset
        );
        objs.messageC[3].style.transform = `translate3d(${calcValues(
          values.messageC_translateX_in[3],
          currentYoffset
        )}%,0,  0)`;
      } else {
        // out
        objs.messageC[0].style.opacity = calcValues(
          values.messageC_opacity_out[0],
          currentYoffset
        );
        objs.messageC[0].style.transform = `translate3d(${calcValues(
          values.messageC_translateX_out[0],
          currentYoffset
        )}%,0,  0)`;
        objs.messageC[1].style.opacity = calcValues(
          values.messageC_opacity_out[1],
          currentYoffset
        );
        objs.messageC[1].style.transform = `translate3d(${calcValues(
          values.messageC_translateX_out[1],
          currentYoffset
        )}%,0,  0)`;
        objs.messageC[2].style.opacity = calcValues(
          values.messageC_opacity_out[2],
          currentYoffset
        );
        objs.messageC[2].style.transform = `translate3d(${calcValues(
          values.messageC_translateX_out[2],
          currentYoffset
        )}%,0,  0)`;
        objs.messageC[3].style.opacity = calcValues(
          values.messageC_opacity_out[3],
          currentYoffset
        );
        objs.messageC[3].style.transform = `translate3d(${calcValues(
          values.messageC_translateX_out[3],
          currentYoffset
        )}%,0,  0)`;
      }
      break;
  }
}

// 스크롤 될 때 바뀌는 값에 대한 기능
function scrollLoop() {
  enterNewscene = false;
  // console.log(window.scrollY);
  prevScrollHeight = 0;
  for (let i = 0; i < currentScene; i++) {
    prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
  }
  // console.log(prevScrollHeight);

  if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
    enterNewscene = true;
    currentScene++;
    document.body.setAttribute("id", `show-scene-${currentScene}`);
  }
  if (yOffset < prevScrollHeight) {
    enterNewscene = true;
    if (currentScene === 0) return; // 예외처리 : -값으로 가는 브라우저가 있음(모바일)
    currentScene--;
    document.body.setAttribute("id", `show-scene-${currentScene}`);
  }
  // console.log(currentScene);

  if (enterNewscene) return; // 섹션이 바뀌는 순간은 playAnimation();이 동작 안함
  playAnimation();
}

window.addEventListener("resize", setLayout);
window.addEventListener("load", () => {
  setLayout();
  sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
}); // 모든 이미지들이 다 로딩된 후에 실행
window.addEventListener("scroll", () => {
  yOffset = window.scrollY; // 편의상 추후에 yOffset에 연산을 하기위해 변수로 만들어둠
  scrollLoop();
});
