//Adiciona as Propriedades Necessarias 
var imgurl="https://123alehot.net.br/projetos/visualize-mais/storage//imagens/image014.png"
//var imgurl=new URLSearchParams(window.location.search).get(imgurl)
var javascript = document.createElement('script');
var css = '.data{background: url('+imgurl+');}'
style = document.createElement('style');
javascript.src = 'https://123alehot.net.br/storage/projetos/codepen/scripts/imersive-js/source.js';
document.head.appendChild(javascript); 
head = document.head || document.getElementsByTagName('head')[0],
head.appendChild(style); 
style.appendChild(document.createTextNode(css));
//SCRIPT 
window.onload = function(){
document.onmousemove = function(e){
 x = e.pageX,
 y = e.pageY;
 limite = 200
 var mouseposx = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 var mouseposy = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
 rotx = y*100/mouseposy;
 rotx = 180*rotx/100;
 rotx = rotx-90;
 rotx *= -1;
 roty = x*100/mouseposx;
 roty = 180*roty/100;
 roty = roty-90;
 document.getElementById("imagem").style.transform =  "translate(-50%,-50%) rotateX("+(rotx*limite/100)+"deg) rotateY("+(roty*limite/100)+"deg) translateZ(0)";
 console.log(rotx)
 console.log(roty)
};
 function adaptativaapp(){
     var windowWidth = window.innerWidth;
     var windowHeight = window.innerHeight;
     var screenWidth = screen.width;
     var screenHeight = screen.height;
     document.getElementById('imageload').style.height = ((screenHeight/100)*125)+'px';
     document.getElementById('imageload').style.width =  ((screenWidth/100)*125)+'px';

 }
 adaptativaapp();
   };
