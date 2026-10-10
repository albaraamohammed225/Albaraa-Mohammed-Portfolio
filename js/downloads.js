/* Workflow JSON + CV downloads (relative paths, works on GitHub Pages) */
(function(){
  var WF={
    1:'workflows/hr-helper-workflow.json',
    2:'workflows/restaurant-support-bot.json',
    3:'workflows/real-estate-lead-qualifier.json',
    4:'workflows/course-registration.json'
  };
  var CV='assets/Albaraa_Mohammed_AI_Automation_CV.pdf';

  function save(path){
    var a=document.createElement('a');
    a.href=path;
    a.download=path.split('/').pop();
    document.body.appendChild(a);a.click();a.remove();
  }

  for(var i=1;i<=4;i++)(function(i){
    var box=document.getElementById('a'+i);if(!box)return;
    var b=document.createElement('button');
    b.className='btn o dl';
    b.innerHTML='<span class="ar">تحميل ملف الـ JSON</span><span class="en">Download workflow JSON</span>';
    b.onclick=function(){save(WF[i])};
    box.insertBefore(b,box.firstChild);
  })(i);

  document.querySelectorAll('.cvb').forEach(function(b){
    b.onclick=function(){save(CV)};
  });
})();
