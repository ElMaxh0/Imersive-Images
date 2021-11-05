//Adiciona as Propriedades Necessarias 
//var imgurl=new URLSearchParams(window.location.search).get('imgurl')
var imgurl="https://images3.alphacoders.com/744/thumb-1920-744829.jpg"
var imgurl2="https://images3.alphacoders.com/866/866202.jpg"
var javascript = document.createElement('script');
var css = '.data{background: url("'+imgurl+'");}'
var cssData = '.data2{background: url("'+imgurl2+'");}'
style = document.createElement('style');
javascript.src = './source.js';
document.head.appendChild(javascript); 
head = document.head || document.getElementsByTagName('head')[0],
head.appendChild(style); 
style.appendChild(document.createTextNode(css));
style.appendChild(document.createTextNode(cssData));
