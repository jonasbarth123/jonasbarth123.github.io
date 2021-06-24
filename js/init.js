document.body.style.backgroundColor = 'rgb(' + cl09[0] + ',' + cl09[1] + ',' + cl09[2] + ')';
var wdth = window.innerWidth;
var hght = window.innerHeight;

cols = [];
cols.push('linear-gradient( 70deg,' + cmix2rgb(cl09,clww,0.75,0.75) + ',' + cols2rgb(cl09,1.0) + '90%)');
cols.push('linear-gradient(115deg,' + cmix2rgb(cl08,cl09,0.50,1.00) + ',' + cols2rgb(cl09,1.0) + '90%)');
cols.push('linear-gradient(160deg,' + cmix2rgb(cl03,clww,1.00,0.75) + ',' + cols2rgb(cl09,1.0) + '90%)');
cols.push('linear-gradient(205deg,' + cmix2rgb(cl02,clww,0.50,0.75) + ',' + cols2rgb(cl09,1.0) + '90%)');

function drawCircle(c)
{
    var temp = document.createElement('div');
    temp.setAttribute('class','circ');
    temp.style.width = '15vw';
    temp.style.height = '15vw';
    temp.style.top = '50vh';
    temp.style.left = '50vw';
    temp.style.background = c;
    temp.style.display = 'none';
    document.body.appendChild(temp);
}

drawCircle(cols[0]);
drawCircle(cols[1]);
drawCircle(cols[2]);
drawCircle(cols[3]);

function initpage(p){
    var crcs = document.getElementsByClassName('circ');
    var bars = document.getElementsByClassName('nbar');
    for(var i = 0; i < crcs.length; i++){ crcs[i].style.display = 'none'; } crcs[p].style.display = 'block';
    for(var i = 0; i < bars.length; i++){ bars[i].style.backgroundColor = cmix2rgb(cl09,cl08,0.80,0.75); } bars[p].style.backgroundColor = cmix2rgb(cl09,clbb,0.75,0.75);
}

var menu = [];
var temp = document.createElement('button');
temp.setAttribute('class','nbar');
temp.style.top = '0vh';
temp.style.left = '60vw';
temp.style.backgroundColor = cols[1].split('deg,')[1].split(',rgba')[0];
temp.innerHTML = 'home';
temp.onclick = function(){ initpage(0); }
document.body.appendChild(temp);
menu.push(temp);

var temp = document.createElement('button');
temp.setAttribute('class','nbar');
temp.style.top = '0vh';
temp.style.left = '70vw';
temp.style.backgroundColor = cols[1].split('deg,')[1].split(',rgba')[0];
// temp.style.backgroundColor = cols[1].split('deg,')[1].split(',rgba')[0];
temp.onclick = function(){ initpage(1); }
temp.innerHTML = 'research';
document.body.appendChild(temp);
menu.push(temp);

var temp = document.createElement('button');
temp.setAttribute('class','nbar');
temp.style.top = '0vh';
temp.style.left = '80vw';
temp.style.backgroundColor = cols[1].split('deg,')[1].split(',rgba')[0];
// temp.style.backgroundColor = cols[2].split('deg,')[1].split(',rgba')[0];
temp.onclick = function(){ initpage(2); }
temp.innerHTML = 'cv';
document.body.appendChild(temp);
menu.push(temp);

var temp = document.createElement('button');
temp.setAttribute('class','nbar');
temp.style.top = '0vh';
temp.style.left = '90vw';
temp.style.backgroundColor = cols[1].split('deg,')[1].split(',rgba')[0];
// temp.style.backgroundColor = cols[3].split('deg,')[1].split(',rgba')[0];
temp.onclick = function(){ initpage(3); }
temp.innerHTML = 'about';
document.body.appendChild(temp);
menu.push(temp);

document.addEventListener('keyup', function(e){ if(e.keyCode == 49){ initpage(0); }});
document.addEventListener('keyup', function(e){ if(e.keyCode == 50){ initpage(1); }});
document.addEventListener('keyup', function(e){ if(e.keyCode == 51){ initpage(2); }});
document.addEventListener('keyup', function(e){ if(e.keyCode == 52){ initpage(3); }});

initpage(0);
