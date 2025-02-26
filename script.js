const _0x11980c = _0x5e5e;
(function(_0x4c761c, _0x4df350) {
    const _0x1fd0f7 = _0x5e5e
      , _0x200b18 = _0x4c761c();
    while (!![]) {
        try {
            const _0x5d3f9c = parseInt(_0x1fd0f7(0x196)) / 0x1 * (parseInt(_0x1fd0f7(0x1b5)) / 0x2) + parseInt(_0x1fd0f7(0x1b3)) / 0x3 + parseInt(_0x1fd0f7(0x1a3)) / 0x4 + -parseInt(_0x1fd0f7(0x1bf)) / 0x5 * (parseInt(_0x1fd0f7(0x199)) / 0x6) + parseInt(_0x1fd0f7(0x197)) / 0x7 + parseInt(_0x1fd0f7(0x1c3)) / 0x8 + -parseInt(_0x1fd0f7(0x1b4)) / 0x9;
            if (_0x5d3f9c === _0x4df350)
                break;
            else
                _0x200b18['push'](_0x200b18['shift']());
        } catch (_0x1d18b7) {
            _0x200b18['push'](_0x200b18['shift']());
        }
    }
}(_0x23a6, 0x7aede));
let noButton = document[_0x11980c(0x19a)]('no')
  , yesButton = document[_0x11980c(0x19a)](_0x11980c(0x1a8))
  , noClickCount = 0x0;
function _0x23a6() {
    const _0x1ba164 = ['href', 'fixed', 'then', 'innerHeight', 'style', 'offsetHeight', 'removeChild', '复制到剪贴板:\x20', 'position', 'textarea', '348256ezCOkY', '5422858iCfMan', 'copy', '6JaevrI', 'getElementById', 'src', 'translate(', 'hidden', 'writeText', 'px)', 'img/2.gif', 'location', 'mainImage', '3285168KJIpCL', 'random', 'transition', 'clipboard', '什么意思不参拜大王？', 'yes', 'indexOf', 'execCommand', 'select', 'addEventListener', '大胆！', 'error', 'children', 'createElement', 'overflow', 'transform\x200.1s\x20ease', '395442kJgLTI', '8945127LYkwBB', '2bbSocc', '链接已复制到剪贴板:\x20', 'transform', '复制链接失败，请手动复制。', 'body', 'catch', '复制失败:', 'offsetWidth', '复制链接失败:', 'querySelector', '3774100jDUBBE', 'click', 'innerText', 'from', '1409480gWMlEF', 'insertBefore', '链接已'];
    _0x23a6 = function() {
        return _0x1ba164;
    }
    ;
    return _0x23a6();
}
const mainImage = document[_0x11980c(0x19a)](_0x11980c(0x1a2))
  , noTexts = [_0x11980c(0x1a7), _0x11980c(0x1ad), '知道大王的厉害了吧'];
noButton[_0x11980c(0x1ac)](_0x11980c(0x1c0), () => {
    const _0x10df1f = _0x11980c;
    noClickCount++;
    if (noClickCount < 0x3)
        noButton['innerText'] = noTexts[noClickCount - 0x1],
        swapButtons(),
        mainImage[_0x10df1f(0x19b)] = _0x10df1f(0x1a0);
    else
        noClickCount >= 0x3 && (noClickCount < 0x4 && (noButton[_0x10df1f(0x1c1)] = noTexts[noClickCount - 0x1]),
        moveNoButton());
}
),
yesButton[_0x11980c(0x1ac)](_0x11980c(0x1c0), () => {
    const _0x33ab98 = _0x11980c;
    document[_0x33ab98(0x1b9)][_0x33ab98(0x1ca)][_0x33ab98(0x1b1)] = _0x33ab98(0x19d),
  document.body.innerHTML = `
      <div class="yes-screen">
          <h1 class="yes-text">大王的好宝宝</h1>
          <img src="img/4.gif" alt="拥抱" class="yes-image">
          
      </div>
  `;
}
);
function swapButtons() {
    const _0x229f60 = _0x11980c
      , _0x153919 = document[_0x229f60(0x1be)]('.buttons')
      , _0x39895d = Array[_0x229f60(0x1c2)](_0x153919[_0x229f60(0x1af)])['indexOf'](noButton)
      , _0x212932 = Array[_0x229f60(0x1c2)](_0x153919['children'])[_0x229f60(0x1a9)](yesButton);
    _0x39895d < _0x212932 ? _0x153919[_0x229f60(0x1c4)](yesButton, noButton) : _0x153919['insertBefore'](noButton, yesButton);
}
function moveNoButton() {
    const _0x4b9cd2 = _0x11980c;
    noButton['style'][_0x4b9cd2(0x1ce)] = 'absolute',
    noButton[_0x4b9cd2(0x1ca)][_0x4b9cd2(0x1a5)] = _0x4b9cd2(0x1b2);
    const _0x3b2fab = window['innerWidth']
      , _0x475960 = window[_0x4b9cd2(0x1c9)]
      , _0x3ce48a = noButton[_0x4b9cd2(0x1bc)]
      , _0x5cdf16 = noButton[_0x4b9cd2(0x1cb)];
    let _0xe8d5d8 = setInterval( () => {
        const _0x7d9742 = _0x4b9cd2;
        let _0x17b6bd = (Math[_0x7d9742(0x1a4)]() * 0x2 - 0x1) * (_0x3b2fab - _0x3ce48a) * 0.5
          , _0x5aed05 = (Math[_0x7d9742(0x1a4)]() * 0x2 - 0x1) * (_0x475960 - _0x5cdf16) * 0.5;
        noButton[_0x7d9742(0x1ca)][_0x7d9742(0x1b7)] = _0x7d9742(0x19c) + _0x17b6bd + 'px,\x20' + _0x5aed05 + _0x7d9742(0x19f);
    }
    , 0x64);
    setTimeout( () => {
        const _0x1fd960 = _0x4b9cd2;
        clearInterval(_0xe8d5d8),
        noButton[_0x1fd960(0x1ca)][_0x1fd960(0x1ce)] = '',
        noButton[_0x1fd960(0x1ca)]['transform'] = '';
    }
    , 0xbb8);
}
function _0x5e5e(_0x4ed29f, _0x2ada0a) {
    const _0x23a68d = _0x23a6();
    return _0x5e5e = function(_0x5e5eb5, _0x2eb946) {
        _0x5e5eb5 = _0x5e5eb5 - 0x196;
        let _0x78a23e = _0x23a68d[_0x5e5eb5];
        return _0x78a23e;
    }
    ,
    _0x5e5e(_0x4ed29f, _0x2ada0a);
}
function copyLink() {
    const _0x406875 = _0x11980c
      , _0x231d92 = window[_0x406875(0x1a1)][_0x406875(0x1c6)];
    navigator['clipboard'] ? navigator[_0x406875(0x1a6)][_0x406875(0x19e)](_0x231d92)[_0x406875(0x1c8)]( () => {
        const _0x47ff2c = _0x406875;
        alert(_0x47ff2c(0x1b6) + _0x231d92);
    }
    )[_0x406875(0x1ba)](_0x13bc42 => {
        const _0x3e8fd6 = _0x406875;
        console[_0x3e8fd6(0x1ae)](_0x3e8fd6(0x1bd), _0x13bc42),
        alert('复制链接失败，请手动复制。');
    }
    ) : fallbackCopyTextToClipboard(_0x231d92);
}
function fallbackCopyTextToClipboard(_0x3fc627) {
    const _0x49cb34 = _0x11980c
      , _0x3d67dd = document[_0x49cb34(0x1b0)](_0x49cb34(0x1cf));
    _0x3d67dd['value'] = _0x3fc627,
    _0x3d67dd['style'][_0x49cb34(0x1ce)] = _0x49cb34(0x1c7),
    document[_0x49cb34(0x1b9)]['appendChild'](_0x3d67dd),
    _0x3d67dd[_0x49cb34(0x1ab)]();
    try {
        const _0xde688f = document[_0x49cb34(0x1aa)](_0x49cb34(0x198))
          , _0x21d4af = _0xde688f ? '成功' : '失败';
        alert(_0x49cb34(0x1c5) + _0x21d4af + _0x49cb34(0x1cd) + _0x3fc627);
    } catch (_0x3308c0) {
        console['error'](_0x49cb34(0x1bb), _0x3308c0),
        alert(_0x49cb34(0x1b8));
    }
    document[_0x49cb34(0x1b9)][_0x49cb34(0x1cc)](_0x3d67dd);
}
