/* banners template. dont forget comma
{
    image: 'name',
    url: 'https://example.com',
    title: 'tooltip!'
}
*/

const banners = [
    { 
        image: 'rm94',
        url: 'https://rm94.neocities.org',
        title: 'Visit Retromaster94!'
    },
    { 
        image: 'aftv',
        url: 'https://www.youtube.com/watch?v=rw51ICGBEQw',
        title: 'scared & impaired. tonight at 8/7c'
    },
    { 
        image: 'clubpenguin',
        url: 'https://play.cplegacy.com/',
        title: 'Waddle On!'
    },
    { 
        image: 'poptropica',
        url: 'https://web.archive.org/web/20130517102622/http://www.poptropica.com/',
        title: 'I miss you Poptropica!'
    }
];

//bro used the Fisher-Yates algorithm to shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// queue
let bannerQueue = [];

function getBannerFromQueue() {
    // when queue over reshuffle
    if (bannerQueue.length === 0) {
        bannerQueue = shuffleArray([...banners]); //new shuffle
    }
    return bannerQueue.pop(); //next banner in queue
}

function bannersDisplay() {
    const selected_banner = getBannerFromQueue();
    
    // updates img
    const bannerImg = document.getElementById('banner');
    bannerImg.src = `./banners_sqr/${selected_banner.image}.gif`;
//    bannerImg.title = selected_banner.title;
//i dont want to have tooltip so just putting it in a note for now    

    // updates href link
    const bannerLink = document.getElementById('banner-link');
    if (bannerLink) {
        bannerLink.href = selected_banner.url;
        bannerLink.target = '_blank';
    }
    
    setTimeout(bannersDisplay, 20000);
}

bannersDisplay();