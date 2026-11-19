const video=document.getElementById('partner-video');
const clips=['bavardio-60sec.mp4','bavardio-demo2.mp4','bavardio-demo3.mp4'];
const buttons=[...document.querySelectorAll('[data-clip]')];
let active=0;
function playClip(index){active=index;video.src=clips[index];buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));video.play().catch(()=>{});}
buttons.forEach((button,i)=>button.addEventListener('click',()=>playClip(i)));
video.addEventListener('ended',()=>playClip((active+1)%clips.length));
document.querySelectorAll('[data-model]').forEach(link=>link.addEventListener('click',()=>{document.getElementById('model-interest').textContent=`Interested in ${link.dataset.model}? Let’s talk through what it would look like for your ISP.`;}));
