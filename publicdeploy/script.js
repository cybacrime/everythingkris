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
        title: 'visit retromaster94!'
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
        image: 'ximbo',
        url: 'https://www.ximbo.land/',
        title: 'A strange place with awesome people!'
    }
];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create a queue to track banner order
let bannerQueue = [];

function getBannerFromQueue() {
    // If queue is empty, refill it with a new shuffled order
    if (bannerQueue.length === 0) {
        bannerQueue = shuffleArray([...banners]); // Create new shuffled copy
    }
    return bannerQueue.pop(); // Get next banner from queue
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