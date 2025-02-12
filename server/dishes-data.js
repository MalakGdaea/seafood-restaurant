const dishes = [
    {
        id: "01",
        name: "Lobster Roll",
        type: "Sandwich",
        ingredients: "lobster meat, toasted bun, mayo, lemon, celery, chives, lettuce",
        price: "$18",
        calories: 500,
        carbo: 30.0,
        protein: 35.0,
        fat: 22.0,
        image: "lobster-roll.jpg"
    },
    {
        id: "02",
        name: "Grilled Fish",
        type: "Salad",
        ingredients: "badger flame beets, baby carrots, tomatoes, mango salsa, red onion, grilled fish, avocado, mixed greens, pepper",
        price: "$12",
        calories: 320,
        carbo: 33.5,
        protein: 6.3,
        fat: 4.2,
        image: "grilled-fish.jpg",
    },
    {
        id: "03",
        name: "Shrimp Tacos",
        type: "Taco",
        ingredients: "shrimp, corn tortillas, shredded cabbage, avocado, cilantro, lime, mango salsa, sour cream, jalapenos",
        price: "$10",
        calories: 450,
        carbo: 40.0,
        protein: 25.0,
        fat: 15.0,
        image: "shrimp-tacos.jpg"
    },
    {
        id: "04",
        name: "Baked Cod with Garlic and Herb",
        type: "Main Course",
        ingredients: "cod fillets, garlic, parsley, thyme, lemon, olive oil, salt, pepper",
        price: "$13",
        calories: 280,
        carbo: 12.0,
        protein: 24.0,
        fat: 14.0,
        image: "baked-cod.png"
    },
    {
        id: "05",
        name: "Tuna Poke Bowl",
        type: "Bowl",
        ingredients: "tuna, rice, avocado, edamame, cucumber, seaweed salad, soy sauce, sesame seeds, green onions",
        price: "$14",
        calories: 400,
        carbo: 45.0,
        protein: 30.0,
        fat: 12.0,
        image: "tuna-poke-bowl.jpg"
    }
];

const getDishesData = () => {
    return dishes;
};

module.exports = getDishesData;