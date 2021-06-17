function update_circle(x)
{
    for(var i = 0; i < 4; i++)
    {
        circ[i].style.display = 'none';
    }
    circ[x].style.display = 'block';
    if(x == 2)
    {
        var cvel = document.getElementsByName('cv');
        for(var i = 0; i < cvel.length; i++){ cvel[i].style.display = 'block'; }
    }else{
        var cvel = document.getElementsByName('cv');
        for(var i = 0; i < cvel.length; i++){ cvel[i].style.display = 'none'; }
    }
    if(x == 3)
    {
        var abot = document.getElementsByName('about');
        for(var i = 0; i < abot.length; i++){ abot[i].style.display = 'block'; }
    }else{
        var abot = document.getElementsByName('about');
        for(var i = 0; i < abot.length; i++){ abot[i].style.display = 'none'; }
    }
}

function cols2rgb(carr,a){ return 'rgba(' + carr[0] + ',' + carr[1] + ',' + carr[2] + ',' + a + ')'; }
function cmix2rgb(col1,col2,w,a){ return 'rgba(' + (w*col1[0]+(1-w)*col2[0]) + ',' + (w*col1[1]+(1-w)*col2[1]) + ',' + (w*col1[2]+(1-w)*col2[2]) + ',' + a + ')'; }
