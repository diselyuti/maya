const volna = document.querySelector('.volna');
const eyes = document.querySelector('.eyes');
const eat = document.querySelector('.eat');
const buhie = document.querySelector('.buhie');
const kieb = document.querySelector('.kieb');
const love = document.querySelector('.love');

volna.addEventListener('click', ()=>{
	eyes.scrollIntoView({behavior: "smooth"});
});

eyes.addEventListener('click', ()=>{
	eat.scrollIntoView({behavior: "smooth"});
});
eat.addEventListener('click', ()=>{
	buhie.scrollIntoView({behavior: "smooth"});
});
buhie.addEventListener('click', ()=>{
	kieb.scrollIntoView({behavior: "smooth"});
});

kieb.addEventListener('click', ()=>{
	love.scrollIntoView({behavior: "smooth"});
});