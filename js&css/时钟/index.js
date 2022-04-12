const numberDivs = document.querySelectorAll('#number div');
const numberSpans = document.querySelectorAll('#number span');

// 布置钟盘
for (let i = 0; i < numberDivs.length; i++) {
  numberDivs[i].style.transform = `rotate(${i * 30}deg)`;
}
// 纠正文字旋转偏移
for (let j = 0; j < numberSpans.length; j++) {
  numberSpans[j].style.transform = `rotate(${j * -30}deg)`;
}

// 渲染时钟
function render() {
  const oHoure = document.querySelector('#houre');
  const oMinute = document.querySelector('#minute');
  const oSecond = document.querySelector('#second');

  const nowTime = new Date();
  const nowHoure = nowTime.getHours();
  const nowMinute = nowTime.getMinutes();
  const nowSecond = nowTime.getSeconds();

  // 计算旋转度数
  const hourDeg =
    nowHoure * 30 +
    nowMinute * (360 / 12 / 60) +
    nowSecond * (360 / 12 / 60 / 60);
  const minuteDeg = nowMinute * (360 / 60) + nowSecond * (360 / 60 / 60);
  const secondDeg = nowSecond * (360 / 60);

  oHoure.style.transform = `rotate(${hourDeg}deg)`;
  oMinute.style.transform = `rotate(${minuteDeg}deg)`;
  oSecond.style.transform = `rotate(${secondDeg}deg)`;
}

render();

// 每隔1s进行一次渲染
setInterval(render, 1000);
