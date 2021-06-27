function linearAn(go)
{
    try{ var temp = document.getElementById(go.id); temp.remove(); clearInterval(window['ival'+go.id]); }catch(err){}
    var temp = document.createElement('div');
    temp.setAttribute('class',go.cs);
    temp.setAttribute('name',go.nm);
    temp.id = go.id;
    temp.style.width    = go.w1;
    temp.style.height   = go.h1;
    temp.style.left     = go.x1;
    temp.style.top      = go.y1;
    if(go.bg){ temp.style.background = go.bg; }else{ temp.style.backgroundColor = go.bc; }
    // temp.style.backgroundColor = go.cl;
    document.body.appendChild(temp);
    var i = 0;
    window['ival'+go.id] = setInterval(function(){
        i += 1;
        temp.style.width    = go.w1 + (go.w2-go.w1)*i/50 + 'vw';
        temp.style.height   = go.h1 + (go.h2-go.h1)*i/50 + 'vh';
        temp.style.left     = go.x1 + (go.x2-go.x1)*i/50 + 'vw';
        temp.style.top      = go.y1 + (go.y2-go.y1)*i/50 + 'vh';
        if(i > 50){ clearInterval(window['ival'+go.id]); temp.innerHTML = go.ms; }
    }, go.sp);
}
