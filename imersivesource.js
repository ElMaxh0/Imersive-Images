//Adiciona as Propriedades Necessarias 
var imgurl=new URLSearchParams(window.location.search).get('imgurl')
var javascript = document.createElement('script');
var css = '.data{background: url("'+imgurl+'");}'
style = document.createElement('style');
javascript.src = './source.js';
document.head.appendChild(javascript); 
head = document.head || document.getElementsByTagName('head')[0],
head.appendChild(style); 
style.appendChild(document.createTextNode(css));
