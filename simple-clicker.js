let clicks = 0;

function writeTextToXY(text, color, x, y, noUndo=true) {     
  textArray = text.split('')
  xpos=0
  line=0
  textArray.forEach(
    function(writing, index){
      if (writing == '\n') {line+=1;xpos=0;return}
      writeCharToXY(writing,color,x+xpos,y+line,noUndo)
      xpos += 1
    }
  )
}

w.broadcastReceive(true);

w.on('cmd', function(e){
  if(e.data=='click'){
    clicks += 1;
    if (e.username) {
      writeTextToXY(`${e.username} clicked`, 0x000000, -40, 11);
      writeTextToXY(`${clicks} clicks`, 0x000000, -40, 12);
    } else {
      writeTextToXY(`Someone clicked`, 0x000000, -40, 11);
      writeTextToXY(`${clicks} clicks`, 0x000000, -40, 12);
    }
  }
});

