clbb = [  0,  0,  0]
clww = [255,255,255]
cl00 = [158,  1, 66]
cl01 = [213, 62, 79]
cl02 = [244,109, 67]
cl03 = [253,174, 97]
cl04 = [254,224,139]
cl05 = [255,255,191]
cl06 = [230,245,152]
cl07 = [171,221,164]
cl08 = [102,194,165]
cl09 = [ 50,136,189]
cl10 = [94, 79,162]

function cols2rgb(carr,a){ return 'rgba(' + carr[0] + ',' + carr[1] + ',' + carr[2] + ',' + a + ')'; }
function cmix2rgb(col1,col2,w,a){ return 'rgba(' + (w*col1[0]+(1-w)*col2[0]) + ',' + (w*col1[1]+(1-w)*col2[1]) + ',' + (w*col1[2]+(1-w)*col2[2]) + ',' + a + ')'; }
function linegrad(col1,col2,d,p){ return 'linear-gradient(' + d + ',' + col1 + p[0] + ',' + col2 + p[1] + ')'; }
