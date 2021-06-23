// for(var i = 0; i < crcs.length; i++){crcs[i].style.display = 'none';}
// crcs[1].style.display = 'block';

var temp = document.createElement('div');
temp.setAttribute('name','res1');
temp.style.position = 'absolute';
temp.style.borderRadius = '50%';
temp.style.transform = 'translate(-50%,-50%)';
temp.style.width = '15vw';
temp.style.height = '15vw';
temp.style.top = '25vh';
temp.style.left = '75vw';
temp.style.background = 'linear-gradient(120deg,' + cmix2rgb(cl01,clww,0.50,1.0) + ',' + cols2rgb(cl09,1.0) + ')';
temp.style.display = 'none';
document.body.appendChild(temp);

var temp = document.createElement('div');
temp.setAttribute('name','res1');
temp.style.position = 'absolute';
temp.style.borderRadius = '50%';
temp.style.transform = 'translate(-50%,-50%)';
temp.style.width = '15vw';
temp.style.height = '15vw';
temp.style.top = '75vh';
temp.style.left = '75vw';
temp.style.background = 'linear-gradient(120deg,' + cmix2rgb(cl01,clww,0.50,1.0) + ',' + cols2rgb(cl09,1.0) + ')';
temp.style.display = 'none';
document.body.appendChild(temp);

function initRes1(){ var temp = document.getElementsByName('res1'); for(var i = 0; i < temp.length; i++){ temp[i].style.display = 'block'; }}
function exitRes1(){ var temp = document.getElementsByName('res1'); for(var i = 0; i < temp.length; i++){ temp[i].style.display = 'none'; }}

/*
var temp = document.createElement('div');
temp.setAttribute('class','math');
temp.style.left = '10vw';
temp.style.top = '10vh';
temp.style.height = '9.5vh';
temp.style.lineHeight = '9.5vh';
temp.style.backgroundColor = cmix2rgb(cl09,clww,0.80,1.00);
temp.innerHTML = "$$\\max\\mathbb{E}\\sum_{t=0}^\\infty\\beta^tu(c_{i,t})$$"
document.body.appendChild(temp);

var temp = document.createElement('div');
temp.setAttribute('class','math');
temp.style.left = '10vw';
temp.style.top = '20vh';
temp.style.height = '9.5vh';
temp.style.lineHeight = '9.5vh';
temp.style.backgroundColor = cmix2rgb(cl09,clww,0.80,1.00);
temp.innerHTML = "$$c_{i,t}=y_{i,t}+(1-\\mathcal{D}_{i,t})(b_{i,t}-q_{i,t}b_{i,t+1})-(1-\\mathcal{D}_{j,t})(b_{j,i,t}-q_{j,t}b_{j,i,t+1})$$"
document.body.appendChild(temp);

var temp = document.createElement('div');
temp.setAttribute('class','math');
temp.style.left = '10vw';
temp.style.top = '30vh';
temp.style.height = '9.5vh';
temp.style.lineHeight = '9.5vh';
temp.style.backgroundColor = cmix2rgb(cl09,clww,0.80,1.00);
temp.innerHTML = "$$c_{i,t}=y_{i,t}+(1-\\mathcal{D}_{i,t})(b_{i,t}-q_{i,t}b_{i,t+1})$$"
document.body.appendChild(temp);
*/
