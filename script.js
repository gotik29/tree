// Данные в формате JSON
const jsonData = {
  "services": [
    {
      "id": 1,
      "head": null,
      "name": "Проф.осмотр",
      "node": 0,
      "price": 100.0,
      "sorthead": 20
    },
    {
      "id": 2,
      "head": null,
      "name": "Хирургия",
      "node": 1,
      "price": 0.0,
      "sorthead": 10
    },
    {
      "id": 3,
      "head": 2,
      "name": "Удаление зубов",
      "node": 1,
      "price": 0.0,
      "sorthead": 10
    },
    {
      "id": 4,
      "head": 3,
      "name": "Удаление зуба",
      "node": 0,
      "price": 800.0,
      "sorthead": 10
    },
    {
      "id": 5,
      "head": 3,
      "name": "Удаление 8ого зуба",
      "node": 0,
      "price": 1000.0,
      "sorthead": 30
    },
    {
      "id": 6,
      "head": 3,
      "name": "Удаление осколка зуба",
      "node": 0,
      "price": 2000.0,
      "sorthead": 20
    },
    {
      "id": 7,
      "head": 2,
      "name": "Хирургические вмешательство",
      "node": 0,
      "price": 200.0,
      "sorthead": 10
    },
    {
      "id": 8,
      "head": 2,
      "name": "Имплантация зубов",
      "node": 1,
      "price": 0.0,
      "sorthead": 20
    },
    {
      "id": 9,
      "head": 8,
      "name": "Коронка",
      "node": 0,
      "price": 3000.0,
      "sorthead": 10
    },
    {
      "id": 10,
      "head": 8,
      "name": "Слепок челюсти",
      "node": 0,
      "price": 500.0,
      "sorthead": 20
    }
  ]
}


const services = jsonData.services;
const treeContainer = document.getElementById('tree');


function buildTree(parentId, parentNode) {
  const children = services.filter(service => service.head === parentId);
  if (children.length === 0) return;

  const ul = document.createElement('ul');
  parentNode.appendChild(ul);

  // Сортируем дочерние элементы по sorthead
  children.sort((a, b) => a.sorthead - b.sorthead);

  children.forEach(child => {
    const li = document.createElement('li');
    li.textContent = `${child.name}`;
    ul.appendChild(li);
    if (child.node === 1) {
      li.classList.add('tree-node');
      buildTree(child.id, li);
    }
  });
}


buildTree(null, treeContainer);
