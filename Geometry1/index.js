const canvas = document.getElementById('straight_line')
const ctx = canvas.getContext('2d');



// Function to resize the canvas


// Example function to draw on the canvas


class Line{
    constructor(color){
        this.startX;
        this.startY;
        this.endX;
        this.endY;
        this.color = color
    }

    draw(startX, startY, endX, endY){
        ctx.beginPath();      
        ctx.moveTo(startX, startY);   
        ctx.lineTo(endX, endY); 
        ctx.strokeStyle = this.color; 
        ctx.lineWidth = canvas.width * 0.015;    
        ctx.stroke(); 
    }
}

const bottomLine = new Line('green')
const line2 = new Line('yellow')
const line3 = new Line('teal')
const line4 = new Line('gold')
const line5 = new Line('red')
const line6 = new Line('pink')
const line7 = new Line('brown')
const line8 = new Line('blue')
const line9 = new Line('grey')
const line10 = new Line('lightblue')
const line11 = new Line('teal')

const apexX = 250; // Apex x-coordinate
const apexY = 100; // Apex y-coordinate
const sideLength = 150; // Length of the equal sides
const angle = 45; // Angle at the apex in degrees

let offset = 0

function drawText(text, x, y, font = '30px Arial', color = 'white') {
    ctx.font = font;         // Set the font size and family
    ctx.fillStyle = color;   // Set the fill color
    ctx.fillText(text, x, y); // Draw the filled text
}

function drawStuff() {
    offset = calcLeftOffset()
    drawGeometry()
    //drawImageFullWidth()
}
const randomAngle = getRandomNumber()

function drawGeometry(){
    const unit = canvas.width * 0.01
    const padding = unit * 2
    const y = canvas.width * 0.6
    const width = canvas.width - (padding * 2)

    bottomLine.draw(padding, y, width, y)
    const circleX = canvas.width / 2
    const circleY = y
    
    
    //debugger
    const oppositeAngle = 180 + randomAngle
    const line2StartX = canvas.width/2
    const line2StartY = y
    const line2Length = (canvas.width/2) - (padding * 2)
    const line2Dims = calculateEndPoint(line2StartX, line2StartY, randomAngle, line2Length)
    const line2EndY = line2Dims.endY
    const line2EndX = line2Dims.endX
    line2.draw(line2StartX, line2StartY, line2EndX, line2EndY)
    const lengthOfRightEqualIsosolese = (calculateEqualSides(randomAngle, unit * 7)) * -1
    const lengthOfLeftEqualIsosolese = (calculateEqualSides(oppositeAngle, unit * 7))
    const rightShortLineAngle = (180 + (randomAngle)) / 2

    
    const line3StartY = line2StartY
    const line3Dims = calculateEndPoint(line2StartX + (unit * 7), line3StartY, rightShortLineAngle, unit * 7)
    
   
    drawCircleWithBorder(circleX, circleY)
    console.log(randomAngle)
    //debugger
    //line3.draw(line2StartX, line2StartY, line2StartX + lengthOfRightEqualIsosolese, line2StartY)
    //line4.draw(line2StartX, line2StartY, line2StartX - lengthOfLeftEqualIsosolese, line2StartY)
    const line5Dims = calculateEndPoint(line2StartX, line3StartY, randomAngle, lengthOfRightEqualIsosolese)
    const line6Dims = calculateEndPoint(line2StartX, line3StartY, randomAngle, lengthOfLeftEqualIsosolese)
    //line5.draw(line2StartX, line2StartY, line5Dims.endX, line5Dims.endY)
    //line6.draw(line2StartX, line2StartY, line6Dims.endX, line6Dims.endY)
    const Line7StartX = line2StartX + lengthOfRightEqualIsosolese
    const Line7StartY = line2StartY
    const Line7EndX = line5Dims.endX
    const Line7EndY = line5Dims.endY

    //line7.draw(Line7StartX, Line7StartY, Line7EndX, Line7EndY)
    const line7Midpoint = calculateMidpoint(Line7StartX, Line7StartY, Line7EndX, Line7EndY)
    //debugger
    const line10Dims = calculateEndPoint(line7Midpoint.midX, line7Midpoint.midY, randomAngle / 2, unit * 4)
    //line10.draw(line7Midpoint.midX, line7Midpoint.midY, line10Dims.endX,line10Dims.endY)

    const line8StartX = line2StartX - lengthOfLeftEqualIsosolese
    const line8StartY = line2StartY
    const line8EndX = line6Dims.endX
    const line8EndY = line6Dims.endY
    const line8MidPoint = calculateMidpoint(line8StartX, line8StartY, line8EndX, line8EndY)

    //line8.draw(line8StartX, line8StartY, line8EndX, line8EndY)
    const leftShortLineAngle = -45
    console.log("randomAngle",randomAngle)
    const otherAngle = ((180 + randomAngle) / 2) - 180
    console.log("otherAngle",otherAngle)
    //debugger
    const line11Dims = calculateEndPoint(line8MidPoint.midX, line8MidPoint.midY, otherAngle, unit * 4)
    //line11.draw(line8MidPoint.midX, line8MidPoint.midY, line11Dims.endX, line11Dims.endY)

    drawCircle(line11Dims.endX, line11Dims.endY)
    drawText(`${randomAngle + 180}\u00B0`, line11Dims.endX - 100,line11Dims.endY)

    //addInputElement(line10Dims.endX, line10Dims.endY)
    const userInput = document.getElementById('user_input')


    userInput.style.top = `${line10Dims.endY -15}px`
    userInput.style.left = `${(offset / 2) + line10Dims.endX + 45}px`
    userInput.style.width = '80px'
    userInput.style.fontSize = '20px'
    drawCircle(line10Dims.endX,line10Dims.endY)
    
    //debugger
    


    //Line
}



function calculateMidpoint(startX, startY, endX, endY) {
    // Calculate the midpoint coordinates
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    // Return the midpoint as an object
    return { midX, midY };
}

function calcLeftOffset(){
    let offset = 0
    const isLandscape = window.innerWidth > window.innerHeight;
    if(isLandscape){
        offset = window.innerWidth - window.innerHeight
    }
    return offset

}

function getRandomNumber() {
    // Generate a random number between 15 and 150
    const randomNumber = Math.random()
    const randomDegree = ((180 - 30) * randomNumber) + 15
    

    // Round the number to one decimal place
    const roundedNumber = Math.round(randomDegree);

    return roundedNumber * -1;
}
function calculateEndPoint(startX, startY, angle, length) {
    // Convert the angle from degrees to radians
    const angleInRadians = angle * (Math.PI / 180);

    // Calculate the endX and endY using trigonometry
    const endX = startX + length * Math.cos(angleInRadians);
    const endY = startY + length * Math.sin(angleInRadians);

    return { endX, endY };
}

function drawCircleWithBorder(circleX, circleY) {
    ctx.beginPath(); // Begin a new path
    ctx.arc(circleX, circleY, canvas.width * 0.02, 0, 2 * Math.PI); // Draw a circle with center at (300, 300), radius 50
    ctx.fillStyle = 'rgba(0,0,0)'; // Set the fill color
    ctx.fill(); // Fill the circle
    ctx.lineWidth = canvas.width * 0.015; 
    ctx.strokeStyle = 'blue'; // Set the stroke color
    ctx.stroke(); // Apply the stroke to the path
}
function drawCircle(circleX, circleY) {
    ctx.beginPath(); // Begin a new path
    ctx.arc(circleX, circleY, canvas.width * 0.015, 0, 2 * Math.PI); // Draw a circle with center at (300, 300), radius 50
    ctx.fillStyle = 'rgba(255,0,0,0.5)'; // Set the fill color
    ctx.fill(); // Fill the circle
    ctx.lineWidth = canvas.width * 0.015; 
    //ctx.strokeStyle = 'blue'; // Set the stroke color
    //ctx.stroke(); // Apply the stroke to the path
}
function calculateEqualSides(apexAngle, baseLength) {
    // Convert apex angle to radians
    const theta = apexAngle * Math.PI / 180;

    // Calculate the length of the equal sides using the Law of Cosines
    const equalSide = baseLength / (2 * Math.sin(theta / 2));

    return equalSide;
}

function resizeCanvas() {
    

    const isLandscape = window.innerWidth > window.innerHeight;

    canvas.width = isLandscape? window.innerHeight: window.innerWidth
    canvas.height = isLandscape? window.innerWidth: window.innerWidth


    // Call your drawing function here or redraw content
    drawStuff(); // Replace with your drawing function
}
// Initial call to resize canvas
resizeCanvas();

// Add event listener to resize canvas when window size changes
window.addEventListener('resize', resizeCanvas);

// Draw the image initially once it's loaded
