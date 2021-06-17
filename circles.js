
var circ = [];
var temp = document.createElement('div');
temp.setAttribute('class','circ')
temp.style.top              = (hght-0.15*wdth)/2 + 'px';
temp.style.left             = (wdth-0.15*wdth)/2 + 'px';
temp.style.height           = 0.15*wdth + 'px';
temp.style.width            = 0.15*wdth + 'px';
temp.style.background  = "linear-gradient(130deg, " + cols2rgb(cl03,0.75) + "," + cols2rgb(cl09,0.75) + ")";
document.body.appendChild(temp);
circ.push(temp);

var temp = document.createElement('div');
temp.setAttribute('class','circ')
temp.style.top              = (hght-0.15*wdth)/2 + 'px';
temp.style.left             = (wdth-0.15*wdth)/2 + 'px';
temp.style.height           = 0.15*wdth + 'px';
temp.style.width            = 0.15*wdth + 'px';
temp.style.background  = "linear-gradient(210deg, " + cols2rgb(cl03,0.75) + "," + cols2rgb(cl09,0.75) + ")";
temp.style.display          = 'none';
document.body.appendChild(temp);
circ.push(temp);

var temp = document.createElement('img');
temp.setAttribute('class','circ')
temp.style.top          = (hght-0.15*wdth)/2 + 'px';
temp.style.left         = (wdth-0.15*wdth)/2 + 'px';
temp.style.height       = 0.15*wdth + 'px';
temp.style.width        = 0.15*wdth + 'px';
temp.style.objectFit    = 'cover';
temp.style.display      = 'none';
temp.src = "jtbw.jpg";
document.body.appendChild(temp);
circ.push(temp);

var temp = document.createElement('div');
temp.setAttribute('class','circ')
temp.style.top              = (hght-0.15*wdth)/2 + 'px';
temp.style.left             = (wdth-0.15*wdth)/2 + 'px';
temp.style.height           = 0.15*wdth + 'px';
temp.style.width            = 0.15*wdth + 'px';
temp.style.background       = "linear-gradient(50deg, " + cmix2rgb(cl08,cl09,0.50,1.00) + "," + cmix2rgb(cl07,cl09,0.05,0.75) + ")";
temp.style.display          = 'none'
document.body.appendChild(temp);
circ.push(temp);
