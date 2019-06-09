    // 객체 Body
    var Body = {
      setBackgroundColor: function(color) {
        var target = document.querySelector("body");
        target.style.background = color;
      },
      setColor: function(color) {
        var target = document.querySelector("body");
        target.style.color = color;
      }
    }
    // 객체 Li
    var Li = {
      setColor: function(color) {
         var list = document.querySelectorAll("li");
         // querySelectorAll() → node 생성 (일단 배열로 간주)
         // ??? var list를 함수 밖으로 빼면 왜 실행이 안되지 ?
         var i = 0;
         while (i < list.length) {
           list[i].style.color = color;
           i = i + 1;
        }
      }
    }

    function colorhandler(xx) {
      if (xx.value == "none") {
        // Li → 객체, setColor → 메소드(함수 외)
        Li.setColor("powderblue");
        Body.setBackgroundColor("black");
        Body.setColor("white");
        xx.value = "colored";
      } else {
        Li.setColor("blue");
        Body.setBackgroundColor("white");
        Body.setColor("black");
        xx.value = "none";
      }
    }
