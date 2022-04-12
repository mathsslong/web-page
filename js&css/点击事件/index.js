const isClict = false;
//获取所有img标签

var imgObjs = document.querySelector('.box').childNodes;

//遍历循环所有img对象


for(let i = 0;i<imgObjs.length;i++){
imgObjs[i].addEventListener("click", function () {
  // 点击事件
  
  if (!isClict) {
    document.body.style.backgroundImage = "url("+this.src+")";
  }
});

}