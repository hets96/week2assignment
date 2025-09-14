const thumbnails = document.getElementById('thumbnails')
const displayContainer = document.getElementById('displayContainer')

const images = [
    {
        src: './images/destiny1.jpg',
        alt: 'The ominous arrival of The Black Fleet'
    },
    {
        src: './images/destiny2.jpg',
        alt: 'A beautiful fleeting memory of Mercurys past as envisioned in the Infinite Forest'
    },
    {
        src: './images/destiny3.jpg',
        alt: 'A Titan wearing the Thunderhead Armor Set and in combat'
    },
    {
        src: './images/destiny4.jpg',
        alt: 'A photo of the Witness, a powerful antagonist'
    },
    {
        src: './images/destiny5.jpg',
        alt: 'A guardian standing beneath the iconic Tower Tree'
    },
    {
        src: './images/destiny6.jpg',
        alt: 'The vibrant and mystical landscapes of The Landing within The Pale Heart'
    },
    {
        src: './images/destiny7.jpg',
        alt: 'The ethereal and geometrically intricate Verity encounter room from the raid: Salvantions Edge'
    },
    {
        src: './images/destiny8.jpg',
        alt: 'A Destiny 2 Guardian unleashes their power in a dazzling clash against the Cabal enemy'
    }
]

let picture = 0;

function clearBox(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// thumbnails

function createThumbnails() {
    clearBox(thumbnails);

    images.forEach(function(image, index) {
        let destinyPic = document.createElement('img');
        console.log('current image is', image);
        destinyPic.src = image.src;
        destinyPic.alt = image.alt;

        destinyPic.addEventListener('click', function() {
            picture = index;
            console.log(image);
            createBigImage(image);
            scrollThumbnails();
        });
        thumbnails.appendChild(destinyPic)
    });
    scrollThumbnails();
}

createThumbnails();

// ARIA

displayContainer.setAttribute('aria-live', 'polite');
displayContainer.setAttribute('aria-atomic', 'true');

// big images

function createBigImage(imgDetails) {
    clearBox(displayContainer);
    let bigImage = document.createElement('img');
    bigImage.src =  imgDetails.src;
    bigImage.alt = imgDetails.alt;

    displayContainer.appendChild(bigImage);

}

createBigImage(images[picture]);

// scroll

function scrollThumbnails() {
    let allPics = thumbnails.querySelectorAll('img');
    let presentPic = allPics[picture];
    if (presentPic) {
        presentPic.scrollIntoView({
            behaviour: 'smooth',
            inline: 'center'
        });
    }
}


// screen buttons

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

function nextImage() {
        picture = picture + 1;
        if (picture >= images.length) {
            picture = 0;
        }
        createBigImage(images[picture]);
        scrollThumbnails();
    }

function prevImage() {
    picture = picture - 1;
    if (picture < 0) {
        picture = images.length - 1;
    }
    createBigImage(images[picture]);
    scrollThumbnails();
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// change with left/right keys

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
});

