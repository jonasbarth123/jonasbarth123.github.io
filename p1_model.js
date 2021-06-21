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
temp.style.background       = "linear-gradient(60deg, " + cmix2rgb(cl02,[255,255,255],0.75,0.75) + "," + cols2rgb(cl09,0.75) + ")";
document.body.appendChild(temp);

var temp = document.createElement('div');
temp.setAttribute('class','circ')
temp.setAttribute('name','p1_model');
temp.style.top              = '65vh';
temp.style.left             = '70vw';
temp.style.height           = 0.15*wdth + 'px';
temp.style.width            = 0.15*wdth + 'px';
temp.style.background       = "linear-gradient(130deg, " + cmix2rgb(cl08,[255,200,255],0.75,0.75) + "," + cols2rgb(cl09,0.75) + ")";
document.body.appendChild(temp);


function tradeAnimation(){
    try{
        document.getElementById('bal1').remove();
        document.getElementById('bal2').remove();
        document.getElementById('bal3').remove();
        document.getElementById('bal4').remove();
        document.getElementById('bal5').remove();
        document.getElementById('bal6').remove();
    }catch(e){}

    var temp = document.createElement('div');
    temp.setAttribute('class','circ');
    temp.setAttribute('name','p1_model');
    temp.id = 'bal1';
    temp.style.width            = '2vw';
    temp.style.height           = '2vw';
    temp.style.top              = 0.01*wdth + (hght - 0.15*wdth)/2 + 'px';
    temp.style.left             = 0.12*wdth + (wdth - 0.15*wdth)/2 + 'px';
    temp.style.background       = cmix2rgb(cl03,[255,255,255],0.5,1.0);
    document.body.appendChild(temp);

    var temp = document.createElement('div');
    temp.setAttribute('class','circ');
    temp.setAttribute('name','p1_model');
    temp.id = 'bal2';
    temp.style.width            = '2vw';
    temp.style.height           = '2vw';
    temp.style.top              = 0.120*wdth + (hght - 0.15*wdth)/2 + 'px';
    temp.style.left             = 0.115*wdth + (wdth - 0.15*wdth)/2 + 'px';
    temp.style.background       = cmix2rgb(cl03,[255,255,255],0.5,1.0);
    document.body.appendChild(temp);

    var temp = document.createElement('div');
    temp.setAttribute('class','circ');
    temp.setAttribute('name','p1_model');
    temp.id = 'bal3';
    temp.style.width            = '2vw';
    temp.style.height           = '2vw';
    temp.style.top              = (0.07 - 40/500)*wdth + (hght - 0.15*wdth)/2 + 'px';
    temp.style.left             = (0.14 + 40/280)*wdth + (wdth - 0.15*wdth)/2 + 'px';
    temp.style.background       = cmix2rgb(cl01,[255,255,255],0.5,1.0);
    document.body.appendChild(temp);

    var temp = document.createElement('div');
    temp.setAttribute('class','circ');
    temp.setAttribute('name','p1_model');
    temp.id = 'bal4';
    temp.style.width            = '2vw';
    temp.style.height           = '2vw';
    temp.style.top              = (0.10 - 40/500)*wdth + (hght - 0.15*wdth)/2 + 'px';
    temp.style.left             = (0.19 + 40/280)*wdth + (wdth - 0.15*wdth)/2 + 'px';
    temp.style.background       = cmix2rgb(cl01,[255,255,255],0.5,1.0);
    document.body.appendChild(temp);

    var temp = document.createElement('div');
    temp.setAttribute('class','circ');
    temp.setAttribute('name','p1_model');
    temp.id = 'bal5';
    temp.style.width            = '2vw';
    temp.style.height           = '2vw';
    temp.style.top              = (0.08 + 40/500)*wdth + (hght - 0.15*wdth)/2 + 'px';
    temp.style.left             = (0.14 + 40/280)*wdth + (wdth - 0.15*wdth)/2 + 'px';
    temp.style.background       = cmix2rgb(cl08,[255,200,255],0.75,1.0);
    document.body.appendChild(temp);

    var temp = document.createElement('div');
    temp.setAttribute('class','circ');
    temp.setAttribute('name','p1_model');
    temp.id = 'bal6';
    temp.style.width            = '2vw';
    temp.style.height           = '2vw';
    temp.style.top              = (0.06 + 40/500)*wdth + (hght - 0.15*wdth)/2 + 'px';
    temp.style.left             = (0.21 + 40/280)*wdth + (wdth - 0.15*wdth)/2 + 'px';
    temp.style.background       = cmix2rgb(cl08,[255,200,255],0.75,1.0);
    document.body.appendChild(temp);

    var t = 0;
    var j = 0;
    var dirc = -1;
    var bal1 = document.getElementById('bal1');
    var bal3 = document.getElementById('bal3');
    var bal4 = document.getElementById('bal4');
    var bal5 = document.getElementById('bal5');
    var bal6 = document.getElementById('bal6');
    const animateNextFrame = () => {
      setTimeout(function(){
          if(t == 40){dirc = -dirc; }
          if(t ==  0){dirc = -dirc; j += 1; }
          bal1.style.top    = bal1.offsetTop  - dirc*(1/500)*wdth + 'px';
          bal1.style.left   = bal1.offsetLeft + dirc*(1/280)*wdth + 'px';
          bal2.style.top    = bal2.offsetTop  + dirc*(1/500)*wdth + 'px';
          bal2.style.left   = bal2.offsetLeft + dirc*(1/280)*wdth + 'px';
          bal3.style.top    = bal3.offsetTop  + dirc*(1/500)*wdth + 'px';
          bal3.style.left   = bal3.offsetLeft - dirc*(1/280)*wdth + 'px';
          bal4.style.top    = bal4.offsetTop  + dirc*(1/300)*wdth + 'px';
          bal5.style.top    = bal5.offsetTop  - dirc*(1/500)*wdth + 'px';
          bal5.style.left   = bal5.offsetLeft - dirc*(1/280)*wdth + 'px';
          bal6.style.top    = bal6.offsetTop  - dirc*(1/300)*wdth + 'px';
          // bal5.style.left   = bal5.offsetLeft - dirc*(1/280)*wdth + 'px';
          t += dirc;
          var areq = requestAnimationFrame(animateNextFrame)
          if(j == 1 && t == 0){ window.cancelAnimationFrame(areq); }
      },10);
    }

    requestAnimationFrame(animateNextFrame);
}
