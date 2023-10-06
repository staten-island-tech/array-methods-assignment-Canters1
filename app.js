const  foods = [
    {
        Foodtype: "Pizza",
        YumScale:  5,
        Ingredients: ["Tomato Sauce", "Cheese", "Dough", "Chicken"],
        Doghaseaten:true,

    },

    {
        Foodtype: "Sushi",
        YumScale:  5,
        Ingredients: ["Rice", "Seaweed", "Fish", ],
        Doghaseaten:false,
    },

    {
        Foodtype: "Pilmeni",
        YumScale:  4,
        Ingredients: ["Dough", "Meat", "Sour Cream?"],
        Doghaseaten:true,
    },
    {
        Foodtype: "Borscht",
        YumScale:  2,
        Ingredients: ["Beets", "Carrots", "Potatoes", "Water", "Cabbage", "Sour Cream?"],
        Doghaseaten:true,
    },

]

foods.forEach(
    (food) => console.log(food.Foodtype)
    )

yum=foods.forEach(
    (food) => console.log(Ingredient)
    )
console.log(yum)

foods.Ingredients.forEach(
    (Ingredient) => console.log(Ingredient)
    )

console.log(foods.filter((food) => food.YumScale > 4))