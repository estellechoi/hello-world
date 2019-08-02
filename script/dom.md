
### 문서객체모델 (DOM, Document Object Model)
* HTML, XML 문서의 프로그래밍 인터페이스
* 웹페이지를 자바스크립트와 같은 스크립트언어로 제어하기 위한 객체 모델
* 윈도우에 로드된 문서를 의미
* HTML 문서의 계층구조를 트리 형태로 표현


### 브라우저객체모델(BOM, Browser Object Model)
* 웹브라우저 창을 관리할 목적으로 제공되는 객체 모음을 대상으로 하는 모델
* 웹브라우저의 창이나 프레임을 추상화해서 프로그래밍적으로 제어할 수 있도록 제공하는 수단
* 전역객체인 Window의 프로퍼티와 메소드를 통해 제어

### 동적 웹페이지 작성
#### 1. id로 접근

    document.all.bb[2].style.color="blue";
    //2개 이상일 경우 배열로서 처리하게 됨
    document.getElementById("bb").style.fontSize="40px";
    // 현재문서에서 id=bb 인것 중에 첫번째만 인식

#### 2. class로 접근
