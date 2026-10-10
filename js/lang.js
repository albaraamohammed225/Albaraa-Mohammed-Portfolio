/* Arabic / English toggle */
(function(){
  var h=document.documentElement,b=document.getElementById('tg');
  function set(l){
    h.lang=l;h.dir=l=='ar'?'rtl':'ltr';
    b.textContent=l=='ar'?'EN':'عربي';
    try{localStorage.setItem('lang',l)}catch(e){}
  }
  var s='ar';try{s=localStorage.getItem('lang')||'ar'}catch(e){}
  set(s);
  b.onclick=function(){set(h.lang=='ar'?'en':'ar')};
})();
