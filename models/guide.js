const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guideSchema = new Schema({
    userId: String,
    name: String,
    type: {
        type: String,
        enum:['General', 'Lane', 'Champion'],
    },
    role: {
        type: String,
        enum: ['Top', 'Jungle', 'Mid', 'Bot', 'Sup'],
    },
    champion: {
        type: String,
        enum:["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", 
              "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", 
              "Darius", "Diana", "Draven", "Dr. Mundo", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", 
              "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", 
              "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", 
              "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", 
              "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", 
              "Maokai", "Master Yi", "Miss Fortune", "Wukong", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", 
              "Neeko", "Nidalee", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", 
              "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", 
              "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", 
              "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", 
              "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", 
              "Veigar", "Vel'Koz", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Xayah", "Xerath", "Xin Zhao", "Yasuo", 
              "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"],
    },
    items: String,
    runes: String,
    abilities: String,
}, {
    timestamps: true
});

guideSchema.pre('save', function (next) {
    this.name;
    next();
});

module.exports = mongoose.model('Guide', guideSchema);