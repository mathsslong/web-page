function createItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `
  <div class="left">
    <img
      class="icon"
      src="${item.icon}"
    />
    <span>${item.title}</span>
  </div>
    ${
      item.children && item.children.length > 0
        ? `
    <img
      class="more"
      src="https://style.youkeda.com/img/pizza/context-menu/more.png"
    />`
        : ''
    }`;
  return li;
}
const firstMenuBox = document.querySelector('.first');
const secondMenuBox = document.querySelector('.second');
firstMenuBox.innerHTML = '';
secondMenuBox.innerHTML = '';
fetch(
  'https://www.fastmock.site/mock/b73a1b9229212a9a3749e046b1e70285/f4/f4-11-5-10'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
  const li = createItem(data[i]);
  firstMenuBox.appendChild(li);
  li.addEventListener('mouseover', function() {
    if (data[i].children && data[i].children.length > 0) {
      secondMenuBox.innerHTML = '';
      secondMenuBox.style.display = 'block';
      for (let j = 0; j < data[i].children.length; j++) {
        secondMenuBox.appendChild(createItem(data[i].children[j]));
      }
    } else {
      secondMenuBox.style.display = 'none';
    }
  });
}
  });