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
    }
];


//cycle function
function bannersDisplay() {
    const random_index = Math.floor(Math.random() * banners.length);
    const selected_banner = banners[random_index];
    
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
    
    setTimeout(bannersDisplay, 10000);
}

bannersDisplay();