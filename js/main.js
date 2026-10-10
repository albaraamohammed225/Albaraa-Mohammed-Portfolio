/* Project links + image lightbox */
var PJ={1:{link:"",demo:""},2:{link:"",demo:""},3:{link:"",demo:""},4:{link:"",demo:""}};
(function(){
  var md=document.getElementById('md'),mc=document.getElementById('mc');
  function add(i,u,ar,en){
    var a=document.createElement('a');
    a.className='btn o';a.href=u;a.target='_blank';a.rel='noopener';
    a.innerHTML='<span class="ar">'+ar+'</span><span class="en">'+en+'</span>';
    document.getElementById('a'+i).appendChild(a);
  }
  for(var i in PJ){
    if(PJ[i].link)add(i,PJ[i].link,'رابط المشروع','Project link');
    if(PJ[i].demo)add(i,PJ[i].demo,'شاهد العرض','Watch demo');
  }
  document.querySelectorAll('.th').forEach(function(b){
    b.onclick=function(){mc.innerHTML=b.querySelector('img').outerHTML;md.hidden=false};
  });
  function cl(){md.hidden=true}
  document.getElementById('mx').onclick=cl;
  md.onclick=function(e){if(e.target===md)cl()};
  document.onkeydown=function(e){if(e.key=='Escape')cl()};
})();
