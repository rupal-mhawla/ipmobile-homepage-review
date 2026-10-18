const clips = ['bavardio-60sec.mp4', 'bavardio-demo2.mp4', 'bavardio-demo3.mp4'];
const player = document.getElementById('video-player');
const selectors = [...document.querySelectorAll('[data-clip]')];
let selected = 0;
function selectClip(index, play) {
  player.pause();
  selected = index;
  player.src = clips[index];
  player.load();
  selectors.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  if (play) player.play().catch(() => {});
}
selectors.forEach((button, index) => button.addEventListener('click', () => selectClip(index, true)));
player.addEventListener('ended', () => selectClip((selected + 1) % clips.length, false));
