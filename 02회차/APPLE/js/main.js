/* 
  1. 각 섹션에 대한 정보를 담은 배열을 만드세요.
  각 섹션에 대한 정보는 다음과 같습니다.

  - type | 각 구간의 TYPE : 일반적인 스크롤 섹션인지 아닌지
  - heightNum | 브라우저 높이의 X배로 각 섹션의 높이값 세팅
  - scrollHeight | 각 섹션의 스크롤 높이
  - 각 섹션 요소

  2. setLayout이라는 함수를 만드세요. setLayout이라는 함수는 아래와 같은 기능을 합니다.
  각 섹션의 높이값을 설정하는 함수 : 브라우저 높이 * 각 씬의 heightNum

  3. 윈도우 창 사이즈가 변하면 변하는 사이즈에 맞춰서 높이값을 다시 세팅해주세요.

  4. scrollLoop라는 함수를 만드세요 : 스크롤 될 때 바뀌는 값에 대한 기능을 넣는 함수 입니다.
  아래 기능들을 일단 넣어주세요.
  현재 활성화된 섹션(눈 앞에 보이는 섹션)은 border색이 파란색으로 바뀌게 해주세요.
  - 활성화 기준은 현재 섹션이 브라우저 상단에 닿았을때
  - 필요한 변수는 만들어주세요.

  5. scrollLoop 함수에 현재 섹션의 이름에 맞춰서 바디에 id 값을 부여하는 기능을 넣으세요.
  - 단, 새로고침 시에도 그 섹션의 이름에 맞는 바디 id 값이 나와야함
  show-scene-현재섹션번호

  6. calcValues라는 함수와 playAnimation라는 함수를 만드세요. 
  calcValues : 현재 섹션안에서 스크롤이 얼마나 되었는지를 계산해주는 함수
  playAnimation : 애니메이션에 대한 함수
  
  sceneInfo에 아래와 같은 정보를 추가하고, 두 함수를 이용하여 첫 섹션의 스크롤이 처음에서 끝에 도달시에 messageA가 opacity가 0에서 1로 스크롤 시에 변하게 해주세요.
  objs: {
    container: document.querySelector("#scroll-section-0"),
    messageA: document.querySelector("#scroll-section-0 .main-message.a"),
    messageB: document.querySelector("#scroll-section-0 .main-message.b"),
    messageC: document.querySelector("#scroll-section-0 .main-message.c"),
    messageD: document.querySelector("#scroll-section-0 .main-message.d"),
  },
  values: {
    messageA_opacity: [0, 1], // opacity 0에서 1로
  },

  7. sceneInfo의 values에 아래와 같은 정보를 추가하고, 섹션의 특정 구간에서 opacity가 동작하게 만드세요.
  ex) 현재 섹션의 10%구간 ~ 20%구간에서 opacity가 0에서 1로 변하게
  values: {
    messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
  },

  8. sceneInfo의 values에 아래와 같은 정보를 추가하고, 현재 섹션의 25% ~ 30%구간에서 글씨가 사라지게 만드세요.
  values: {
    messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
    messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
  },

  9. sceneInfo의 values에 아래와 같은 정보를 추가하고, 글씨가 생성될때 위치값이 살짝 올라오면서 생성되고 사라질때도 올라가면서 사라지게 만들어보세요.
  values: {
    messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
    messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
    messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
    messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
  },

  10. sceneInfo의 type이 normal인 요소는 본인의 content 높이만큼 적용되게 해주세요.

  11. sceneInfo에 아래와 같은 정보를 추가하고, VIDEO가 canvas로 생성되어 작동되도록 적용해주세요.
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
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }], // opacity 0에서 1로
      messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }], // opacity 0에서 1로
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }], // translate는 내 크기만큼 % 20%정도만
      messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
    },

    12. 캔버스 사이즈를 언제나 세로가 100vh가 되고, 가로는 중앙정렬되도록 해주세요.

    13. 처음 새로고침 시에 이미지가 보이게 해주세요.

    14. 본인이 만들고싶은 방향으로 커스터마이징 해주세요.
*/

/*
  5. scrollLoop 함수에 현재 섹션의 이름에 맞춰서 바디에 id 값을 부여하는 기능을 넣으세요.
  - 단, 새로고침 시에도 그 섹션의 이름에 맞는 바디 id 값이 나와야함
  show-scene-현재섹션번호
*/

const sceneInfo = [
  {
    // 0
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-0"),
      messageA: document.querySelector("#scroll-section-0 .main-message.a"),
      messageB: document.querySelector("#scroll-section-0 .main-message.b"),
      messageC: document.querySelector("#scroll-section-0 .main-message.c"),
      messageD: document.querySelector("#scroll-section-0 .main-message.d"),
    },
    values : {
      messageA_opacity_in : [0, 1], // opacity 0에서 1로
      messageA_opacity_out : [1, 0]. // opacity 1에서 0로
      // messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      // messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
    }
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
    },
  },
  {
    // 3
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-3"),
    },
  },
];
let yOffset = 0; // window.scrollY 대신 쓸 변수
let prevScrollHeight = 0; // 현재 스크롤 위치 window.scrollY보다 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합
let currentScene = 0; // 현재 활성화된 섹션
function setLayout() {
  // 각 스크롤 섹션의 높이 세팅
  for (let i = 0; i < sceneInfo.length; i++) {
    sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
  }
  // console.log(sceneInfo);

  yOffset = window.scrollY;
  let totalScrollHeight = 0;
  for(let i=0; i<sceneInfo.length; i++){
    totalScrollHeight += sceneInfo[i].scrollHeight;
    if(totalScrollHeight >= yOffset) {
      currentScene = i;
      break;
    }
  }
  
  document.body.setAttribute('id',`show-scene-${currentScene}`);
}
setLayout();

function calcValues(values, currentYoffset){

  // 현재섹션에서 얼마나 스크롤 헀는지 비율
  let scrollRatio = currentYoffset / sceneInfo[currentScene].scrollHeight;
  let rv = scrollRatio * (values[1] - values[0]) + values[0];

  return rv;
}
function playAnimation(){
  const objs = sceneInfo[currentScene].objs;
  const values = sceneInfo[currentScene].values;

  const currentYoffset = yOffset - prevScrollHeight;

  switch (currentScene) {
    case 0:
      console.log('0 play');
      let messageA_opacity_in = calcValues(
        values.messageA_opacity_in,
        currentYoffset
      );
      objs.messageA.style.opacity = messageA_opacity_in;

      break;
  }

}
function scrollLoop() {
  // console.log(window.scrollY);

  prevScrollHeight = 0; //이전 스크롤의 높이값
  for (let i = 0; i < currentScene; i++) {
    prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
    //이전 스크롤 높이값은 이전 스크롤 높이 더하기 sceneInfo에 높이값을 넣어줌
  }
  console.log(prevScrollHeight);

  //yoffset 값은 prevScrolHeight 더하기 scenInfo.scrollHeight 값보다 클때
  if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
    currentScene++;
    document.body.setAttribute('id',`show-scene-${currentScene}`);
  }

    //yoffset 값은 prevScrolHeight 더하기 scenInfo.scrollHeight 값보다 작을 때
  if (yOffset < prevScrollHeight) {
    if (currentScene === 0) return; // 예외처리 : -값으로 가는 브라우저가 있음(모바일)
    currentScene--;
    document.body.setAttribute('id',`show-scene-${currentScene}`);
  }
  console.log(currentScene);

  //sceneInfo의 오브젝트에 컨테이너 border 스타일을 red로 변경
  for (let i = 0; i < sceneInfo.length; i++) {
    sceneInfo[i].objs.container.style.borderColor = "red";
  }

  //그렇지 않을때는 blue로 변경함
  sceneInfo[currentScene].objs.container.style.borderColor = "blue";

  //이벤트 실행
  playAnimation();
}

window.addEventListener("resize", setLayout);
window.addEventListener("load", setLayout);
window.addEventListener("scroll", () => {
  yOffset = window.scrollY; // 편의상 추후에 yOffset에 연산을 하기위해 변수로 만들어둠
  scrollLoop();
});

