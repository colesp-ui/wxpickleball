export default function Template({ children }) {
  return <>
    {children}
    <style>{`
      #contact .cta > div:first-child .cta-btn{margin-top:16px;display:inline-flex}
      .wx-zoomable-photo{cursor:zoom-in}
      .wx-photo-lightbox{position:fixed;inset:0;z-index:99999;background:rgba(2,10,18,.94);display:flex;align-items:center;justify-content:center;padding:34px;opacity:0;visibility:hidden;transition:opacity .18s ease,visibility .18s ease}
      .wx-photo-lightbox.open{opacity:1;visibility:visible}
      .wx-photo-lightbox-image{display:block;max-width:min(94vw,1500px);max-height:92vh;width:auto;height:auto;object-fit:contain;box-shadow:0 20px 70px rgba(0,0,0,.5);border-radius:4px}
      .wx-photo-lightbox-close{position:fixed;top:18px;right:22px;z-index:100000;width:48px;height:48px;border:0;border-radius:50%;background:rgba(7,28,49,.88);color:#fff;font:300 38px/44px Arial,Helvetica,sans-serif;text-align:center;cursor:pointer;box-shadow:0 4px 18px rgba(0,0,0,.3)}
      .wx-photo-lightbox-close:hover{background:#e51f35}
      @media(max-width:600px){.wx-photo-lightbox{padding:18px}.wx-photo-lightbox-close{top:12px;right:12px;width:44px;height:44px;font-size:34px;line-height:40px}.wx-photo-lightbox-image{max-width:96vw;max-height:88vh}}
    `}</style>
    <script dangerouslySetInnerHTML={{__html:`
      function refineInterestCard(){
        var contact=document.getElementById('contact');
        if(!contact)return;
        var cta=contact.querySelector('.cta');
        var heading=contact.querySelector('h3');
        var copy=contact.querySelector('.cta p');
        var button=contact.querySelector('.cta > a');
        var formTitle=contact.querySelector('.wx-info-title');
        if(copy)copy.remove();
        if(button){
          button.textContent='Learn More Here';
          if(heading&&heading.parentElement&&button.parentElement!==heading.parentElement){
            heading.insertAdjacentElement('afterend',button);
          }
        }
        if(formTitle)formTitle.textContent='or we can reach out to you';
      }
      if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(refineInterestCard,120)});else setTimeout(refineInterestCard,120);
      window.addEventListener('load',refineInterestCard);
      setTimeout(refineInterestCard,700);
    `}} />
    <script src="/photo-lightbox.js" defer></script>
  </>;
}
