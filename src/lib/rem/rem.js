// rem 适配
const baseSize = 100;
function setRem() {
  const scale = document.documentElement.clientWidth / 750;
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置rem
window.onresize = function() {
  setRem();
};
