onEvent('recipes', (event) => {
    const recipes = [
        // {
        //     input: '#forge:dusts/hop_graphite',
        //     output: 'immersiveengineering:ingot_hop_graphite',
        //     xp: 0.5,
        //     id: 'immersiveengineering:ingot_hop_graphite_from_blasting'
        // }
    ];
    recipes.forEach((recipe) => {
        const re = event.blasting(recipe.output, recipe.input);

        if (recipe.xp) {
            re.xp(recipe.xp);
        }

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
