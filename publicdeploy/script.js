/* banners template. dont forget comma
{
    image: 'name',
    url: 'https://example.com',
    title: 'tooltip!'
}
*/

/* SQUARE BANNER ON ASIDE R */
const squareBanners = [
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

/* RECTANGLE BANNER ON TOP */
const topBanners = [
    { 
        image: 'roblox',
        url: 'https://web.archive.org/web/20100309080934/http://www.roblox.com/',
    },
    { 
        image: 'goto',
    },
    { 
        image: 'N3O',
        url: 'http://n3onexus.neocities.org/',
    }
    // Add more top banners here
];

//bro used the Fisher-Yates algorithm to shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Separate queues for each banner type
let squareBannerQueue = [];
let topBannerQueue = [];

function getBannerFromQueue(queue, bannerArray) {
    // when queue over reshuffle
    if (queue.length === 0) {
        queue = shuffleArray([...bannerArray]); //new shuffle
    }
    return queue.pop(); //next banner in queue
}

// SQUARE BANNER DISPLAY
function squareBannersDisplay() {
    const selected_banner = getBannerFromQueue(squareBannerQueue, squareBanners);
    squareBannerQueue = squareBannerQueue.length === 0 ? shuffleArray([...squareBanners]) : squareBannerQueue;
    const selected = squareBannerQueue.pop();
    
    // updates img
    const bannerImg = document.getElementById('banner');
    if (bannerImg) {
        bannerImg.src = `./banners_sqr/${selected.image}.gif`;
    }

    // updates href link
    const bannerLink = document.getElementById('banner-link');
    if (bannerLink) {
        bannerLink.href = selected.url;
        bannerLink.target = '_blank';
    }
    
    setTimeout(squareBannersDisplay, 20000);
}

// TOP BANNER DISPLAY
function topBannersDisplay() {
    const selected_banner = getBannerFromQueue(topBannerQueue, topBanners);
    topBannerQueue = topBannerQueue.length === 0 ? shuffleArray([...topBanners]) : topBannerQueue;
    const selected = topBannerQueue.pop();
    
    // updates img - note: both the anchor and img have id="top_banner"
    const topBannerImg = document.querySelector('#top_banner > img');
    if (topBannerImg) {
        topBannerImg.src = `./banners_rec/${selected.image}.gif`;
    }

    // updates href link
    const topBannerLink = document.querySelector('a#top_banner');
    if (topBannerLink) {
        topBannerLink.href = selected.url;
        topBannerLink.target = '_blank';
    }
    
    setTimeout(topBannersDisplay, 20000);
}

// Start both banner cycles
squareBannersDisplay();
topBannersDisplay();