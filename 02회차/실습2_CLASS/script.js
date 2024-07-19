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

// 1. 프로토타입을 이용한 구현

function $(selector) {
    return new jQuery(selector);
}

function jQuery(selector) {
    this.elements = document.querySelectorAll(selector);
}

jQuery.prototype.fadeIn = function(duration) {
    this.elements.forEach(el => {
        el.style.opacity = 0;
        el.style.display = '';
        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            el.style.opacity = Math.min(progress / duration, 1);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    });
    return this;
};

// 2. 클래스를 이용한 구현

class jQueryClass {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }

    fadeIn(duration) {
        this.elements.forEach(el => {
            el.style.opacity = 0;
            el.style.display = '';
            let start = null;
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                el.style.opacity = Math.min(progress / duration, 1);
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }
            window.requestAnimationFrame(step);
        });
        return this;
    }

    // 3. addClass, removeClass, hasClass 구현
    addClass(className) {
        this.elements.forEach(el => el.classList.add(className));
        return this;
    }

    removeClass(className) {
        this.elements.forEach(el => el.classList.remove(className));
        return this;
    }

    hasClass(className) {
        return Array.from(this.elements).some(el => el.classList.contains(className));
    }

    // 4. attr 구현
    attr(name, value) {
        if (value === undefined) {
            return this.elements[0].getAttribute(name);
        } else {
            this.elements.forEach(el => el.setAttribute(name, value));
            return this;
        }
    }
}

// $ 함수 정의
function $(selector) {
    return new jQueryClass(selector);
}

// 5. 체인 형태 사용 예시
 $(".logo").fadeIn(1000).addClass("hi").removeClass("hi");