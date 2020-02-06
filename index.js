document.querySelectorAll('.menu__items').forEach((element) => {
  element.addEventListener('click', (e) => {
    let id = +e.currentTarget.getAttribute('id');
    setStyle('menu__picture',id);
    setStyle('menu__items',id);
    setStyle('menu__description',id)
  })
})

document.querySelectorAll('.input-list__items_style').forEach((element) => {
  element.addEventListener('click', (e) => {
    let id = +e.currentTarget.getAttribute('id');
    setStyle('input-list__items_style',id);
  })
})

document.querySelectorAll('.input-list__items_type').forEach((element) => {
  element.addEventListener('click', (e) => {
    let id = +e.currentTarget.getAttribute('id');
    setStyle('input-list__items_type',id);
  })
})


const setStyle = (nameClass,id) =>{
  document.querySelectorAll(`.${nameClass}`).forEach((el, index) => {
    el.classList.remove(`${nameClass}_active`);
    if (id == index) {
      el.classList.add(`${nameClass}_active`);
    }
  })
}

