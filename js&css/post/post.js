let isSelected = false;
const box = document.querySelector('.box');
const select = document.querySelector('.select');
box.addEventListener('click', function() {
  isSelected = !isSelected;
  if (isSelected) {
    // 如果是选择，则添加一个选中的图标
    const img = document.createElement('img');
    img.src = 'https://style.youkeda.com/img/sandwich/check.png';
    img.style = 'width: 100%; height: 100%;';
    select.appendChild(img);
  } else {
    // 如果不是选择，则清空图标
    select.innerHTML = '';
  }
});
