/*
    1. 다음은 프로토타입을 이용하여 jQuery를 만드는 과정입니다. 
    $('.logo').fadeIn(5000);가 작동되도록 jQuery함수를 만들고 프로토타입을 사용하여 fadeIn기능을 구현하시오.


    function jQuery(){ }
    $('.logo').fadeIn(5000);
*/
/*
    2. 다음은 Class를 이용하여 jQuery를 만드는 과정입니다. 
    $('.logo').fadeIn(5000);가 작동되도록 class를 만드세요.

    class jQuery{}
    $('.logo').fadeIn(5000);

    3. addClass(), removeClass(), hasClass()가 작동되도록 만들어보세요.

    4. attr()이 작동되도록 만들어보세요.

    5. 체인형태가 가능하게 만들어보세요.
    아래가 작동되면 성공입니다.
    
    $(".logo").fadeIn(1000).addClass("hi").removeClass("hi");
*/


// function jQuery(selector) {
//     // 선택자에 맞는 요소들을 저장
//     this.elements = document.querySelectorAll(selector);
// }

// // 프로토타입에 fadeIn 메소드를 추가
// jQuery.prototype.fadeIn = function(duration) {
//     this.elements.forEach(element => {
//         element.style.transition = `opacity ${duration}ms`;
//         element.style.opacity = 0;
//         // 강제로 리플로우를 발생시켜 초기 스타일을 적용
//         getComputedStyle(element).opacity;
//         element.style.opacity = 1;
//     });
//     return this;
// };

// // 전역 $ 함수 정의
// function $(selector) {
//     return new jQuery(selector);
// }

// // 사용 예제
// $('.logo').fadeIn(5000);



class jQuery {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }

    fadeIn(duration) {
        this.elements.forEach(element => {
            element.style.transition = `opacity ${duration}ms`;
            element.style.opacity = 0;
            // 강제로 리플로우를 발생시켜 초기 스타일을 적용
            getComputedStyle(element).opacity;
            element.style.opacity = 1;
        });
        return this;
    }

    addClass(className) {
        this.elements.forEach(element => {
            element.classList.add(className);
        });
        return this;
    }

    removeClass(className) {
        this.elements.forEach(element => {
            element.classList.remove(className);
        });
        return this;
    }

    hasClass(className) {
        return Array.from(this.elements).some(element => {
            return element.classList.contains(className);
        });
    }

    attr(attributeName, value) {
        if (value === undefined) {
            return this.elements[0] ? this.elements[0].getAttribute(attributeName) : undefined;
        } else {
            this.elements.forEach(element => {
                element.setAttribute(attributeName, value);
            });
            return this;
        }
    }
}

// 전역 $ 함수 정의
function $(selector) {
    return new jQuery(selector);
}

// 사용 예제
$(".logo").fadeIn(1000).addClass("hi").removeClass("hi");
