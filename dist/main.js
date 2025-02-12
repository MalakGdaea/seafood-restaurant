renderer = new Renderer();

let dishes = [];
let currentDish;
let totalDishes;

const getDishes = function () {
    $.get('/dishes').then(function (data) {
        dishes = data;
        totalDishes = dishes.length;
        getTheNextDish();
    });
}

const getTheNextDish = function () {
    if (dishes.length != 0) {
        currentDish = dishes.shift();
        dishes.push(currentDish);
        displayDishes();
    }
}

const displayDishes = function () {
    $("#container").empty();
    $("#dish-number").empty();
    if (dishes.length != 0) {
        let dish = { ...currentDish, total: totalDishes, nextDish: dishes[0].name };
        renderer.render(dish);
    }
}

getDishes();

$(document).on('click', '.next', function () {
    getTheNextDish();
});


