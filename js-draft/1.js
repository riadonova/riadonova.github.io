
class Cell {
    constructor (container){
        this.building = null;
        this.view = document.createElement('div');
        this.view.className = 'cub';
        this.container = container;
        this.container.appendChild(this.view)
    }
}


function init (containerId) {
    const container = document.getElementById(containerId);
    for(var i = 0; i < 100; i++) {
       const cell = new Cell(container);
    }
}

init('container1');


