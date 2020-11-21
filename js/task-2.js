const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listRef = document.querySelector('#ingredients');

const getlistMarkup = function (arr) {
    for (const array of arr) {
        const liRef = document.createElement('li');
        listRef.appendChild(liRef)
        // console.log(listRef.appendChild(liRef))
    
        liRef.textContent = `${array}`;
    }
    return liRef
}

getlistMarkup(ingredients);
console.log(listRef)