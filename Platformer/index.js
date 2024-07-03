const platformerCanvas = document.getElementById('platformer_canvas')
const c = platformerCanvas.getContext('2d')
const unitsPerWidth = 32
const unitsPerHeight = 18

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let unitSize = windowWidth / unitsPerWidth



function reRender(){
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    unitSize = windowWidth / unitsPerWidth
    platformerCanvas.width = (unitSize * unitsPerWidth) + 'px'
    platformerCanvas.height = (unitSize * unitsPerHeight) + 'px'
    c.fillStyle = 'blue'
    c.fillRect(0, 0, platformerCanvas.width, platformerCanvas.height)
}

function resizeCanvas() {
    

    //const isLandscape = window.innerWidth > window.innerHeight;

    



    // Call your drawing function here or redraw content
    reRender(); // Replace with your drawing function
}

resizeCanvas()