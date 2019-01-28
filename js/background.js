
  //Global variables
  var w = window.innerWidth;
  var h = window.innerHeight;
  cube = document.getElementsByClassName("cube")[0];

  window.onresize = function(event) {
    w = window.innerWidth;
    h = window.innerHeight;
  };

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    window.addEventListener('deviceorientation', handleOrientation);
  } else {
    (function() {
      document.onmousemove = handleMouseMove;

      function handleMouseMove(e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var CoorX = mouseX - w / 2;
        var CoorY = mouseY - h / 2;

        var degX = mapNum(CoorX, -w / 2, w / 2, 25, -25);
        var degY = mapNum(CoorY, -h / 2, h / 2, 0, -15);

        cube.style.transform = "rotateY(" + degX + "deg)" + "rotateX(" + degY + "deg)";

      }
    })();
  }

  function handleOrientation(event) {
    var x = event.beta; // In degree in the range [-180,180]
    var y = event.gamma; // In degree in the range [-90,90]

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x > 90) {
      x = 90
    };
    if (x < -90) {
      x = -90
    };

    degX = mapNum(x, -90, 90, 45, -45);
    degY = mapNum(y, -90, 90, -45, 45);

    cube.style.transform = "rotateY(" + degY + "deg)" + "rotateX(" + degX + "deg)";

  }


  function mapNum(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  };
