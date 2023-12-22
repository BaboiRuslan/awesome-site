window.onload = function() {
  const hamburger = document.getElementById('hamburger');
  hamburger.onclick = function() {
    let topNav = document.getElementById('myTopnav');
    if (topNav.className === 'responsive') {
      topNav.className = '';
    } else {
      topNav.className = 'responsive';
    }
  }
};
