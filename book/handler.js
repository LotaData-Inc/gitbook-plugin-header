const topHeaderSetup = ` <div class="top-nav-header w-nav" data-animation="default" data-collapse="medium" data-doc-height="1" data-duration="200" data-no-scroll="1">
  <div class="w-container">
    <a class="brand w-nav-brand w--current" href="https://www.lotadata.com" target="_blank">
      <img class="top-nav-logo" src="https://www.lotadata.com/src/images/_samples/logo_light/horizontal_darkBG.png" width="180"> 
    </a>
    <a href="https://auth.lotadata.com/signup.html?origin=http://docs.lotadata.com" class="signup">Sign up</a>
    <nav class="navmenu w-nav-menu" role="navigation">
      <ul id="menu_items">
        <li><a class="top-nav-navlink w-nav-link" href="https://docs.lotadata.com" style="max-width: 940px;">docs</a></li>
        <li class="has_dropdown"><a class="top-nav-navlink w-nav-link" href="#" style="max-width: 940px;" target="_blank">insights</a>
          <ul class="dropdown">
            <li><a href="https://www.lotadata.com/#insights" target="_blank">GeoX</a></li>
          </ul>
        </li>
        <li class="has_dropdown"><a class="top-nav-navlink w-nav-link" href="#" target="_blank" style="max-width: 940px;">analytics</a>
          <ul class="dropdown">
            <li><a href="https://www.lotadata.com/#visualExplorer" target="_blank">GeoDash</a></li>
            <li><a href="https://www.lotadata.com/#momentsSdk" target="_blank">CityDash</a></li>
          </ul>
        </li>
        <li class="has_dropdown"><a class="top-nav-navlink w-nav-link" href="#" style="max-width: 940px;" target="_blank">company</a>
          <ul class="dropdown" style="width: 160%;">
            <li><a href="https://www.lotadata.com/about_us" target="_blank">about</a></li>
            <li><a href="https://www.lotadata.com/blog" target="_blank" style="max-width: 940px;">blog</a></li>
            <li><a href="https://www.lotadata.com/careers" style="max-width: 940px;" target="_blank">careers</a></li>
            <li><a href="https://www.lotadata.com/privacy_policy" target="_blank">privacy policy</a></li>
            <li><a href="https://www.lotadata.com/terms_of_service" target="_blank">terms of service</a></li>
          </ul>
        </li>
      </ul>
    </nav> 
  </div>
</div>`;

const adrollScriptTrack = `
  <script type="text/javascript">
      adroll_adv_id = "33RN5EGX5RHFNBW27CA5GF";
      adroll_pix_id = "PWRUHUNWGBFGDE5T5PUTXI";
      /* OPTIONAL: provide email to improve user identification */
      /* adroll_email = "username@example.com"; */
      (function () {
          var _onload = function(){
              if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return}
              if (!window.__adroll_loaded){__adroll_loaded=true;setTimeout(_onload, 50);return}
              var scr = document.createElement("script");
              var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
              scr.setAttribute('async', 'true');
              scr.type = "text/javascript";
              scr.src = host + "/j/roundtrip.js";
              ((document.getElementsByTagName('head') || [null])[0] ||
                  document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
          };
          if (window.addEventListener) {window.addEventListener('load', _onload, false);}
          else {window.attachEvent('onload', _onload)}
      }());
  </script>
`;

const linkedinScriptTrack = `
  <script type="text/javascript">
          _linkedin_data_partner_id = "328324";
          </script><script type="text/javascript">
          (function(){var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})();
  </script>
  <noscript>
          <img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=328324&fmt=gif" />
  </noscript>
`;

const facebookScriptTrack = `
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '233159014169154'); 
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1" src="https://www.facebook.com/tr?id=233159014169154&ev=PageView&noscript=1"/>
  </noscript>
`;


const analyticsScriptTrack = `
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-59206109-8"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-59206109-8');
  </script>
`;

const analyticsPixelTrack = `
    <script type="text/javascript">
       adroll_adv_id = "33RN5EGX5RHFNBW27CA5GF";
       adroll_pix_id = "PWRUHUNWGBFGDE5T5PUTXI";

       (function () {
           var _onload = function(){
               if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return}
               if (!window.__adroll_loaded){__adroll_loaded=true;setTimeout(_onload, 50);return}
               var scr = document.createElement("script");
               var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
               scr.setAttribute(‘async’, ‘true’);
               scr.type = "text/javascript";
               scr.src = host + "/j/roundtrip.js";
               ((document.getElementsByTagName(‘head’) || [null])[0] ||
                   document.getElementsByTagName(‘script’)[0].parentNode).appendChild(scr);
           };
           if (window.addEventListener) {window.addEventListener(‘load’, _onload, false);}
           else {window.attachEvent(‘onload’, _onload)}
       }());
    </script>
`;

const base64Logo = "data:image/png;base64,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";

require(["gitbook", "jQuery"], function(gitbook, $) {

    gitbook.events.bind("start", function(e, config) {
      console.log('start top nav');
    });

    gitbook.events.bind("page.change", function(e) {
      function createHeader() {
        // return '<div class="top-nav-header w-nav" data-animation="default" data-collapse="medium" data-doc-height="1" data-duration="200" data-no-scroll="1"> <div class="w-container"> <a class="brand w-nav-brand w--current" href="https://www.lotadata.com" target="_blank"> <img class="top-nav-logo" src="https://www.lotadata.com/src/images/_samples/logo_light/horizontal_darkBG.png" width="140"> </a> <nav class="navmenu w-nav-menu" role="navigation"> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com" target="_blank" style="max-width: 940px;">home</a> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com/insights" style="max-width: 940px;" target="_blank">insights</a> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com/blog" target="_blank" style="max-width: 940px;">blog</a> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com" style="max-width: 940px;" target="_blank">support</a> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com/docs" target="_blank" style="max-width: 940px;">docs</a> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com/about_us" style="max-width: 940px;" target="_blank">company</a> </nav> </div> </div>';
        return topHeaderSetup;
      }

      function adsScripts() {
        return [adrollScriptTrack,linkedinScriptTrack,facebookScriptTrack,analyticsScriptTrack,analyticsPixelTrack].join('');
      }
      // Get configuration.
      var headerTitle = 'NEW HEADER';

      $('.book-body').css('top', '70px');
      $('.book-summary').css('top', '70px');
      $('.book-header').css({'top': '70px', 'border-top': '1px solid #ededed'});

      // Add customize header html.
      var $header = $('<div class="custom-header"></div>');
      var $headerWrapper = $('<div class="header-element-wrapper"></div>');
      var $link = $(createHeader());
      $headerWrapper.append($link);
      //var $headerTitle = $('<div class="header-text">' + headerTitle + '</div>');

      $(document.getElementsByTagName('head')[0]).append(adsScripts());

      //$headerWrapper.append($headerTitle);
      $header.append($headerWrapper);
      $('.book-summary').before($header);

      $('.top-nav-logo')[0].src = base64Logo
    });
});