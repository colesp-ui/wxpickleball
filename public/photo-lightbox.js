(function(){
  function isZoomable(img){
    if(!img || img.dataset.noLightbox === 'true') return false;
    if(img.closest('a,button')) return false;
    if(img.classList.contains('brand-logo') || img.classList.contains('wx-wow-logo')) return false;
    if((img.getAttribute('alt') || '').toLowerCase().includes('logo')) return false;
    return true;
  }

  var overlay, enlarged, closeButton, previousOverflow;

  function ensureLightbox(){
    if(overlay) return;
    overlay=document.createElement('div');
    overlay.className='wx-photo-lightbox';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.setAttribute('aria-label','Enlarged photo');
    overlay.innerHTML='<button class="wx-photo-lightbox-close" type="button" aria-label="Close enlarged photo">×</button><img class="wx-photo-lightbox-image" alt="">';
    document.body.appendChild(overlay);
    enlarged=overlay.querySelector('.wx-photo-lightbox-image');
    closeButton=overlay.querySelector('.wx-photo-lightbox-close');
    closeButton.addEventListener('click',close);
    overlay.addEventListener('click',function(e){if(e.target===overlay)close();});
  }

  function open(img){
    ensureLightbox();
    enlarged.src=img.currentSrc || img.src;
    enlarged.alt=img.alt || 'Enlarged photo';
    previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    overlay.classList.add('open');
    closeButton.focus();
  }

  function close(){
    if(!overlay || !overlay.classList.contains('open')) return;
    overlay.classList.remove('open');
    document.body.style.overflow=previousOverflow || '';
    enlarged.removeAttribute('src');
  }

  document.addEventListener('click',function(e){
    var img=e.target.closest('img');
    if(isZoomable(img)) open(img);
  });

  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});

  function markPhotos(){
    document.querySelectorAll('img').forEach(function(img){
      if(isZoomable(img)) img.classList.add('wx-zoomable-photo');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',markPhotos); else markPhotos();
  window.addEventListener('load',markPhotos);
  new MutationObserver(markPhotos).observe(document.documentElement,{childList:true,subtree:true});
})();