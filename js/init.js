document.body.style.backgroundColor = 'rgb(' + cl09[0] + ',' + cl09[1] + ',' + cl09[2] + ')';
var wdth = window.innerWidth;
var hght = window.innerHeight;

function drawCircle(c)
{
    var temp = document.createElement('div');
    temp.setAttribute('class','circ');
    temp.style.width    = wdth > hght ? '15vw' : '15vh';
    temp.style.height   = wdth > hght ? '15vw' : '15vh';
    temp.style.top = '50vh';
    temp.style.left = '50vw';
    temp.style.background = c;
    temp.style.display = 'none';
    document.body.appendChild(temp);
}

cols = [];
cols.push('linear-gradient( 70deg,' + cmix2rgb(cl09,clww,0.75,0.75) + ',' + cols2rgb(cl09,1.0) + '90%)');
cols.push('linear-gradient(115deg,' + cmix2rgb(cl08,cl09,0.50,1.00) + ',' + cols2rgb(cl09,1.0) + '90%)');
cols.push('linear-gradient(160deg,' + cmix2rgb(cl03,clww,1.00,0.75) + ',' + cols2rgb(cl09,1.0) + '90%)');
cols.push('linear-gradient(205deg,' + cmix2rgb(cl02,clww,0.50,0.75) + ',' + cols2rgb(cl09,1.0) + '90%)');

drawCircle(cols[0]);
drawCircle(cols[1]);
drawCircle(cols[2]);
drawCircle(cols[3]);

function initpage(p){
    var crcs = document.getElementsByClassName('circ');
    var mbar = document.getElementsByClassName('menu');
    var elms = document.getElementsByClassName('nam' + p);
    for(var i = 0; i < crcs.length; i++){ crcs[i].style.display = 'none'; } crcs[p].style.display = 'block';
    for(var i = 0; i < mbar.length; i++){ mbar[i].style.display = 'none'; }
    for(var i = 0; i < mbar.length; i++){ mbar[i].style.display = 'none'; }

}

document.addEventListener('keyup', function(e){ if(e.keyCode == 49){ initpage(0); }});
document.addEventListener('keyup', function(e){ if(e.keyCode == 50){ initpage(1); }});
document.addEventListener('keyup', function(e){ if(e.keyCode == 51){ initpage(2); }});
document.addEventListener('keyup', function(e){ if(e.keyCode == 52){ initpage(3); }});

initpage(0);

function showmenu()
{
    var mbar = document.getElementsByClassName('menu');
    for(var i = 0; i < mbar.length; i++){ mbar[i].style.display = mbar[i].style.display == 'block' ? 'none' : 'block'; }
}

var temp = document.createElement('button');
temp.style.position = 'absolute';
temp.style.left = '94vw';
temp.style.top = '0vh';
temp.style.width = '6vw';
temp.style.height = '3vw';
temp.style.cursor = 'pointer';
temp.style.backgroundColor = 'transparent';
temp.style.backgroundColor = cmix2rgb(cl09,clbb,0.50,1.00);
temp.style.border = 'none';
temp.style.padding = '0';
// temp.onmouseover    = function(){ document.getElementById('menutextbox').style.color = cmix2rgb(cl09,clww,0.50,0.75); }
// temp.onmouseout     = function(){ document.getElementById('menutextbox').style.color = 'transparent'; }
temp.onclick = function(){ showmenu(); }
document.body.appendChild(temp);

var temp = document.createElement('button');
temp.id = 'menutextbox';
temp.style.position = 'absolute';
temp.style.left = '95vw';
temp.style.top = '0vh';
temp.style.width = '2vw';
temp.style.height = '3vw';
temp.style.cursor = 'pointer';
temp.style.backgroundColor = cmix2rgb(cl09,clbb,0.50,1.00);
temp.style.color = cmix2rgb(cl09,clww,0.50,0.75);
temp.style.border = 'none';
temp.style.padding = '0';
temp.innerHTML = 'menu';
temp.style.textAlign = 'center';
temp.onclick = function(){ showmenu(); }
document.body.appendChild(temp);

for(var i = 0; i < 3; i++)
{
    var temp = document.createElement('button');
    temp.style.position = 'absolute';
    temp.style.left = '97.50vw';
    temp.style.top = 0.75 + 2/3*i + 'vw';
    temp.style.width = '2vw';
    temp.style.height = '0.30vw';
    temp.style.backgroundColor = cmix2rgb(cl09,clww,0.50,1.00);
    temp.style.border = 'none';
    temp.style.padding = '0';
    temp.style.borderRadius = '2px';
    temp.style.cursor = 'pointer';
    temp.onclick = function(){ showmenu(); }
    document.body.appendChild(temp);
}

var temp = document.createElement('button');
temp.setAttribute('class','menu');
temp.style.position = 'absolute';
temp.style.left = '94vw';
temp.style.top = '3vw';
temp.style.width = '6vw';
temp.style.height = '3vw';
temp.style.backgroundColor = cmix2rgb(cl08,cl09,0.50,0.50);
temp.style.border = 'none';
temp.style.padding = '0';
temp.style.display = 'none';
temp.onclick = function(){ initpage(0); }
temp.innerHTML = 'home';
document.body.appendChild(temp);

var temp = document.createElement('button');
temp.setAttribute('class','menu');
temp.style.position = 'absolute';
temp.style.left = '94vw';
temp.style.top = '6vw';
temp.style.width = '6vw';
temp.style.height = '3vw';
temp.style.backgroundColor = cmix2rgb(cl08,cl09,0.75,0.50);
temp.style.border = 'none';
temp.style.padding = '0';
temp.style.display = 'none';
temp.onclick = function(){ initpage(1); }
temp.innerHTML = 'research';
document.body.appendChild(temp);

var temp = document.createElement('button');
temp.setAttribute('class','menu');
temp.style.position = 'absolute';
temp.style.left = '94vw';
temp.style.top = '9vw';
temp.style.width = '6vw';
temp.style.height = '3vw';
temp.style.backgroundColor = cmix2rgb(cl03,clww,0.75,0.75);
temp.style.border = 'none';
temp.style.padding = '0';
temp.style.display = 'none';
temp.onclick = function(){ initpage(2); }
temp.innerHTML = 'cv';
document.body.appendChild(temp);

var temp = document.createElement('button');
temp.setAttribute('class','menu');
temp.style.position = 'absolute';
temp.style.left = '94vw';
temp.style.top = '12vw';
temp.style.width = '6vw';
temp.style.height = '3vw';
temp.style.backgroundColor = cmix2rgb(cl01,clww,0.50,0.75);
temp.style.border = 'none';
temp.style.padding = '0';
temp.style.display = 'none';
temp.onclick = function(){ initpage(3); }
temp.innerHTML = 'about';
document.body.appendChild(temp);
