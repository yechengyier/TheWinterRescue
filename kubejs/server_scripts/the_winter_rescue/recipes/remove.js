onEvent('recipes', (event) => {
    // Some examples
    // event.remove({ type: 'create:cutting', input: '#minecraft:logs' });
    // event.remove({ type: 'immersiveengineering:sawmill', input: '#minecraft:logs' });
    //
    // event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    // event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });
    //
    // event.remove({ type: 'minecraft:smelting', input: '#forge:ores' });
    // event.remove({ type: 'minecraft:blasting', input: '#forge:ores' });
    //
    // event.remove({ type: 'minecraft:smelting', input: '#forge:dusts' });
    // event.remove({ type: 'minecraft:blasting', input: '#forge:dusts' });
    //
    // event.remove({ type: 'industrialforegoing:fluid_extractor' });
    //
    // event.remove({ mod: 'theoneprobe' });

    event.remove({ type: 'rankine:crucible', output: '#forge:ingots/steel'})
    event.remove({ type: 'rankine:alloying', output: '#forge:ingots/steel'})
    event.remove({ input: 'notreepunching:plant_string'})
    event.remove({ input: 'electrodynamics:coalcoke'})
    event.remove({ type: 'rankine:beehive_oven'})
    event.remove({ type: 'electrodynamics:energized_alloyer_recipe'})

    disabledItems.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });
});