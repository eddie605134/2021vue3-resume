const baseSize = 16;

function setRem() {
  const salepro = document.documentElement.clientWidth / 1280;

  document.documentElement.style.fontSize = (baseSize * Math.min(salepro, 2)) + 'px';
}

setRem();
window.onresize = function () {
 setRem();
}