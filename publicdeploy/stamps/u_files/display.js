// DATE & TIME
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const d = new Date();
  let month = months[d.getMonth()];
  document.getElementById("date").innerHTML = month+" "+d.getDate()+". "+d.getFullYear();

// VERTBOX
const image_array = [
    '538','capelf','iox','trouble','heartdance','cranberry','dancemania','air','key103','capital','player','thorpe','blocker','catnamedoggy','datguy','capcities','lyric','dfg','galaxy','mtv','skyone','channel4','gwr','london2012','markanimates', 'milkywave','94nightshift','play.com','neue-flower','hykicnova','comical','thebox','wisebuddah','sachland','inaudible','ster','living','mp3','npo3fm','dixadon','win95','hmv','florida','hits','e4','cntoo'
];

// ads created by RM94, Allanbuzzy, Bluefrog, Blocker, CatNamedOggy, DatGuy, CapitalCities, Lyric, Block_618, ABCNet, Milkywave, Nova, ComicalAnimations, Sachland, Inaudible, Dixadon and Nevalster

function vertboxdisplay(){
    const random_index = Math.floor(Math.random() * image_array.length);
    const selected_image = image_array[random_index];
    document.getElementById('vertbox').src = `./assets/img/vertbox/${selected_image}.gif`;
    document.getElementById('vertbox').title = 'Want your image here?\nDM me on Discord for more info.'
    setTimeout(vertboxdisplay, 20000);
}
vertboxdisplay();

// DAY & NITE BG
var hour = new Date().getHours();
var background = document.querySelector("body");
// between 8 PM and 6 AM respectively
if (hour >= 20 || hour <= 6) {
    background.classList.add("night");
} else {
    background.classList.remove("night");
}

// STATUS.CAFE
fetch("https://status.cafe/users/rm94/status.json")
.then( r => r.json() )
.then( r => {
    if (!r.content.length) {
    document.getElementById("feed").innerHTML = "No status yet."
    return
    }
    document.getElementById("timeAgo").innerHTML = r.timeAgo;
    document.getElementById("feed").innerHTML = r.content;
})