// 获取头部的元素
const core = document.querySelector('.core');
//添加滚动事件
window.addEventListener('scroll', function() {
	//获取滚动的距离
  const scrollY = window.scrollY;
  // 添加切换效果
  if (scrollY < 100) {
    core.style.transform = 'translateY(0)';
  } else {
    core.style.transform = 'translateY(-52px)';
  }
});