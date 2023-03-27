const dishes = document.querySelectorAll('.dish');

function categoryClickHandle(e) {
  let categoryName = e.dataset.id;
  if (categoryName == 'all') {
    dishes.forEach(function(dish) {
      dish.classList.remove('hide');
    });
  } else {
    dishes.forEach(function(dish) {
      if(categoryName === dish.dataset.category ) {
        dish.classList.remove('hide')
      }else {
        dish.classList.add('hide')
      }
    });
  }
}