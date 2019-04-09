const map = [
    ['X', 'X', 'X', 'X', 'X'],
    ['O', 'O', 'X', 'X', 'X'],
    ['X', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'O'],
    ['O', 'X', 'X', 'X', 'X'],
    ['W', 'W', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'W', 'W'],
    ['X', 'X', 'W', 'W', 'W'],
    ['X', 'W', 'W', 'X', 'X']
];

let mapString = '';
for (let i = 0; i < map.length; i++) {
    const row = map[i];
    mapString = mapString + '<div class="row">';
    for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        if (cell === 'X') {
            mapString = mapString + '<div class="cell land"></div>';
        } else if (cell === 'W') {
            mapString = mapString + '<div class ="cell sands"></div>';
        } else {
            mapString = mapString + '<div class="cell water"></div>';
        }
    }

    mapString = mapString + '</div>';
}
document.getElementById('container').innerHTML = mapString;

// let contentString = '';
// for (let i = 0; i < 10; i++) {
//     contentString = contentString + '<div class="box">' + i + '</div>'
// }
//
// document.getElementById('container').innerHTML = contentString;

