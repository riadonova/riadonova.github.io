var contentString = '';
for (var i = 0; i<10; i++) {
   contentString = contentString + '<div class="box">' + i + '</div>'
}

document.getElementById('container').innerHTML = contentString;
