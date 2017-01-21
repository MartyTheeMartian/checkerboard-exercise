// Code for random gradient checker board

var red1 = Math.floor(Math.random() * 100);
var green1 = Math.floor(Math.random() * 100);
var blue1 = Math.floor(Math.random() * 100);

var red2 = Math.floor(Math.random() * 100);
var green2 = Math.floor(Math.random() * 100);
var blue2 = Math.floor(Math.random() * 100);

for (var i = 0; i < 81; i++) {
  var divEl = document.createElement('div');
  divEl.style.width = "11.1%";
  divEl.style.float = "left";
  divEl.style.paddingBottom = "11.1%";

  if (i % 2 === 0) {
    red1 += 3;
    green1 += 3;
    blue1 += 3;
    var color1 = 'rgb(' + red1 + ', ' + green1 + ', ' + blue1 + ')';
    divEl.style.backgroundColor = color1;
  }
  else {
    red2 += 3;
    green2 += 3;
    blue2 += 3;
    var color2 = 'rgb(' + red2 + ', ' + green2 + ', ' + blue2 + ')';
    divEl.style.backgroundColor = color2;
  }

  document.body.append(divEl);
}

// Code for random colored checker board
// for (var i = 0; i < 81; i++) {
//   var divEl = document.createElement('div');
//   divEl.style.width = "11.1%";
//   divEl.style.float = "left";
//   divEl.style.paddingBottom = "11.1%";
//
//   var red = Math.floor(Math.random() * 256);
//   var green = Math.floor(Math.random() * 256);
//   var blue = Math.floor(Math.random() * 256);
//   var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
//   divEl.style.backgroundColor = color;
//
//   document.body.append(divEl);
// }

// Code for red & black checker board
// for (var i = 0; i < 81; i++) {
//   var divEl = document.createElement('div');
//   divEl.style.width = "11.1%";
//   divEl.style.float = "left";
//   divEl.style.paddingBottom = "11.1%";
//
//   if (i % 2 === 0) {
//     divEl.style.backgroundColor = "red";
//   }
//   else {
//     divEl.style.backgroundColor = "black";
//   }
//   document.body.append(divEl);
// }
