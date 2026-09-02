export default function Template({ children }) {
  return <>
    {children}
    <style>{`
      #contact .cta > div:first-child .cta-btn{margin-top:16px;display:inline-flex}
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
  </>;
}
