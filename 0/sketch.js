let song;
let amplitude;
let fft;
let slider; // Example interactive element

function preload() {
  song = loadSound('song.mp3'); // Replace with your song file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();

  amplitude = new p5.Amplitude();
  fft = new p5.FFT();

  slider = createSlider(1, 20, 10);
  slider.position(10, 10);
}

function draw() {
  background(0);

  // Get volume and frequency data
  let volume = amplitude.getLevel();
  let spectrum = fft.analyze();

  // Use volume to control size
  let size = map(volume, 0, 1, 50, 500);

  // Draw visuals (e.g., circles that react to volume)
  fill(255, 100, 200, 150);
  ellipse(width / 2, height / 2, size);

  // Use frequency data for a spectrum-like visualization
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    fill(100, spectrum[i], 255);
    rect(x, height, width / spectrum.length, h);
  }

  // Slider effect on visuals (e.g., frequency resolution adjustment)
  let speed = slider.value();
  frameRate(speed);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
