const locationSTORE = [
    {
        Name: "Sole Intensity Dance Academy",
        ImageURL: "https://www.soleintensitydance.com/uploads/1/1/9/1/119177682/studio4-min-min_orig.jpg",
        Reviews: [
            {
                Name: "Happy Dancer",
                Review: "So glad to have found a place to work on my new routine. It's nice to practice uninterrupted"
            },
            {
                Name: "Rythmic Gymnast",
                Review: "Thank goodness I can practice catching that dumb ring without anyone watching!"
            }
        ],
        Description: "A small studio in North Vegas. Full-wall mirror, a heavy-duty floor suitable for tap and equiptment such as ballet barres and yoga balls",
        Location: {
            Latitude: "36.276530",
            Longitude: "-115.179710",
        },
        Category: "performing",
        Rate: "$27/hr"
    },
    {Name: "Sin City Stages",
        ImageURL: "http://sincitystages.com/wp-content/uploads/2018/03/sets16-1600x1067.jpg",
        Reviews: [
            {
                Name: "Starving artist",
                Review: "I love this place because I can sit in the green room and pretend like I have a job"
            },
        ],
        Description: "Includes stage lighting, access to props, a space green room, makeup area, break room, bathrooms, wifi and 5 parking spaces",
        Location: {
            Latitude: "36.1699",
            Longitude: "-115.1398",
        },
        Category: "performing",
        Rate: "$800/ 8 hr day"},
    {
        Name: "Vegas Photo Studio Rentals",
        ImageURL: "http://vegasphotostudiorentals.com/wp-content/uploads/2012/03/bg_NeAhdcZO3UmgNVab.jpg",
        Reviews: [
            {
                Name: "Annoyed User",
                Review: "This would be a great place except that the website is really horrible. You should definitely book through artists connect"
            }
        ],
        Description: "The studio offers three main shooting areas to accommodate commercial clients: A 360 sq ft cyclorama / infinity cove, a 16’ wide x 10’ tall chroma key video green screen, and a 12 x 8 ft rolling paint-able wall for room arrangements and scene set ups.",
        Location: {
            Latitude: "36.13192",
            Longitude: "-115.192420",
        },
        Category: "digital",
        Rate: "$120/2hrs",
    },
    {
        Name: "Pincushion – A Sewing Shop",
        ImageURL: "https://static.wixstatic.com/media/591c392b8ecd50d325e1041d0411bc94.jpg/v1/fill/w_1289,h_678,al_c,q_85/Sewing%20Studio.webp",
        Reviews: [
            {
                Name: "Shannon",
                Review: "I had a time constraint of only a few days to get my maid of honor dress altered and she managed to finish even an extra day early! She was so easy to communicate with and extremely reasonably priced! Thank you so so much!"
            }
        ],
        Description: "Pincushion is a creative work space where we offer Alterations Services, Sewing Classes, Artistic Workshops, and Custom Creations. You can find us in the heart of the Las Vegas Arts District. Contact us today to book your alterations appointment or to reserve your spot in one of our classes!",
        Location: {
            Latitude: "36.13192",
            Longitude: "-115.192420",
        },
        Category: "crafts",
        Rate: "Work Space Rental - $10/hour",
    },
    {
        Name: "Kiln",
        ImageURL: "https://c1.staticflickr.com/1/156/367921764_1b65d05fbf_b.jpg",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "fine",
        Rate: "",
    },
    {
        Name: "Pottery Wheel",
        ImageURL: "https://cdn.dick-blick.com/items/300/24/30024-0000-4-2ww-m.jpg",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "fine",
        Rate: "",
    },
    {
        Name: "Embroidery Kit",
        ImageURL: "https://images.pexels.com/photos/1232131/pexels-photo-1232131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "fabrication",
        Rate: "",
    },
    {
        Name: "Mic",
        ImageURL: "https://images.pexels.com/photos/9137/night-vintage-music-bokeh.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "performing",
        Rate: "",
    },
    {
        Name: "Stage",
        ImageURL: "http://www.bu.edu/tsai/files/2009/05/soft-goods-stage.JPG",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "performing",
        Rate: "",
    },
    {
        Name: "Soundboard",
        ImageURL: "https://images.pexels.com/photos/159206/mixing-table-mixing-music-musician-159206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "performing",
        Rate: "",
    },
    {
        Name: "Photo Studio",
        ImageURL: "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "digital",
        Rate: "",
    },
    {
        Name: "Large Format Scanner",
        ImageURL: "https://csa.canon.com/online/wcm/connect/csa/e75ce05b-41ae-42f8-8e96-fb58dbf3baf8/1/scanner-solutions-sm.jpg?MOD=AJPERES&CVID=",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "digital",
        Rate: "",
    },
    {
        Name: "Glass Studio",
        ImageURL: "https://s3.amazonaws.com/architecture-org/files/modules/ignite-glass-studios-hannah-halleckson-04.jpg",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "fine",
        Rate: "",
    },
    {
        Name: "Dance Studio",
        ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zNPLgpIA3yp-Sz5WsbMYfS0ql2efttc38xTby2RoyGtKRN6v",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "performing",
        Rate: "",
    },
    {
        Name: "Studio Lights",
        ImageURL: "https://images.pexels.com/photos/53265/pexels-photo-53265.jpeg?cs=srgb&dl=art-backdrop-bright-53265.jpg&fm=jpg",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "digital",
        Rate: "",
    },
    {
        Name: "Keyboard",
        ImageURL: "https://images.pexels.com/photos/164951/pexels-photo-164951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "music",
        Rate: "",
    },
    {
        Name: "Loom",
        ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQiV4T0QWH_o8v8gXT7DyCkoEDopRlL8YjuLNfALnT6x56CYTfQ",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "fabrication",
        Rate: "",
    },
    {
        Name: "Large Format Printer",
        ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplaL_IVQmuLzwHe-biPGU9yz6_1_K5vw-S2V0sPfrdsag2tGhag",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "digital",
        Rate: "",
    },
    {
        Name: "Percussion",
        ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIWgC1B1NPox-KjphyIJOX-EpAWfcZNBsiNEz5UroeTGm2XdEbg",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "music",
        Rate: "",
    },
    {
        Name: "Drums",
        ImageURL: "https://images.pexels.com/photos/60636/drums-musical-instrument-music-sound-60636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Reviews: [],
        Description: "",
        Location: {},
        Category: "music",
        Rate: "",
    },
]