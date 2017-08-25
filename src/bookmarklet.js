(function() {
  var baseUrl = '//xdamman.github.com/selection-sharer/lib/selection-sharer/dist';

  // Loading CSS
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = baseUrl + '/selection-sharer.css';
  document.head.appendChild(l);

  var loadSelectionSharer = function() {
    var s = document.createElement('script');
    s.src = baseUrl + '/selection-sharer.js';
    s.onload = runScript;
    document.body.appendChild(s);
  };

  var runScript = function() {
    var sharer = new SelectionSharer(); // eslint-disable-line no-undef
    sharer.show();
    sharer.setElements('p');
  };

  if (typeof jQuery != 'function') {
    var s = document.createElement('script');
    s.src = 'http://code.jquery.com/jquery-latest.js';
    s.onload = loadSelectionSharer;
    document.body.appendChild(s);
  } else {
    loadSelectionSharer();
  }
})();
