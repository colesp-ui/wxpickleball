(function(){
  function enhanceSchedule(){
    var schedule=document.getElementById('schedule');
    if(!schedule)return;

    var importantTitles=['Open Play Evaluations','Official Tryouts','Formal Offers Extended','Tryouts + Team Selection','Parent + Athlete Meeting'];
    var rows=Array.from(schedule.querySelectorAll('.schedule-table tbody tr'));

    if(!schedule.querySelector('.wx-important-dates')){
      var wrap=document.createElement('section');
      wrap.className='wx-important-dates';
      wrap.innerHTML='<div class="wx-important-kicker">Season Kickoff</div><h3>Important Dates Coming Up</h3><div class="wx-important-grid"><article class="wx-important-card"><div class="wx-important-date">Tue · Sep 29, 2026</div><div class="wx-important-title">Open Play Evaluations</div><div class="wx-important-meta"><span>8:00 PM – 10:00 PM</span><span>Washington Park</span></div></article><article class="wx-important-card"><div class="wx-important-date">Tue · Oct 6, 2026</div><div class="wx-important-title">Open Play Evaluations</div><div class="wx-important-meta"><span>8:00 PM – 10:00 PM</span><span>Washington Park</span></div></article><article class="wx-important-card"><div class="wx-important-date">Wed · Oct 21, 2026</div><div class="wx-important-title">Parent + Athlete Meeting</div><div class="wx-important-meta"><span>6:30 PM – 7:30 PM</span><span>Woods Cross Library</span><span>Mandatory for all parents and athletes</span></div></article><article class="wx-important-card"><div class="wx-important-date">Thu · Oct 22, 2026</div><div class="wx-important-title">Tryouts + Team Selection</div><div class="wx-important-meta"><span>3:00 PM – 6:00 PM</span><span>Woods Cross Kitchen</span><span>Athletes invited to a 1-hour window</span></div></article></div>';
      var groups=schedule.querySelector('.schedule-groups');
      if(groups)groups.parentNode.insertBefore(wrap,groups);
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