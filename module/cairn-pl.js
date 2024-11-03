import { registerSettings } from "./settings.js";

Hooks.once('init', () => {
    registerSettings();
});

Hooks.once('ready', async () => {
    const override = await game.settings.get("cairn-pl", "override-generator");
    if (override) {
        CONFIG.Cairn.characterGenerator = {
            ability: "3d6",
            hitProtection: "1d6",
            gold: "3d6",
            name: {
                text: "{name} {surname}",
                items: {
                    name: "cairn.character-creation-tables-srd;Names",
                    surname: "cairn.character-traits;Surnames"
                }
            },
            background: "cairn-pl.cairn-pl-tabele;Przeszłość",
            startingItems: [
                "cairn-pl.cairn-pl-items;Racje żywnościowe;1",
                "cairn-pl.cairn-pl-items;Pochodnia;1"
            ],
            startingGear: [
                "cairn-pl.cairn-pl-tabele;Gen - Pancerz",
                "cairn-pl.cairn-pl-tabele;Gen - Helm - Tarcza",
                "cairn-pl.cairn-pl-tabele;Gen - Broń",
                "cairn-pl.cairn-pl-tabele;Gen - Sprzet",
                "cairn-pl.cairn-pl-tabele;Gen - Narzedzia",
                "cairn-pl.cairn-pl-tabele;Gen - Drobiazgi",
                "cairn-pl.cairn-pl-tabele;Gen - Bonus"
            ],
            biography: {
                text: "<ul><li>Budowa <strong>{physique}</strong>, skóra <strong>{skin}</strong>, włosy <strong>{hair}</strong> i <strong>{face}</strong> twarz</li><li>Mowa <strong>{speech}</strong> a ubranie <strong>{clothing}</strong></li><li>Cnota: <strong>{vice}</strong>, Wada: <strong>{virtue}</strong></li><li>Reputacja: <strong>{reputation}</strong></li><li>Nieszczęście: <strong>{misfortune}</strong></li><li>Wiek: <strong>{age}</strong> lat</li></ul>",
                age: "2d20 + 10",
                items: {
                    physique: "cairn-pl.cairn-pl-tabele;Budowa",
                    skin: "cairn-pl.cairn-pl-tabele;Skóra",
                    hair: "cairn-pl.cairn-pl-tabele;Włosy",
                    face: "cairn-pl.cairn-pl-tabele;Twarz",
                    speech: "cairn-pl.cairn-pl-tabele;Mowa",
                    clothing: "cairn-pl.cairn-pl-tabele;Ubranie",
                    vice: "cairn-pl.cairn-pl-tabele;Wada",
                    virtue: "cairn-pl.cairn-pl-tabele;Cnota",
                    misfortune: "cairn-pl.cairn-pl-tabele;Nieszczęście",
                    reputation: "cairn-pl.cairn-pl-tabele;Reputacja"
                }
            }
        };
    }
});



