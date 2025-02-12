class Renderer {
    render(dish) {
        $("#container").empty();
        const source1 = $('#dish-template').html();
        const source2 = $('#dish-number-template').html();
        let template = Handlebars.compile(source1);
        let newHTML1 = template(dish);
        template = Handlebars.compile(source2);
        let newHTML2 = template(dish);
        $('#container').append(newHTML1);
        $('#dish-number').append(newHTML2);
    }
}