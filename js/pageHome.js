var temp = document.createElement('div');
temp.setAttribute('class','lbox');
temp.id = 'temp';
temp.style.top = '20vh';
temp.style.backgroundColor = cmix2rgb(cl09,cl08,0.75,1.00);
// temp.innerHTML = strn;
document.body.appendChild(temp);

window.addEventListener('wheel', function(e){
    yval = e.deltaY;
    document.getElementById('temp').style.top = 20 + 0.10*yval + 'vh';
    console.log(yval);
});
