let song;
let amplitude, fft, peakDetect;
let slider, colorScheme = 0;

function preload() {
  song = loadSound('song.mp3'); // Replace with your song file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();

  amplitude = new p5.Amplitude();
  fft = new p5.FFT();
  peakDetect = new p5.PeakDetect();

  // Create interactive elements
  slider = createSlider(1, 20, 10);
  slider.position(10, 10);

  let button = createButton('Change Colors');
  button.position(10, 40);
  button.mousePressed(() => colorScheme = (colorScheme + 1) % 3);
}

function draw() {
  // Dynamic background
  let volume = amplitude.getLevel();
  let bgColor = map(volume, 0, 1, 20, 255);
  background(bgColor, bgColor / 2, bgColor * 1.5);

  // Analyze frequencies
  let spectrum = fft.analyze();
  peakDetect.update(fft);

  // Layer 1: Bass Circle
  let bass = fft.getEnergy("bass");
  let bassSize = map(bass, 0, 255, 100, width);
  fill(colorScheme === 0 ? [255, 100, 200] : [100, 200, 255]);
  ellipse(width / 2, height / 2, bassSize);

  // Layer 2: Mid-frequency Polygon
  let mids = fft.getEnergy("mid");
  let midSize = map(mids, 0, 255, 50, 300);
  push();
  translate(width / 2, height / 2);
  rotate(frameCount / 50);
  stroke(colorScheme === 1 ? [200, 255, 100] : [255, 150, 50]);
  strokeWeight(2);
  noFill();
  polygon(0, 0, midSize, 6);
  pop();

  // Layer 3: High-frequency Particles
  let highs = fft.getEnergy("treble");
  let particleSize = map(highs, 0, 255, 5, 50);
  fill(colorScheme === 2 ? [100, 255, 255] : [255, 255, 100], 150);
  noStroke();
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, particleSize);
  }

  // Beat Detection Effect
  if (peakDetect.isDetected) {
    for (let i = 0; i < 50; i++) {
      stroke(random(255), random(255), random(255));
      point(random(width), random(height));
    }
  }

  // Interactive Speed Adjustment
  frameRate(slider.value());
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
