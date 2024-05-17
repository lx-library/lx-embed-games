console.log("document loaded")

const urlParams = new URLSearchParams(window.location.search);
const dataParam = urlParams.get('data');

console.log("dave", dataParam);

const cavas = document.getElementById("cavas")
canvas.width = innerWidth
canvas.height = innerHeight

const ctx = canvas.getContext('2d');

// Initial position of the text
let x = 50;
let y = 50;

// Velocity of the text
let dx = 2;
let dy = 2;

// Text to display
const text = "Moving Text";

// Function to draw text


function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctx.font = "30px Arial";
    ctx.fillText(dataParam, x, y); // Draw text
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    // Update position
    x += dx;
    y += dy;

    // Bounce off the walls
    if (x + ctx.measureText(dataParam).width > canvas.width || x < 0) {
        dx = -dx;
    }
    if (y > canvas.height || y < 0) {
        dy = -dy;
    }

    drawText(); // Redraw text
}

        // Start animation
 animate();
