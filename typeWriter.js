//Javascript TypeWriter animation file.
//You can add your own text within the variable 'line' string.
//Alternatively you can feel free to use as you would.

var i = 0;
var line = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus odio at enim blandit accumsan a quis diam. Nulla at nulla tellus. Donec molestie tellus ut diam sagittis, non commodo tortor lacinia. Etiam in elit pulvinar, ultricies nunc in, accumsan augue. Mauris posuere non nulla in maximus. Donec malesuada enim ac iaculis mollis. Suspendisse semper lectus eget tincidunt bibendum. Pellentesque condimentum placerat felis, non vulputate sapien rutrum at. Donec lobortis feugiat tincidunt. Mauris velit ipsum, bibendum eu ante eu, pellentesque dictum magna. Pellentesque eu pellentesque tortor. Vivamus posuere sapien eget est accumsan cursus.';
var speed = 150;

function typeWriter() {
  if (i < line.length) {
    document.getElementById("typer").innerHTML += line.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
