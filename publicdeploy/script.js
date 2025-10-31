/* additions template. dont forget comma

{
    image: 'name',
    url: 'https://example.com',
    title: 'tooltip!'
}
    */

const additions = [
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
function additionsdisplay() {
    const random_index = Math.floor(Math.random() * additions.length);
    const selected_addition = additions[random_index];
    
    // updates img
    const additionImg = document.getElementById('addition');
    additionImg.src = `./additions_square/${selected_addition.image}.gif`;
//    additionImg.title = selected_addition.title;
//i dont want to have tooltip so just putting it in a note for now    

    // updates href link
    const additionLink = document.getElementById('addition-link');
    if (additionLink) {
        additionLink.href = selected_addition.url;
        additionLink.target = '_blank';
    }
    
    setTimeout(additionsdisplay, 10000);
}

additionsdisplay();