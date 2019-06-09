    // 객체 Body
    var Body = {
      setBackgroundColor: function(color) {
        $('body').css('backgroundColor', color);
      },
      setColor: function(color) {
        $('body').css('color', color);
      }
    }
    // 객체 Li
    var Li = {
      setColor: function(color) {
        $('li').css('color', color);
        // $('li') → jQuery로 모든 li 태그를 통제하겠다
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
