(function () {
  'use strict';

  function injectOrbs() {
    if (document.getElementById('bg-orbs')) return;

    var wrap = document.createElement('div');
    wrap.id = 'bg-orbs';

    var orbData = [
      { w: 440, h: 440, top: '-100px', left: '58%', color: '#3b82f6', dur: '28s', delay: '0s', op: 0.20 },
      { w: 310, h: 310, top: '58%', left: '-70px', color: '#0ea5e9', dur: '22s', delay: '-8s', op: 0.16 },
      { w: 270, h: 270, top: '28%', left: '72%', color: '#818cf8', dur: '19s', delay: '-14s', op: 0.13 },
      { w: 360, h: 360, top: '78%', left: '42%', color: '#38bdf8', dur: '34s', delay: '-5s', op: 0.11 }
    ];

    orbData.forEach(function (d) {
      var el = document.createElement('div');
      el.className = 'bg-orb';
      el.style.cssText =
        'width:' + d.w + 'px;height:' + d.h + 'px;' +
        'top:' + d.top + ';left:' + d.left + ';' +
        'background:' + d.color + ';' +
        '--orb-dur:' + d.dur + ';' +
        '--orb-delay:' + d.delay + ';' +
        '--orb-op:' + d.op + ';';
      wrap.appendChild(el);
    });

    document.body.insertBefore(wrap, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectOrbs);
  } else {
    injectOrbs();
  }
}());
