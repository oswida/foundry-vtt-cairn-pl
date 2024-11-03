export const registerSettings = () => {
    game.settings.register('cairn-pl', 'override-generator', {
        name: "Polski generator",// game.i18n.localize("LB.Settings.BasicRules.Label"),
        default: false,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: "Nadpisz generator tak, aby generował aktorów w języku polskim", //game.i18n.localize("LB.Settings.BasicRules.Hint"),
        requiresReload: true,
        restricted: true
    });
}