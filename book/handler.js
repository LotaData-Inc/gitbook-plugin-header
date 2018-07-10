const topHeaderSetup = ` <div class="top-nav-header w-nav" data-animation="default" data-collapse="medium" data-doc-height="1" data-duration="200" data-no-scroll="1">
  <div class="w-container">
    <a class="brand w-nav-brand w--current" href="https://www.lotadata.com" target="_blank">
      <img class="top-nav-logo" src="https://lotadata.com/src/images/_samples/logo_light/horizontal_darkBG.png" width="180"> 
    </a>
    <a href="https://auth.lotadata.com/signup.html?origin=http://docs.lotadata.com" class="signup">Sign up</a>
    <nav class="navmenu w-nav-menu" role="navigation">
      <ul id="menu_items">
        <li><a class="top-nav-navlink w-nav-link" href="https://docs.lotadata.com" style="max-width: 940px;">docs</a></li>
        <li class="has_dropdown"><a class="top-nav-navlink w-nav-link" href="#" style="max-width: 940px;" target="_blank">insights</a>
          <ul class="dropdown">
            <li><a href="https://lotadata.com/#insights" target="_blank">GeoX</a></li>
          </ul>
        </li>
        <li class="has_dropdown"><a class="top-nav-navlink w-nav-link" href="#" target="_blank" style="max-width: 940px;">analytics</a>
          <ul class="dropdown">
            <li><a href="https://lotadata.com/#visualExplorer" target="_blank">GeoDash</a></li>
            <li><a href="https://lotadata.com/#momentsSdk" target="_blank">CityDash</a></li>
          </ul>
        </li>
        <li class="has_dropdown"><a class="top-nav-navlink w-nav-link" href="#" style="max-width: 940px;" target="_blank">company</a>
          <ul class="dropdown" style="width: 160%;">
            <li><a href="https://lotadata.com/about_us" target="_blank">about</a></li>
            <li><a href="https://lotadata.com/blog" target="_blank" style="max-width: 940px;">blog</a></li>
            <li><a href="https://lotadata.com/careers" style="max-width: 940px;" target="_blank">careers</a></li>
            <li><a href="https://lotadata.com/privacy_policy" target="_blank">privacy policy</a></li>
            <li><a href="https://lotadata.com/terms_of_service" target="_blank">terms of service</a></li>
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

require(["gitbook", "jQuery"], function(gitbook, $) {

    gitbook.events.bind("start", function(e, config) {
      console.log('start top nav');
    });

    gitbook.events.bind("page.change", function(e) {
      function createHeader() {
        // return '<div class="top-nav-header w-nav" data-animation="default" data-collapse="medium" data-doc-height="1" data-duration="200" data-no-scroll="1"> <div class="w-container"> <a class="brand w-nav-brand w--current" href="https://www.lotadata.com" target="_blank"> <img class="top-nav-logo" src="https://lotadata.com/src/images/_samples/logo_light/horizontal_darkBG.png" width="140"> </a> <nav class="navmenu w-nav-menu" role="navigation"> <a class="top-nav-navlink w-nav-link" href="https://lotadata.com" target="_blank" style="max-width: 940px;">home</a> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com/insights" style="max-width: 940px;" target="_blank">insights</a> <a class="top-nav-navlink w-nav-link" href="https://lotadata.com/blog" target="_blank" style="max-width: 940px;">blog</a> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com" style="max-width: 940px;" target="_blank">support</a> <a class="top-nav-navlink w-nav-link" href="https://lotadata.com/docs" target="_blank" style="max-width: 940px;">docs</a> <a class="top-nav-navlink w-nav-link" href="https://lotadata.com/about_us" style="max-width: 940px;" target="_blank">company</a> </nav> </div> </div>';
        return topHeaderSetup;
      }

      function adsScripts() {
        const head = document.getElementsByTagName('head')[0];

        return [adrollScriptTrack,linkedinScriptTrack,facebookScriptTrack].join('');
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

      $(head).append(adsScripts());

      //$headerWrapper.append($headerTitle);
      $header.append($headerWrapper);
      $('.book-summary').before($header);
    });
});