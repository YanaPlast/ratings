// document.querySelector('.dropdown__button').addEventListener('click', function(evt){
//     evt.preventDefault();
//     document.querySelector('.dropdown__list').classList.toggle('dropdown__list_visible');
//     this.classList.add('dropdown__button_active');
// });

// // выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
// document.querySelectorAll('.dropdown__list-item').forEach(function(listItem){
//     listItem.addEventListener('click', function(e){
//         e.stopPropagation();
//         document.querySelector('.dropdown__button').innerText = this.innerText;
//         document.querySelector('.dropdown__button').focus();
//         document.querySelector('.dropdown__input-hidden').value = this.dataset.value;
//         document.querySelector('.dropdown__list').classList.remove('dropdown__list_visible');
//     })
// })

// // клик снаружи дропдауна закрывает его
// document.addEventListener('click', function(e){
//     console.log('Document Click');
//     if (e.target !== document.querySelector('.dropdown__button')) {
//         document.querySelector('.dropdown__list').classList.remove('dropdown__list_visible');
//         document.querySelector('.dropdown__button').classList.remove('dropdown__button_active');
//     }
// })

// //нажатие на таб или escape сворачивает список
// document.addEventListener('keydown', function(e){
//     if(e.key === 'Tab' || e.key === 'Escape') {
//         document.querySelector('.dropdown__list').classList.remove('dropdown__list_visible');
//         document.querySelector('.dropdown__button').classList.remove('dropdown__button_active');
//     }
// })
// - работающтй код без переменных

// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){

    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');


    // клик по кнопке - открыть выпадающее меню
    dropDownBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        dropDownList.classList.toggle('dropdown__list_visible');
    this.classList.add('dropdown__button_active');
});

// выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
dropDownListItems.forEach(function(listItem){
    listItem.addEventListener('click', function(e){
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list_visible');
    })
})

// клик снаружи дропдауна закрывает его
document.addEventListener('click', function(e){
    if (e.target !== dropDownBtn) {
        dropDownList.classList.remove('dropdown__list_visible');
        dropDownBtn.classList.remove('dropdown__button_active');
    }
})

//нажатие на таб или escape сворачивает список
document.addEventListener('keydown', function(e){
    if(e.key === 'Tab' || e.key === 'Escape') {
        dropDownList.classList.remove('dropdown__list_visible');
        dropDownBtn.classList.remove('dropdown__button_active');
    }
})

});

