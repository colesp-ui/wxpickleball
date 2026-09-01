export default function PlayLayout({ children }) {
  return (
    <>
      <style>{`
        .play-page .play-nav-inner{
          width:100%!important;
          max-width:none!important;
          margin:0!important;
          padding-left:16px!important;
          padding-right:16px!important;
        }
        .play-page .play-brand{
          margin-left:0!important;
        }
        body .play-page .play-links .groupme-nav{
          background:transparent!important;
          color:#fff!important;
          margin-left:0!important;
          padding-left:0!important;
          padding-right:0!important;
          border:0!important;
          box-shadow:none!important;
        }
        @media(max-width:560px){
          .play-page .play-nav-inner{
            padding-left:14px!important;
            padding-right:14px!important;
          }
        }
      `}</style>
      {children}
    </>
  );
}
