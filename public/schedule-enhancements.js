(function(){
  function enhanceSchedule(){
    var schedule=document.getElementById('schedule');
    if(!schedule)return;

    var importantTitles=['Open Play Evaluations','Official Tryouts','Formal Offers Extended'];
    var rows=Array.from(schedule.querySelectorAll('.schedule-table tbody tr'));
    if(!rows.length)return;

    if(!schedule.querySelector('.wx-important-dates')){
      var unique=[];
      var seen={};
      rows.forEach(function(row){
        var cells=row.querySelectorAll('td');
        if(cells.length<5)return;
        var title=(cells[2].textContent||'').trim();
        if(importantTitles.indexOf(title)===-1)return;
        var key=[cells[0].textContent,cells[1].textContent,title,cells[3].textContent].join('|');
        if(seen[key])return;
        seen[key]=true;
        unique.push({date:cells[0].textContent.trim(),time:cells[1].textContent.trim(),title:title,location:cells[3].textContent.trim()});
      });

      if(unique.length){
        var wrap=document.createElement('section');
        wrap.className='wx-important-dates';
        wrap.innerHTML='<div class="wx-important-kicker">Season Kickoff</div><h3>Important Dates Coming Up</h3><div class="wx-important-grid">'+unique.map(function(item){return '<article class="wx-important-card"><div class="wx-important-date">'+item.date+'</div><div class="wx-important-title">'+item.title+'</div><div class="wx-important-meta"><span>'+item.time+'</span><span>'+item.location+'</span></div></article>';}).join('')+'</div>';
        var groups=schedule.querySelector('.schedule-groups');
        if(groups)groups.parentNode.insertBefore(wrap,groups);
      }
    }

    rows.forEach(function(row){
      var cells=row.querySelectorAll('td');
      if(cells.length<5)return;
      var title=(cells[2].textContent||'').trim();
      if(importantTitles.indexOf(title)!==-1){row.remove();return;}

      var badge=cells[4].querySelector('.player-badge');
      if(!badge)return;
      var block=row.closest('.schedule-block');
      var text=(badge.textContent||'').trim();

      if(text==='JV & Varsity' && block){
        if(block.classList.contains('varsity'))text='Varsity';
        else if(block.classList.contains('jv'))text='JV';
      }

      badge.textContent=text;
      badge.classList.remove('all','team','dev','varsity-player','jv-player','development-player');
      if(text==='Varsity')badge.classList.add('varsity-player');
      else if(text==='JV')badge.classList.add('jv-player');
      else if(text==='Development')badge.classList.add('development-player');
      else badge.classList.add('all');
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(enhanceSchedule,150);});
  else setTimeout(enhanceSchedule,150);
  window.addEventListener('load',enhanceSchedule);
  setTimeout(enhanceSchedule,800);
})();