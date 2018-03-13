const topHeaderSetup = ` <div class="top-nav-header w-nav" data-animation="default" data-collapse="medium" data-doc-height="1" data-duration="200" data-no-scroll="1">
  <div class="w-container">
    <a class="brand w-nav-brand w--current" href="https://www.lotadata.com" target="_blank">
      <img class="top-nav-logo" src="https://lotadata.com/src/images/_samples/logo_light/horizontal_darkBG.png" width="140"> 
    </a>
    <nav class="navmenu w-nav-menu" role="navigation">
      <ul id="menu_items">
        <li><a class="top-nav-navlink w-nav-link" href="https://lotadata.com" target="_blank" style="max-width: 940px;">home</a></li>
        <li class="has_dropdown"><a class="top-nav-navlink w-nav-link" href="#" style="max-width: 940px;" target="_blank">insights</a>
          <ul class="dropdown">
            <li><a href="https://www.lotadata.com/insights#for_marketers">For Marketers</a></li>
            <li><a href="https://www.lotadata.com/insights#for_developers">For Developers</a></li>
            <li><a href="https://www.lotadata.com/insights#for_government">For Government</a></li>
          </ul>
        </li>
        <li><a class="top-nav-navlink w-nav-link" href="https://lotadata.com/blog" target="_blank" style="max-width: 940px;">blog</a></li>
        <li><a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com" style="max-width: 940px;" target="_blank">support</a></li>
        <li><a class="top-nav-navlink w-nav-link" href="https://lotadata.com/docs" target="_blank" style="max-width: 940px;">docs</a></li>
        <li><a class="top-nav-navlink w-nav-link" href="https://lotadata.com/about_us" style="max-width: 940px;" target="_blank">company</a></li>
      </ul>
    </nav> 
  </div>
</div>`;

require(["gitbook", "jQuery"], function(gitbook, $) {

    gitbook.events.bind("start", function(e, config) {
      console.log('start top nav');
    });

    gitbook.events.bind("page.change", function(e) {
      function createHeader() {
        // return '<div class="top-nav-header w-nav" data-animation="default" data-collapse="medium" data-doc-height="1" data-duration="200" data-no-scroll="1"> <div class="w-container"> <a class="brand w-nav-brand w--current" href="https://www.lotadata.com" target="_blank"> <img class="top-nav-logo" src="https://lotadata.com/src/images/_samples/logo_light/horizontal_darkBG.png" width="140"> </a> <nav class="navmenu w-nav-menu" role="navigation"> <a class="top-nav-navlink w-nav-link" href="https://lotadata.com" target="_blank" style="max-width: 940px;">home</a> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com/insights" style="max-width: 940px;" target="_blank">insights</a> <a class="top-nav-navlink w-nav-link" href="https://lotadata.com/blog" target="_blank" style="max-width: 940px;">blog</a> <a class="top-nav-navlink w-nav-link" href="https://www.lotadata.com" style="max-width: 940px;" target="_blank">support</a> <a class="top-nav-navlink w-nav-link" href="https://lotadata.com/docs" target="_blank" style="max-width: 940px;">docs</a> <a class="top-nav-navlink w-nav-link" href="https://lotadata.com/about_us" style="max-width: 940px;" target="_blank">company</a> </nav> </div> </div>';
        return topHeaderSetup;
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

      //$headerWrapper.append($headerTitle);
      $header.append($headerWrapper);
      $('.book-summary').before($header);
    });
});