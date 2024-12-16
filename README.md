# PART A

## Overview
This project visualizes live sound using the p5.js sound library, creating a dynamic and interactive experience that responds to the frequency and volume of a selected song. Designed to mimic visuals for live music performances, the sketch reacts in real-time to the song's audio properties, offering an immersive and customizable visual experience.

---

## Song Details
- **Song Name**: Bread
- **Duration**: 1 minute 

---

## Visualization Features

1. **Dynamic Background**:
   - The background color shifts with the song's volume, creating a smooth, immersive environment.

2. **Frequency Layers**:
   - **Low frequencies (bass)**: Represented by a pulsating circle in the center of the canvas.
   - **Mid frequencies (vocals/instruments)**: Visualized with rotating polygons that grow or shrink in response to the song.
   - **High frequencies (treble)**: Shown as particle effects that scatter across the screen.

3. **Beat Detection**:
   - When a beat is detected, random point bursts simulate a strobe or fireworks effect.

4. **Interactive Controls**:
   - **Slider**: Adjusts the frame rate, controlling the overall speed of the visuals.
   - **Button**: Toggles between three distinct color schemes for personalization or mood alignment.

# PART B
# Sound Visualization Project

This project uses the `p5.js` library and the `p5.sound` library to create an artistic, static visualization of an entire song based on its waveform data.

## Overview

Instead of visualizing the song as it plays, this project generates a **static and creative representation of the entire song** using the `getPeaks()` function from the `p5.sound` library. The visualization is designed to be engaging, colorful, and unique, making it suitable as a poster or album cover.
## Song Details
- **Song Name**: Future Visions
- **Duration**: 2 minutes and 50 seconds

## Features

- **Radial Waveform Visualization**: 
  - The song's amplitude data is represented in a circular form.
  - Peaks are mapped to lines extending radially from the canvas center.
  
- **Vibrant Colors**: 
  - Colors dynamically change based on amplitude values for a striking visual effect.

- **Abstract Overlay**: 
  - Randomly placed shapes (e.g., circles) add an artistic touch.

- **Text Overlay**: 
  - The song title and other relevant text are added for a polished final output.

- **Responsive Design**:
  - The canvas adjusts dynamically to the browser window size.