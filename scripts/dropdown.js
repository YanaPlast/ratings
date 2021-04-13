document.querySelector('.dropdown__button').addEventListener('click', function(evt){
    evt.preventDefault();
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_visible');
    this.classList.add('dropdown__button_active');
});

// выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
document.querySelectorAll('.dropdown__list-item').forEach(function(listItem){
    listItem.addEventListener('click', function(e){
        e.stopPropagation();
        document.querySelector('.dropdown__button').innerText = this.innerText;
        document.querySelector('.dropdown__button').focus();
        document.querySelector('.dropdown__input-hidden').value = this.dataset.value;
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_visible');
    })
})

// клик снаружи дропдауна закрывает его
document.addEventListener('click', function(e){
    console.log('Document Click');
    if (e.target !== document.querySelector('.dropdown__button')) {
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_visible');
        document.querySelector('.dropdown__button').classList.remove('dropdown__button_active');
    }
})

//нажатие на таб или escape сворачивает список
document.addEventListener('keydown', function(e){
    if(e.key === 'Tab' || e.key === 'Escape') {
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_visible');
        document.querySelector('.dropdown__button').classList.remove('dropdown__button_active');
    }
})