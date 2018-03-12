const path = require('path');
const fs = require('fs');

let chirps = [
    {
        author: "Doug Dimmadome",
        chirp: "Wow Chirpr is amazing!"
    },
    {
        author: "Trey Parker",
        chirp: "Steel Beams can't melt Dank Memes"
    },
    {
        author: "You're Mom",
        chirp: "I think I left the oven on at home! Can someone give me an update. lol"
    },
    {
        author: "Superman",
        chirp: "According to all known laws of aviation, there is no way a bee should be able to fly."
    },
    {
        author: "Aerith",
        chirp: "Prepare for trouble, and make it double"
    }
]

fs.writeFile("chirps.json", JSON.stringify(chirps), err => {
    if (err) console.log(err);
});

fs.readFile("chirps.json", (err, data) => {
    if (err) console.log(err);
    console.log(data.toString());
});