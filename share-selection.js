/*
 * SelectionSharer: popover menu to share on Twitter 
 * or by email any text selection on the page
 *
 * -- Requires jQuery --
 * -- AMD compatible  --
 *
 * Author: Xavier Damman (@xdamman)
 * MIT License
 */

(function() {

  var selectionSharer = function() {

    var self = this;

    this.sel = null;
    this.textSelection='';
    this.htmlSelection='';

    var getSelectionText = function() {
        var html = "", text = "";
        if (typeof window.getSelection != "undefined") {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var container = document.createElement("div");
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    container.appendChild(sel.getRangeAt(i).cloneContents());
                }
                text = container.innerText;
                html = container.innerHTML
            }
        } else if (typeof document.selection != "undefined") {
            if (document.selection.type == "Text") {
                text = document.selection.createRange().text;
            }
        }
        self.textSelection = text;
        self.htmlSelection = html || text;
        return text;
    }

    var selectionDirection = function(selection) {
      var sel = selection || window.getSelection();
      var range = document.createRange();
      if(!sel.anchorNode) return 0;
      range.setStart(sel.anchorNode, sel.anchorOffset);
      range.setEnd(sel.focusNode, sel.focusOffset);
      var direction = (range.collapsed) ? "backward" : "forward";
      range.detach();
      return direction;
    }

    var showPopOver = function(e) {
      setTimeout(function() {
        var sel = window.getSelection(); 
        var selection = getSelectionText();
        if(!sel.isCollapsed && selection.length>10) {
          ev = e;
          var range = sel.getRangeAt(0);
          var topOffset = range.getBoundingClientRect().top - 5;
          var top = topOffset + window.scrollY - self.$popover.height();
          var left = e.pageX;
          switch(selectionDirection(sel)) {
            case 'forward':
              left -= self.$popover.width();
              break;
            case 'backward':
              left += self.$popover.width();
              break;
            default:
              return;
          }
          self.$popover.removeClass("anim").css("top", top+10).css("left", left).show();
          setTimeout(function() {
            self.$popover.addClass("anim").css("top", top);
          }, 0);
        }
      }, 10);
    }

    var hidePopOver = function(e) {
      self.$popover.hide();
    };

    var smart_truncate = function(str, n){
        if (!str || !str.length) return str;
        var toLong = str.length>n,
            s_ = toLong ? str.substr(0,n-1) : str;
        s_ = toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
        return  toLong ? s_ +'...' : s_;
     }

    var shareTwitter = function(e) {
      e.preventDefault(); 
      var relatedTwitterUser = 'xdamman';
      var text = "“"+smart_truncate(self.textSelection.trim(), 117)+"”";
      var url = 'http://twitter.com/intent/tweet?text='+encodeURIComponent(text)+'&related='+relatedTwitterUser+'&url='+encodeURIComponent(window.location.href);
      var w = 640, h=440;
      var left = (screen.width/2)-(w/2);
      var top = (screen.height/2)-(h/2)-100;
      window.open(url, "share_twitter", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+',       top='+top+', left='+left);
      hidePopOver();
      return false;
    };

    var shareEmail = function(e) {
      var text = self.htmlSelection.replace(/<p[^>]*>/ig,'\n').replace(/<\/p>|  /ig,'').trim();
      var email = {};
      email.subject = encodeURIComponent(document.title);
      email.body = encodeURIComponent("“"+text+"”")+"%0D%0A%0D%0AFrom: "+document.title+"%0D%0A"+window.location.href;
      $(this).attr("href","mailto:?subject="+email.subject+"&body="+email.body);
      hidePopOver();
      return true;
    };

    var popoverHTML =  '<div id="shareSelectionPopover" style="position:absolute;">'
                     + '  <div id="shareSelectionPopover-inner">'
                     + '    <ul>'
                     + '      <li><a class="tweet" href="" title="Share this selection with Twitter" target="_blank">Tweet</a></li>'
                     + '      <li><a class="email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="#FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>'
                     + '    </ul>'
                     + '  </div>'
                     + '  <div class="shareSelectionPopover-clip"><span class="shareSelectionPopover-arrow"></span></div>'
                     + '</div>';

    self.$popover = $(popoverHTML);
    self.$popover.find('a.tweet').click(shareTwitter);
    self.$popover.find('a.email').click(shareEmail);

    $('body').append($popover); 
    $('p').mouseup(showPopOver).mousedown(hidePopOver);

  };

  // For AMD / requirejs
  if(typeof define == 'function') {
    define(selectionSharer);
  }
  else {
    selectionSharer();
  }
  
})();
