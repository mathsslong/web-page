let data = [
  {
    title: '新建',
    icon: 'https://style.youkeda.com/img/pizza/context-menu/new.png',
    children: [
      {
        title: '文件',
        icon: 'https://style.youkeda.com/img/pizza/context-menu/new_file.png'
      },
      {
        title: '文件夹',
        icon: 'https://style.youkeda.com/img/pizza/context-menu/new_folder.png'
      }
    ]
  },
  {
    title: '导入',
    icon: 'https://style.youkeda.com/img/pizza/context-menu/import.png'
  },
  {
    title: '重命名',
    icon: 'https://style.youkeda.com/img/pizza/context-menu/rename.png'
  },
  {
    title: '删除',
    icon: 'https://style.youkeda.com/img/pizza/context-menu/delete.png'
  }
];

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