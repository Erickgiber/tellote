let play = document.querySelector('#playpausebtn');
play.addEventListener('click', ()=> {
	play.classList.toggle('playToggle');
});

let mute = document.querySelector('#mutebtn');
mute.addEventListener('click', ()=> {
	mute.classList.toggle('muteToggle');
});

let boton = document.querySelector('button');

boton.addEventListener('click', ()=> {
	document.querySelector('menu').classList.toggle('menubottom');
})


let cone = document.querySelector('#cone');

cone.addEventListener('click', ()=> {
	audio.src = "./mp3/1.mp3";
	document.querySelector('.caratula').innerHTML = `<img src="img/neutro.jpg" alt="">`;
});


let hope = document.querySelector('#hope');

hope.addEventListener('click', ()=> {
	audio.src = "./mp3/2.mp3";
	document.querySelector('.caratula').innerHTML = `<img src="img/neutro.jpg" alt="">`;
});


let laoriginal = document.querySelector('#laoriginal');

laoriginal.addEventListener('click', ()=> {
	audio.src = "./mp3/3.mp3";
	document.querySelector('.caratula').innerHTML = `<img src="img/neutro.jpg" alt="">`;
});


let cafune = document.querySelector('#cafune');

cafune.addEventListener('click', ()=> {
	audio.src = "./mp3/4.mp3";
	document.querySelector('.caratula').innerHTML = `<img src="img/micro.jpg" alt="">`;
});

let dime = document.querySelector('#dime');

dime.addEventListener('click', ()=> {
	audio.src = "./mp3/5.mp3";
	document.querySelector('.caratula').innerHTML = `<img src="img/micro.jpg" alt="">`;
});