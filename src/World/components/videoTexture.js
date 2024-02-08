// videoTexture.js

import { LinearFilter, RGBAFormat, VideoTexture } from "three";

function createVideo() {
  const video = document.createElement('video');
  video.src = '/video/foguete.mp4'; // Replace with the path to your video file
  video.load();
  video.controlList = 'nodownload';

  const texture = new VideoTexture(video);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.format = RGBAFormat;


  return {texture, video}
}

export { createVideo };