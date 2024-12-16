let sound;
let peaks = [];
let margin = 100;

function preload() {
  // Load the song
  sound = loadSound('song.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Use degrees for easier circular math
  noLoop();
  
  // Get peaks for the entire song
  peaks = sound.getPeaks();
}

function draw() {
  background(10); // Dark background for better contrast
  
  translate(width / 2, height / 2); // Center the canvas
  
  let radius = min(width, height) / 2 - margin; // Radius of the circle
  
  // Draw radial waveform
  noFill();
  strokeWeight(2);
  for (let i = 0; i < peaks.length; i++) {
    let angle = map(i, 0, peaks.length, 0, 360); // Map peaks to a full circle
    let amp = map(peaks[i], -1, 1, radius * 0.5, radius); // Map amplitude to radius
    
    let x = amp * cos(angle);
    let y = amp * sin(angle);
    let c = color(200 + amp * 10 % 55, 50, 200 - amp * 10 % 55, 150);
    
    stroke(c);
    line(0, 0, x, y);
  }
  
  // Add abstract overlay shapes
  for (let i = 0; i < 100; i++) {
    let size = random(10, 50);
    let x = random(-radius, radius);
    let y = random(-radius, radius);
    
    noStroke();
    fill(random(100, 255), random(100, 255), random(100, 255), 100);
    ellipse(x, y, size, size);
  }
  
  // Add text (e.g., song title or artist)
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(24);
  text("Acoustic song", 0, height / 2 - 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
