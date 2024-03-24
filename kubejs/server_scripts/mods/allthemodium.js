ServerEvents.recipes(factory => {
    factory.remove({ mod:'allthemodium'})
    factory.shaped('allthemodium:teleport_pad', ['QWQ', 'WDW', 'QWQ'], { Q: 'allthemodium:allthemodium_ingot', W: 'mekanism:teleportation_core', D: 'create:brass_casing'})
    factory.smelting('allthemodium:allthemodium_ingot', 'allthemodium:raw_allthemodium')
    factory.blasting('allthemodium:allthemodium_ingot', 'allthemodium:raw_allthemodium')
    factory.shaped('allthemodium:allthemodium_block', ['BBB', 'BBB', 'BBB'], {B: 'allthemodium:allthemodium_ingot'})
    factory.smelting('allthemodium:vibranium_ingot', 'allthemodium:raw_vibranium')
    factory.blasting('allthemodium:vibranium_ingot', 'allthemodium:raw_vibranium')
    factory.shaped('allthemodium:vibranium_block', ['BBB', 'BBB', 'BBB'], {B: 'allthemodium:vibranium_ingot'})
    factory.smelting('allthemodium:unobtainium_ingot', 'allthemodium:raw_unobtainium')
    factory.blasting('allthemodium:unobtainium_ingot', 'allthemodium:raw_unobtainium')
    factory.shaped('allthemodium:unobtainium_block', ['BBB', 'BBB', 'BBB'], {B: 'allthemodium:unobtainium_ingot'})
})

console.log('Allthemodium.js loaded')