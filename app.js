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
        alt: 'Destiny 2 Guardians unleash their power in a dazzling clash against Darkness'
    }
]

//thumbnail

function createThumbnails() {

    images.forEach(function(image, index) {
        let imageElement = document.createElement('img');
        console.log('current image is', image);
        imageElement.src = image.src;
        imageElement.alt = image.alt;
        imageElement.addEventListener('click', function() {
            console.log(image)
            createBigImage(image)
        })
        thumbnails.appendChild(imageElement)
    })
}

createThumbnails()

//big images

function createBigImage(imgDetails) {
    displayContainer.innerHTML = ''

const bigImage = document.createElement('img')

    bigImage.src =  imgDetails.src
    bigImage.alt = imgDetails.alt

    displayContainer.appendChild(bigImage)
}

//buttons

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

let picture = 0;

createBigImage(images[picture]);

function nextImage() {
        picture = picture + 1;
        if (picture === images.length) {
            picture = 0;
        }
        createBigImage(images[picture]);
    }

function prevImage() {
    picture = picture - 1;
    if (picture < 0) {
        picture = images.length - 1;
    }
    createBigImage(images[picture]);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

