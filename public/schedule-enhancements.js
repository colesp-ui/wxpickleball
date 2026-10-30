(function(){
  function enhanceSchedule(){
    var schedule=document.getElementById('schedule');
    if(!schedule)return;

    var importantTitles=['Open Play Evaluations','Official Tryouts','Formal Offers Extended','Tryouts + Team Selection','Parent + Athlete Meeting'];
    var rows=Array.from(schedule.querySelectorAll('.schedule-table tbody tr'));

    // Previous seasons' hard-coded date cards are obsolete. The homepage
    // UpcomingActivities component now owns the rotating calendar cards.
    schedule.querySelectorAll('.wx-important-dates').forEach(function(block){block.remove();});

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