const canvas = document.getElementById('straight_line')
const ctx = canvas.getContext('2d');

const chalkboardImg = new Image();
chalkboardImg.src = 'assets/chalkboard.png';

// Function to resize the canvas
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

// Example function to draw on the canvas
function drawStuff() {
    drawImageFullWidth()
}

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

const apexX = 250; // Apex x-coordinate
const apexY = 100; // Apex y-coordinate
const sideLength = 150; // Length of the equal sides
const angle = 45; // Angle at the apex in degrees



function drawIsoscelesTriangleOnSide(startX, startY, sideLength, angle) {
    // Convert angle to radians
    const theta = angle * Math.PI / 180;

    // Calculate the apex vertex
    const apexX = startX;
    const apexY = startY;

    // Calculate the second vertex of the equal side
    const secondX = startX + sideLength;
    const secondY = startY;

    // Draw the triangle
    ctx.beginPath();
    ctx.moveTo(apexX, apexY);      // Move to the starting point
    ctx.lineTo(secondX, secondY);        // Draw line to the apex
    //ctx.lineTo(secondX, secondY);    // Draw line to the second point
    //ctx.closePath();                 // Close the path to form a triangle

    // Optionally fill the triangle
    ctx.fillStyle = 'lightblue';
    ctx.fill();

    // Optionally stroke the triangle
    ctx.strokeStyle = 'blue';
    ctx.stroke();
}

function drawGeometry(){
    const unit = canvas.width * 0.01
    const padding = unit * 2
    const y = canvas.width * 0.6
    const width = canvas.width - (padding * 2)

    bottomLine.draw(padding, y, width, y)
    const circleX = canvas.width / 2
    const circleY = y
    
    const randomAngle = getRandomNumber()
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
    //debugger
    
    


    const rightShortLineAngle = (180 + (randomAngle)) / 2
    //debugger
    //debugger
    
    const line3StartY = line2StartY
    const line3Dims = calculateEndPoint(line2StartX + (unit * 7), line3StartY, rightShortLineAngle, unit * 7)
   
    drawCircle(circleX, circleY)
    console.log(randomAngle)
    //debugger
    //drawIsoscelesTriangleOnSide(line2StartX, line2StartY, lengthOfRightEqualIsosolese, (180 - 50));
    //drawIsoscelesTriangleOnSide(line2StartX, line2StartY, lengthOfLeftEqualIsosolese * -1, (180 - 50));
    //line3.draw(line2StartX, line2StartY, line2StartX + lengthOfRightEqualIsosolese, line2StartY)
    //line4.draw(line2StartX, line2StartY, line2StartX - lengthOfLeftEqualIsosolese, line2StartY)
    const line5Dims = calculateEndPoint(line2StartX, line3StartY, randomAngle, lengthOfRightEqualIsosolese)
    const line6Dims = calculateEndPoint(line2StartX, line3StartY, randomAngle, lengthOfLeftEqualIsosolese)
    //line5.draw(line2StartX, line2StartY, line5Dims.endX, line5Dims.endY)
    //line6.draw(line2StartX, line2StartY, line6Dims.endX, line6Dims.endY)
    line7.draw(line2StartX + lengthOfRightEqualIsosolese, line2StartY, line5Dims.endX, line5Dims.endY)
    line8.draw(line2StartX - lengthOfLeftEqualIsosolese, line2StartY,line6Dims.endX,line6Dims.endY)
}

function calculateMidpoint(startX, startY, endX, endY) {
    // Calculate the midpoint coordinates
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    // Return the midpoint as an object
    return { midX, midY };
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
function drawImageFullWidth() {
    if (chalkboardImg.complete) { // Check if the image is already loaded
        ctx.drawImage(chalkboardImg, 0, 0, canvas.width, canvas.height);
        drawGeometry()
    } else {
        // If the image is not loaded yet, wait for the load event
        chalkboardImg.onload = function() {
            ctx.drawImage(chalkboardImg, 0, 0, canvas.width, canvas.height);
            drawGeometry()
        };
    }
}
function drawCircle(circleX, circleY) {
    ctx.beginPath(); // Begin a new path
    ctx.arc(circleX, circleY, canvas.width * 0.02, 0, 2 * Math.PI); // Draw a circle with center at (300, 300), radius 50
    ctx.fillStyle = 'rgba(0,0,0,0.8)'; // Set the fill color
    ctx.fill(); // Fill the circle
    ctx.lineWidth = canvas.width * 0.015; 
    ctx.strokeStyle = 'blue'; // Set the stroke color
    ctx.stroke(); // Apply the stroke to the path
}
function calculateEqualSides(apexAngle, baseLength) {
    // Convert apex angle to radians
    const theta = apexAngle * Math.PI / 180;

    // Calculate the length of the equal sides using the Law of Cosines
    const equalSide = baseLength / (2 * Math.sin(theta / 2));

    return equalSide;
}

// Draw the image initially once it's loaded
