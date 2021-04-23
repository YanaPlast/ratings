const parent_original = document.querySelector('.otzyvy__columns');
const parent = document.querySelector('.otzyvy__top .content-container');
const item = document.querySelector('.otzyvy__more');

window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 979) {
        if(!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[4]);
            item.classList.add('done');
        }
    } else {
        if(item.classList.contains('done')) {
           parent_original.insertBefore(item, parent_original.children[1]);
           item.classList.remove('done');
        }
    }
}); 

if (document.documentElement.clientWidth < 979) {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 979) {
        if(!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[4]);
            item.classList.add('done');
        }
    } else {
        if(item.classList.contains('done')) {
           parent_original.insertBefore(item, parent_original.children[1]);
           item.classList.remove('done');
        }
    }

 };