// texture.js

import { LinearFilter, RGBAFormat, VideoTexture } from "three";

function createVideo() {
  const video = document.createElement('video');
  video.src = '/video/foguete.mp4';
  video.load();
  video.controls = true;
  video.crossOrigin = 'anonymous';
  const texture = new VideoTexture(video);

  texture.needsUpdate = true;
  texture.toneMappingExposure = true;
  texture.toneMapping = true;

  texture.magFilter = LinearFilter;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.format = RGBAFormat;
  texture.matrixAutoUpdate = true;


  return {texture, video}
}

export { createVideo };