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

    // если в инпут начать вводить значение откроется список вариантов
    dropDownBtn.addEventListener('keyup', function(evt){
        evt.preventDefault();
        dropDownList.classList.add('dropdown__list_visible');
    this.classList.add('dropdown__button_active'); 
});

// выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
dropDownListItems.forEach(function(listItem){
    listItem.addEventListener('click', function(e){
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.value = this.innerText;
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


// фильтрация списка регионов по первым буквам при вводе в инпут

/* var regionInput = document.getElementById("regionInput");

function regionFilter() {
    var filter, ul, li, a, i, txtValue;
    filter = regionInput.value.toUpperCase();
    ul = document.getElementById("regionList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().startsWith(filter)) {
            li[i].style.display = "";
            } else {
            li[i].style.display = "none";
            }
    }
}

regionInput.onkeyup = regionFilter; */


// фильтрация списка регионов по первым буквам при вводе в инпут

 function regionFilter(item) {
        var filter, parentOfUl, ul, li, a, i, txtValue;
        filter = item.value.toUpperCase();
        console.log(filter);
        parentOfUl = item.parentNode;
        console.log(filter);
        ul = parentOfUl.querySelector('.region-list')
        li = ul.getElementsByTagName("li");

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().startsWith(filter)) {
                li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
        }
    }

    // навешиваем событие на каждый инпут - фильтровать названия регионов при вводе в инпут


/*     bur = document.querySelector('#byuroRegion');
    bur.addEventListener("keyup", function(){
         regionFilter(bur);
    });  

    pov = document.querySelector('#poverenRegion');
    pov.addEventListener("keyup", function(){
         regionFilter(pov);
    });  

    both = document.querySelector('#bothRegion');
    both.addEventListener("keyup", function(){
         regionFilter(both);
    });   */



var regionInputs = document.querySelectorAll('.region-input'),
    index, regionInput;


for (index = 0; index < regionInputs.length; index++) {
    regionInput = regionInputs[index];
    regionInput.addEventListener('keyup', regionFilterInsertParam)
}

function regionFilterInsertParam() {
    regionFilter(this); 
}


