gob1 = {
    'id': 'resp1',
    'cs': 'cbox',
    'ms': 'project 1',
    'nm': 'rem1',
    'x1': 50+ 7.5*Math.cos(1.20*Math.PI),
    'y1': 50+ 7.5*Math.sin(1.20*Math.PI)*wdth/hght,
    'x2': 50+12.0*Math.cos(1.20*Math.PI),
    'y2': 50+12.0*Math.sin(1.20*Math.PI)*wdth/hght,
    'w1': 0.50,
    'h1': 0.50,
    'w2': 5.00,
    'h2': 3.00,
    'bc': cmix2rgb(cl08,cl09,0.75,0.50),
    'bg': linegrad(cmix2rgb(cl08,cl08,0.50,0.50),cmix2rgb(cl08,cl09,0.50,0.10),'90deg',['0%','100%']),
    'sp': 0.25
}

gob2 = {
    'id': 'resp2',
    'cs': 'cbox',
    'ms': 'project 2',
    'nm': 'rem1',
    'x1': 50+ 7.5*Math.cos(1.00*Math.PI),
    'y1': 50+ 7.5*Math.sin(1.00*Math.PI)*wdth/hght,
    'x2': 50+12.0*Math.cos(1.00*Math.PI),
    'y2': 50+12.0*Math.sin(1.00*Math.PI)*wdth/hght,
    'w1': 0.50,
    'h1': 0.50,
    'w2': 5.00,
    'h2': 3.00,
    'bc': cmix2rgb(cl08,cl08,0.50,0.50),
    'bg': linegrad(cmix2rgb(cl08,cl08,0.50,0.50),cmix2rgb(cl08,cl09,0.50,0.10),'90deg',['0%','100%']),
    'sp': 0.25
}
gob3 = {
    'id': 'resp3',
    'cs': 'cbox',
    'ms': 'project 3',
    'nm': 'rem1',
    'x1': 50+ 7.5*Math.cos(0.80*Math.PI),
    'y1': 50+ 7.5*Math.sin(0.80*Math.PI)*wdth/hght,
    'x2': 50+12.0*Math.cos(0.80*Math.PI),
    'y2': 50+12.0*Math.sin(0.80*Math.PI)*wdth/hght,
    'w1': 0.50,
    'h1': 0.50,
    'w2': 5.00,
    'h2': 3.00,
    'bc': cmix2rgb(cl09,clww,0.75,1.00),
    'bg': linegrad(cmix2rgb(cl08,cl08,0.50,0.50),cmix2rgb(cl08,cl09,0.50,0.10),'90deg',['0%','100%']),
    'sp': 0.25
}

/* PROJECT 1 */

gob4 = {
    'id': 'res1c1',
    'cs': 'circ',
    'ms': '',
    'nm': 'rem2',
    'x1': 50+ 7.5*Math.cos(-0.15*Math.PI),
    'y1': 50+ 7.5*Math.sin(-0.15*Math.PI)*wdth/hght,
    'x2': 50+20.0*Math.cos(-0.15*Math.PI),
    'y2': 50+20.0*Math.sin(-0.15*Math.PI)*wdth/hght,
    'w1': 0.50,
    'h1': 0.50*wdth/hght,
    'w2': 15.00,
    'h2': 15.00*wdth/hght,
    'bg': linegrad(cmix2rgb(cl02,cl03,0.75,0.75),cmix2rgb(cl09,cl09,1.00,1.00),'160deg',['0%','100%']),
    'sp': 5
}

gob5 = {
    'id': 'res1c2',
    'cs': 'circ',
    'ms': '',
    'nm': 'rem2',
    'x1': 50+ 7.5*Math.cos(+0.15*Math.PI),
    'y1': 50+ 7.5*Math.sin(+0.15*Math.PI)*wdth/hght,
    'x2': 50+20.0*Math.cos(+0.15*Math.PI),
    'y2': 50+20.0*Math.sin(+0.15*Math.PI)*wdth/hght,
    'w1': 0.50,
    'h1': 0.50*wdth/hght,
    'w2': 15.00,
    'h2': 15.00*wdth/hght,
    'bg': linegrad(cmix2rgb(cl02,cl03,0.25,0.75),cmix2rgb(cl09,cl09,1.00,1.00),'160deg',['0%','100%']),
    'sp': 5
}

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
