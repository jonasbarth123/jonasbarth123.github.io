mdl1 = {};
mdl1['desc'] = []
mdl1['math'] = []

mdl1['desc'].push('preferences');
mdl1['math'].push('$$max\\mathbb{E}_0\\sum_{t=0}^\\infty\\beta^tu(c_{i,t})');

var temp = document.createElement('div');
temp.setAttribute('class','circ')
temp.setAttribute('name','p1_model');
temp.style.top              = '10vh';
temp.style.left             = '70vw';
temp.style.height           = 0.15*wdth + 'px';
temp.style.width            = 0.15*wdth + 'px';
temp.style.background       = "linear-gradient(60deg, " + cols2rgb(cl03,0.75) + "," + cols2rgb(cl09,0.75) + ")";
temp.style.display          = 'none';
document.body.appendChild(temp);

var temp = document.createElement('div');
temp.setAttribute('class','circ')
temp.setAttribute('name','p1_model');
temp.style.top              = '65vh';
temp.style.left             = '70vw';
temp.style.height           = 0.15*wdth + 'px';
temp.style.width            = 0.15*wdth + 'px';
temp.style.background       = "linear-gradient(130deg, " + cols2rgb(cl03,0.75) + "," + cols2rgb(cl09,0.75) + ")";
temp.style.display          = 'none';
document.body.appendChild(temp);

// for
// var temp = document.createElement('div');
// temp.setAttribute('class','math');
// temp.setAttribute('name','p1_model');
// temp.style.top = '10vh';
// temp.style.left = '75vw';
// temp.style.backgroundColor = cols2rgb(cl08,0.25);
// temp.style.display = 'none';
// temp.style.fontSize = '20pt';
// temp.innerHTML = '$$\\max \\mathbb{E}_0\\sum_{t=0}^\\infty\\beta^tu(c_{i,t})$$'
// // temp.innerHTML = "$$x = \\frac{1}{2}$$";
// document.body.appendChild(temp);
