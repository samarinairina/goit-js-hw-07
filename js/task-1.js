const category = document.querySelectorAll('li.item');
console.log(category.length);
category.forEach(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent} Количество елементов: ${element.querySelectorAll('li').length}`);
    
});