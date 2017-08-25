/*
 * selection-sharer: Medium like popover menu to share on Twitter or by email any text selected on the page
 *
 * -- Requires jQuery --
 * -- AMD compatible  --
 *
 * Author: Xavier Damman (@xdamman)
 * GIT: https://github.com/xdamman/share-selection
 * MIT License
 */

(function($) {
  var SelectionSharer = function(options) {
    var self = this;

    options = options || {};
    if (typeof options == 'string') options = { elements: options };

    this.sel = null;
    this.textSelection = '';
    this.htmlSelection = '';

    this.appId =
      $('meta[property="fb:app_id"]').attr('content') ||
      $('meta[property="fb:app_id"]').attr('value');
    this.url2share =
      $('meta[property="og:url"]').attr('content') ||
      $('meta[property="og:url"]').attr('value') ||
      window.location.href;

    this.getSelectionText = function(sel) {
      var html = '',
        text = '';
      sel = sel || window.getSelection();
      if (sel.rangeCount) {
        var container = document.createElement('div');
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          container.appendChild(sel.getRangeAt(i).cloneContents());
        }
        text = container.textContent;
        html = container.innerHTML;
      }
      self.textSelection = text;
      self.htmlSelection = html || text;
      return text;
    };

    this.selectionDirection = function(selection) {
      var sel = selection || window.getSelection();
      var range = document.createRange();
      if (!sel.anchorNode) return 0;
      range.setStart(sel.anchorNode, sel.anchorOffset);
      range.setEnd(sel.focusNode, sel.focusOffset);
      var direction = range.collapsed ? 'backward' : 'forward';
      range.detach();
      return direction;
    };

    this.showPopunder = function() {
      self.popunder = self.popunder || document.getElementById('selectionSharerPopunder');

      var sel = window.getSelection();
      var selection = self.getSelectionText(sel);

      if (sel.isCollapsed || selection.length < 10 || !selection.match(/ /))
        return self.hidePopunder();

      if (self.popunder.classList.contains('fixed')) {
        self.popunder.style.bottom = 0;
        return self.popunder.style.bottom;
      }

      var range = sel.getRangeAt(0);
      var node = range.endContainer.parentNode; // The <p> where the selection ends

      // If the popunder is currently displayed
      if (self.popunder.classList.contains('show')) {
        // If the popunder is already at the right place, we do nothing
        if (
          Math.ceil(self.popunder.getBoundingClientRect().top) ==
          Math.ceil(node.getBoundingClientRect().bottom)
        )
          return;

        // Otherwise, we first hide it and the we try again
        return self.hidePopunder(self.showPopunder);
      }

      if (node.nextElementSibling) {
        // We need to push down all the following siblings
        self.pushSiblings(node);
      } else {
        // We need to append a new element to push all the content below
        if (!self.placeholder) {
          self.placeholder = document.createElement('div');
          self.placeholder.className = 'selectionSharerPlaceholder';
        }

        // If we add a div between two <p> that have a 1em margin, the space between them
        // will become 2x 1em. So we give the placeholder a negative margin to avoid that
        var margin = window.getComputedStyle(node).marginBottom;
        self.placeholder.style.height = margin;
        self.placeholder.style.marginBottom = -2 * parseInt(margin, 10) + 'px';
        node.parentNode.insertBefore(self.placeholder);
      }

      // scroll offset
      var offsetTop = window.pageYOffset + node.getBoundingClientRect().bottom;
      self.popunder.style.top = Math.ceil(offsetTop) + 'px';

      setTimeout(function() {
        if (self.placeholder) self.placeholder.classList.add('show');
        self.popunder.classList.add('show');
      }, 0);
    };

    this.pushSiblings = function(el) {
      while ((el = el.nextElementSibling)) {
        el.classList.add('selectionSharer');
        el.classList.add('moveDown');
      }
    };

    this.hidePopunder = function(cb) {
      cb = cb || function() {};

      if (self.popunder == 'fixed') {
        self.popunder.style.bottom = '-50px';
        return cb();
      }

      self.popunder.classList.remove('show');
      if (self.placeholder) self.placeholder.classList.remove('show');
      // We need to push back up all the siblings
      var el;
      var els = document.getElementsByClassName('moveDown');
      while ((el = els[0])) el.classList.remove('moveDown');

      // CSS3 transition takes 0.6s
      setTimeout(function() {
        if (self.placeholder) document.body.insertBefore(self.placeholder);
        cb();
      }, 600);
    };

    this.show = function(e) {
      setTimeout(function() {
        var sel = window.getSelection();
        var selection = self.getSelectionText(sel);
        if (!sel.isCollapsed && selection && selection.length > 10 && selection.match(/ /)) {
          var range = sel.getRangeAt(0);
          var topOffset = range.getBoundingClientRect().top - 5;
          var top = topOffset + self.getPosition().y - self.$popover.height();
          var left = 0;
          if (e) {
            left = e.pageX;
          } else {
            var obj = sel.anchorNode.parentNode;
            left += obj.offsetWidth / 2;
            do {
              left += obj.offsetLeft;
            } while ((obj = obj.offsetParent));
          }
          switch (self.selectionDirection(sel)) {
            case 'forward':
              left -= self.$popover.width();
              break;
            case 'backward':
              left += self.$popover.width();
              break;
            default:
              return;
          }
          self.$popover.removeClass('anim').css('top', top + 10).css('left', left).show();
          setTimeout(function() {
            self.$popover.addClass('anim').css('top', top);
          }, 0);
        }
      }, 10);
    };

    this.hide = function() {
      self.$popover.hide();
    };

    this.smart_truncate = function(str, n) {
      if (!str || !str.length) return str;
      var toLong = str.length > n,
        s_ = toLong ? str.substr(0, n - 1) : str;
      s_ = toLong ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
      return toLong ? s_ + '...' : s_;
    };

    this.getRelatedTwitterAccounts = function() {
      var usernames = [];

      var creator =
        $('meta[name="twitter:creator"]').attr('content') ||
        $('meta[name="twitter:creator"]').attr('value');
      if (creator) usernames.push(creator);

      // We scrape the page to find a link to http(s)://twitter.com/username
      var anchors = document.getElementsByTagName('a');
      for (var i = 0, len = anchors.length; i < len; i++) {
        if (anchors[i].attributes.href && typeof anchors[i].attributes.href.value == 'string') {
          var matches = anchors[i].attributes.href.value.match(
            /^https?:\/\/twitter\.com\/([a-z0-9_]{1,20})/i
          );
          if (matches && matches.length > 1 && ['widgets', 'intent'].indexOf(matches[1]) == -1)
            usernames.push(matches[1]);
        }
      }

      if (usernames.length > 0) return usernames.join(',');
      else return '';
    };

    this.shareTwitter = function(e) {
      e.preventDefault();

      var text = '“' + self.smart_truncate(self.textSelection.trim(), 114) + '”';
      var url =
        'http://twitter.com/intent/tweet?text=' +
        encodeURIComponent(text) +
        '&related=' +
        self.getRelatedTwitterAccounts() +
        '&url=' +
        encodeURIComponent(self.url2share);

      // We only show the via @twitter:site if we have enough room
      if (self.viaTwitterAccount && text.length < 120 - 6 - self.viaTwitterAccount.length)
        url += '&via=' + self.viaTwitterAccount;

      var w = 640,
        h = 440;
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 2 - 100;
      window.open(
        url,
        'share_twitter',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
          w +
          ', height=' +
          h +
          ', top=' +
          top +
          ', left=' +
          left
      );
      self.hide();
      return false;
    };

    this.shareFacebook = function(e) {
      e.preventDefault();
      var text = self.htmlSelection.replace(/<p[^>]*>/gi, '\n').replace(/<\/p>| {2}/gi, '').trim();

      var url =
        'https://www.facebook.com/dialog/feed?' +
        'app_id=' +
        self.appId +
        '&display=popup' +
        '&caption=' +
        encodeURIComponent(text) +
        '&link=' +
        encodeURIComponent(self.url2share) +
        '&href=' +
        encodeURIComponent(self.url2share) +
        '&redirect_uri=' +
        encodeURIComponent(self.url2share);
      var w = 640,
        h = 440;
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 2 - 100;

      window.open(
        url,
        'share_facebook',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
          w +
          ', height=' +
          h +
          ', top=' +
          top +
          ', left=' +
          left
      );
    };

    this.shareEmail = function() {
      var text = self.textSelection.replace(/<p[^>]*>/gi, '\n').replace(/<\/p>| {2}/gi, '').trim();
      var email = {};
      email.subject = encodeURIComponent('Quote from ' + document.title);
      email.body =
        encodeURIComponent('“' + text + '”') +
        '%0D%0A%0D%0AFrom: ' +
        document.title +
        '%0D%0A' +
        window.location.href;
      $(this).attr('href', 'mailto:?subject=' + email.subject + '&body=' + email.body);
      self.hide();
      return true;
    };

    this.render = function() {
      var popoverHTML =
        '<div class="selectionSharer" id="selectionSharerPopover" style="position:absolute;">' +
        '  <div id="selectionSharerPopover-inner">' +
        '    <ul>' +
        '      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>' +
        '      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>' +
        '      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="%23FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>' +
        '    </ul>' +
        '  </div>' +
        '  <div class="selectionSharerPopover-clip"><span class="selectionSharerPopover-arrow"></span></div>' +
        '</div>';

      var popunderHTML =
        '<div id="selectionSharerPopunder" class="selectionSharer">' +
        '  <div id="selectionSharerPopunder-inner">' +
        '    <label>Share this selection</label>' +
        '    <ul>' +
        '      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>' +
        '      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>' +
        '      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="%23FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>' +
        '    </ul>' +
        '  </div>' +
        '</div>';
      self.$popover = $(popoverHTML);
      self.$popover.find('a.tweet').click(self.shareTwitter);
      self.$popover.find('a.facebook').click(self.shareFacebook);
      self.$popover.find('a.email').click(self.shareEmail);

      $('body').append(self.$popover);

      self.$popunder = $(popunderHTML);
      self.$popunder.find('a.tweet').click(self.shareTwitter);
      self.$popunder.find('a.facebook').click(self.shareFacebook);
      self.$popunder.find('a.email').click(self.shareEmail);
      $('body').append(self.$popunder);

      if (self.appId && self.url2share) {
        $('.selectionSharer a.facebook').css('display', 'inline-block');
      }
    };

    this.setElements = function(elements) {
      if (typeof elements == 'string') elements = $(elements);
      self.$elements = elements instanceof $ ? elements : $(elements);
      self.$elements.mouseup(self.show).mousedown(self.hide).addClass('selectionShareable');

      self.$elements.bind('touchstart', function() {
        self.isMobile = true;
      });

      document.onselectionchange = self.selectionChanged;
    };

    this.selectionChanged = function(e) {
      if (!self.isMobile) return;

      if (self.lastSelectionChanged) {
        clearTimeout(self.lastSelectionChanged);
      }
      self.lastSelectionChanged = setTimeout(function() {
        self.showPopunder(e);
      }, 300);
    };

    this.getPosition = function() {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';

      var x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
      var y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
      return { x: x, y: y };
    };

    this.render();

    if (options.elements) {
      this.setElements(options.elements);
    }
  };

  // jQuery plugin
  // Usage: $( "p" ).selectionSharer();
  $.fn.selectionSharer = function() {
    var sharer = new SelectionSharer();
    sharer.setElements(this);
    return this;
  };

  // For AMD / requirejs
  // Usage: require(["selection-sharer!"]);
  //     or require(["selection-sharer"], function(selectionSharer) { var sharer = new SelectionSharer('p'); });
  if (typeof define == 'function') {
    define(function() {
      SelectionSharer.load = function(name, req, onLoad) {
        var sharer = new SelectionSharer();
        sharer.setElements('p');
        onLoad();
      };
      return SelectionSharer;
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = SelectionSharer;
  } else {
    // Registering SelectionSharer as a global
    // Usage: var sharer = new SelectionSharer('p');
    window.SelectionSharer = SelectionSharer;
  }
})(jQuery);
