var i = 0;
function move() {
  if (i == 0) { // 0: animation pas active
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10); // 10ms fps ( = pygame.display.update() )

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        window.open("https://youtu.be/5BZLz21ZS_Y?si=dvW35dmx932NcIZh", "_blank");
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}