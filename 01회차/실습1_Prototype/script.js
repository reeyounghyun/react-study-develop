let img = [
  "img/1.webp",
  "img/2.webp",
  "img/3.webp",
  "img/4.webp",
  "img/5.webp",
  "img/6.webp",
  "img/7.webp",
  "img/8.webp",
  "img/9.webp",
  "img/10.webp",
  "img/11.webp",
  "img/12.webp",
  "img/13.webp",
  "img/14.webp",
  "img/15.webp",
  "img/16.webp",
  "img/17.webp",
  "img/18.webp",
  "img/19.webp",
  "img/20.webp",
  "img/21.webp",
  "img/22.webp",
  "img/23.webp",
  "img/24.webp",
  "img/25.webp",
];

/*
      1. makeImg라는 생성자함수를 만드세요.

      이 생성자 함수는 아래와 같이 이미지의 번호를 랜덤으로 넣으면 그 이미지를 불러와서 #gallery안에 넣어주는 기능을 합니다.
      let div0 = new makeImg(parseInt(Math.random()*24)+1);

      기능 1. 배열의 img를 가져와서 #gallery에 추가해주는 함수

      function mackImg(no){
        this.no = no;
        let gallery = document.getElemenByid("gallery");
        let imgCr - document.createElement("img");
      }
      
      기능 2. img의 width와 height값은 100이상 500이하로 랜덤으로 불러와져야 합니다.

      let ranNum = parseInt(Math,random() + 10) * 100;
      whlie (renNum < 100 || ranNum > 500){
        ranNum = parseInt(Math,readom() + 10) + 100;
      }

      기능 3. img의 위치값도 랜덤이어야 합니다.

      let height = document.body.offsetHeight;
      let ranNum2 = parseInt(Math, random()+ 100) + 10;
        while(ranNum2 < 0 || ranNum2 > height - ranNum){
        ranNum2 = parseIng(Math,randem() + 100) + 10;
      }
  */

  function makeImg(no){
    //무작위로 랜덤으로 이미지 선택
    // this.randomImage = function(){
    // let randomIndex = Math.floor(Math.random() * imgArray.length);
    // return imgArray[randomIndex];

    this.no = no; // 이미지 번호를 저장함

    //랜덤으로 이미지를 선택
    this.randomImage = function(){
      return 'img/' + this.no + '.webp';  // 이미지 파일 이름을 만듬.
    };
  
      //요약) imgArray라는 목록에서 무작위로 하나의 이미지를 선택해요.
      //imgArray :이미지의 목록,
      //Math.random() :0 에서 1 사이의 무작위 숫자를 만들어주는 함수,
      //Math.floor :정수로 만들어 주는 함수,

      //이미지 정보 저장
      this.src = this.randomImage();
      this.alt = "랜덤이미지";

      //랜덤 크기 만들기
      this.randomSize = function(){
        return Math.floor(Math.random() * 401) + 100;
      };

      //요약) this.randomImage(); 에는 무작위로 이미지를 추출하는 함수
      //this.alt = '램덤이미지'는 이미지가 보이지 않을때 나타나는 설명
      //이미지 사이즈 정함 : return Math.floor(Math.random() * 401) + 100;
      // 401은 원하는 숫자범위의 크기를 나타냄
      // 100은 원하는 숫자범위의 시작점을 나타냄 
      /**
      그래서 :
        가장 작은 숫자: 0 * 401 + 100 = 100
        가장 큰 숫자: 0.99... * 401 + 100 ≈ 400 + 100 = 500

        따라서 이 식은 100에서 500 사이의 무작위 정수를 만들어 내요.
        이 숫자들은 이미지의 픽셀 크기를 나타내게 될 거예요.

        100은 가장 작은 이미지 크기 (100x100 픽셀)
        500은 가장 큰 이미지 크기 (500x500 픽셀) 
      **/

      //랜덤 위치 만들기
      this.randomPosition = function(){
        let maxWidth = window.innerWidth;
        let maxHeight = window.innerHeight;
        return {
          left: Math.floor(Math.random() * (maxWidth - 100)),
          top: Math.floor(Math.random() * (maxHeight - 100))
        };
      };

          //이미지 속성 설정(힌트)
      //   imgcr.setAttribute("src" , img[no])
      //   imgcr.setAttribute("width", ranNum)
      //   imgcr.setAttribute("id" , no);
      //   imgcr.style.left = '${ranNum}px';
      //   imgcr.style.top = '${ranNum2}px';
      //   gallery.append(imgcr);
      // }

      //이미지를 갤러리에 추가
      this.addGallery = function(){
        let gallery = document.getElementById("gallery");
        let img = document.createElement("img");
        img.src = this.src;
        img.alt = this.alt;
        img.id = "img" + this.no;
        img.width = this.randomSize();
        img.height = img.width;
        let position = this.randomPosition();
        img.style.left = position.left + 'px';
        img.style.top = position.top + 'px';
        gallery.appendChild(img);
      };
      this.addGallery();
  };
    
    /*
      2. zImg라는 prototype을 만들어서 z-index값을 넣으면 해당 img에 z-index값이 들어가도록 해보세요.(힌트)
      div0.zImg(20); -> z-index 생기면 성공

      //프로토타입 매서트 : 특정 이미지를 반환
      makeImg.prottype.thisImg = function(){
      let img = document.getElementByid(this.no);
      return img;
      }


      //프로토타입 매서드: 이미지의 z-index 설정
        maekImg.prototype.zImg = function(z){
        let img - document.getElemenVyid(this.no)
          img.style.zIndex = z
        }

       **/

      //특정 이미지를 반환하는 프로토타입 메서드
      makeImg.prototype.thisImg =function(){
        return document.getElementById("img" + this.no);
      };


      //이미지의 z-index설정하는 프로토타입 매서드
      makeImg.prototype.zimg = function(z){
        let img = this.thisImg();
        img.style.zIndex = z;
      };

      let div0 = new makeImg(Math.floor(Math.random() * 24 ) + 1);
      div0.zimg(20);  // z-index를 20으로 설정


      // 3. speedImg라는 prototype을 만들어서 속도값을 받아오고 해당 img를 움직여보세요. (힌트)
      // div0.speedImg(10); -> 움직이면 성공

      // makeImg.prororype.speedimg = function (speed, time){
      //   let img = document.getElementByid(this.no);
      //   let startStr = img.style.left;
      //   setTimeout(() =>
      //    )
      // }

  
  //speedimg 는 이미지가 움직이는 속도를 설정
  makeImg.prototype.speedimg = function(speed, delay) {
    let img = document.getElementById("img" + this.no);
    let position = parseInt(img.style.left) || 0;
    let direction = 1;  //1은 오른쪽  -1은 왼쪽

        //화면 끝에 닿으면 방향 바꾸기
      //window.innerWidth: 화면의(window) 너비(가로 길이)
      //img.width: 이미지의(img) 너비를 말함
      //direction: 움직이는 방향(이미지) "1"이면 오른쪽, "-1"이면 왼쪽;
    function move() {
      if (position > window.innerWidth - img.width) {
        direction = -1;
      } else if (position < 0) {
        direction = 1;
      }

        //이미지 위치 업데이트
        //position은 이미지의 현재 위치를 나타냄,
        //speed은 이미지의 속도(얼마나 빨리 움직이는지),
        //dirextion은 이미지의 방향
        position += speed * direction;
        img.style.left = position + 'px';
  
        //다음 움직임을 위해 함수 재 호출
        requestAnimationFrame(move);
    }

    setTimeout(move, delay);
  };

      // 4. speedImg에 해당 이미지들이 생성되는 시간도 받아와서 이미지가 생성되는 기능을 추가해보세요.
      // div0.speedImg(10, 10);

    
      // 하단의 코드가 작동하면 성공입니다.(힌트)
      // let div0 = new makeImg(parseInt(Math.random()*24)+1);
      // div0.speedImg(parseInt(Math.random()*10),parseInt(Math.random()*10000));
      // div0.zImg(parseInt(Math.random()*10));
      // let div1 = new makeImg(parseInt(Math.random()*24)+1);
      // div1.speedImg(parseInt(Math.random()*10),parseInt(Math.random()*10000));
      // div1.zImg(parseInt(Math.random()*10));


      //반복문 시작
      //i는 0부터 4까지 5번 반복됨
      //각 반복마다 새로운 이미지를 생성함
      for(let i = 0; i < 5; i++){

        //Math.randow(): 0과 1사이의 숫자를 무작위로 생성함,
        //Math.randow(): *24는 0부터  23.999의 숫자를 만듬
        //Math.floor(); 정수를 만들어 줌
        // +1: 1을 더해서 1부터 24 사이의 숫자를 만듬.
        let div = new makeImg(Math.floor(Map.random() * 24) + 1);

        div.speedimg(
          //speedimg: 이미지의 속도를 설정함
          // 1부터 10사이의 무작위 숫자를 만듬,그리고 얼마나 빨리 움직일 것인지 정함
          Math.floor(Math.random() * 10) + 1, //속도

          //0부터 999 사이의 무작위 숫자를 만듬, 이미지의 지연시간을 설장하는데 사용됨.
          Math.floor(Math.random() * 100) //지연시간
        );


        //zimg는 이미지의 z-index를 설정함
        //Math.floor : 0부터 9사이의 무작위 숫자를 만듬, 
        //이미지가 다른 이미지 의 위치(위/아래)를 결정함,
        //최종 z-index가 높은 이미지가 위에 있게 도와줌
        div.zimg(Math.floor(Math.random() * 10));
      }

/*
      5. div를 하나씩 만들어주기 귀찮은 상황이 발생!
      매개변수에 숫자를 입력하면 그 숫자만큼 인스턴스를 만들어주는 기능을 하는 makeDivs라는 함수를 만들어보세요.
      makeDivs(6);


      6. 클릭시 이미지가 화면 가운대에 생기게 해보세요.

      7. bg 클릭시 이미지가 없어지게 해보세요.
  */

// 주어진 숫자 만큼 이미지를 생성하는 "makeDivs"함수

function makeDivs() {
  this.imgElement = document.createElement('img');
  this.imgElement.src = `./img/image${this.randomImage()}.jpg`; // 이미지 경로를 무작위로 설정
  this.imgElement.style.position = 'absolute';

  this.randomImage = function() {
    let randomIndex = Math.floor(Math.random() * 24) + 1;
    return randomIndex;
  };

  this.speedimg = function(speed, delay) {
    this.imgElement.dataset.speed = speed;
    this.imgElement.dataset.delay = delay;
  };

  this.zimg = function(zIndex) {
    this.imgElement.style.zIndex = zIndex;
  };

  this.addToDOM = function(parent) {
    parent.appendChild(this.imgElement);
  };
}

function makeDivs(number) {
  const container = document.getElementById('image-container');
  for (let i = 0; i < number; i++) {
      let div = new makeImg(Math.floor(Math.random() * 24) + 1);
      div.speedimg(
          Math.floor(Math.random() * 10) + 1,
          Math.floor(Math.random() * 10000)
      );
      div.zimg(Math.floor(Math.random() * 10));
      div.addToDOM(container);
  }
}

// 예제 사용
makeDivs(6);


//클릭 시 이미지가 화면 중앙에 위치 시키기
document.getElementById('image-container').addEventListener('click', function(event) {
  let img = document.createElement('img');
  img.src = `/assets/image${Math.floor(Math.random() * 24) + 1}.jpg`;
  img.style.position = 'absolute';
  img.style.left = `calc(50% - ${img.width / 2}px)`;
  img.style.top = `calc(50% - ${img.height / 2}px)`;
  document.body.appendChild(img);
});


//배경 클릭 시 이미지가 사라짐
document.body.addEventListener('click', function(event) {
  if (event.target.tagName !== 'IMG') {
      const images = document.querySelectorAll('img');
      images.forEach(img => img.remove());
  }
});