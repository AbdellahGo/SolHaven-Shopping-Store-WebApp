import {
    banner1,
    banner2,
    banner3,
    category1, category2, category3, category4, category5, category6, category7, category8,
    chooseIcon1,
    chooseIcon2,
    chooseIcon3,
    chooseIcon4,
    chooseUs1,
    chooseUs2,
    chooseUs3,
    client1,
    client2,
    client3,
    contactBigBg1,
    contactBigBg2,
    contactBigBg3,
    contactBigBg4,
    facebook,
    featureIcon1,
    featureIcon2,
    featureIcon3,
    featureIcon4,
    featureIcon5,
    locationBg1,
    sliderBg1, sliderBg2, sliderBg3,
    step1,
    step2,
    step3,
    tiktok,
    twitter,


} from "../assets"


export const navBarData = {
    links1: [
        {
            id: 1,
            title: 'Home',
            link: '/',
        },
        {
            id: 2,
            title: 'Shop',
            link: 'shop',
        },
        {
            id: 3,
            title: 'Blog',
            link: 'blog',
        },
        {
            id: 4,
            title: 'Pages',
            link: 'about',
            otherLinks: [
                {
                    id: 1,
                    title: 'Shope Location',
                    link: 'shop-location'
                },
                {
                    id: 2,
                    title: 'FAQs',
                    link: 'faq'
                },
                {
                    id: 3,
                    title: 'Checkout',
                    link: 'checkout'
                },
                {
                    id: 4,
                    title: 'Cart',
                    link: 'cart'
                },
                {
                    id: 5,
                    title: 'Compare',
                    link: 'compare'
                },
                {
                    id: 6,
                    title: 'Wishlist',
                    link: 'wishlist'
                },
                {
                    id: 7,
                    title: 'Sign In',
                    link: 'signin'
                },
            ]
        },
        {
            id: 5,
            title: 'About Us',
            link: 'about',
        },
        {
            id: 6,
            title: 'Contact Us',
            link: 'contact',
        },
    ],
    links2: [
        {
            id: 1,
            type: 'button',
            color: 'bg-gray-3',
            link: 'search'
        },
        {
            id: 2,
            type: 'link',
            color: 'bg-gray-4',
            link: 'signin'
        },
        {
            id: 3,
            type: 'link',
            color: 'bg-gray-5',
            link: 'wishlist'

        },
        {
            id: 5,
            type: 'button',
            color: 'bg-gray-6',
            link: 'cart'
        },
    ]

}

export const sideMenuData = {
    switchLinks: [
        {
            id: 1,
            text: 'menu',
        },
        {
            id: 2,
            text: 'categories',
        },
    ],
    menuLinks: [
        {
            id: 1,
            title: 'Home',
            link: '/',
        },
        {
            id: 2,
            title: 'Shop',
            link: 'shop',
        },
        {
            id: 3,
            title: 'Blog',
            link: 'blog',
        },
        {
            id: 4,
            title: 'Pages',
            link: 'about',
            otherLinks: [
                {
                    id: 1,
                    title: 'Shope Location',
                    link: 'shop-location'
                },
                {
                    id: 2,
                    title: 'FAQs',
                    link: 'faq'
                },
                {
                    id: 3,
                    title: 'Checkout',
                    link: 'checkout'
                },
                {
                    id: 4,
                    title: 'Cart',
                    link: 'cart'
                },
                {
                    id: 5,
                    title: 'Compare',
                    link: 'compare'
                },
            ]
        },
        {
            id: 5,
            title: 'About Us',
            link: 'about',
        },
        {
            id: 6,
            title: 'Contact Us',
            link: 'contact',
        },
    ],
    categoriesLinks: [
        {
            id: 1,
            title: 'Vegetables',
            link: 'search?category=vegetables'
        },
        {
            id: 2,
            title: 'Fresh Fruits',
            link: 'search?category=fresh-fruits'
        },
        {
            id: 3,
            title: 'Fruit Drink',
            link: 'search?category=fruit-drink'
        },
        {
            id: 4,
            title: 'Fresh Bakery',
            link: 'search?category=fresh-bakery'
        },
        {
            id: 5,
            title: 'Biscuits Snack',
            link: 'search?category=biscuits-snack'
        },
        {
            id: 6,
            title: 'Fresh Meat',
            link: 'search?category=fresh-meat'
        },
        {
            id: 7,
            title: 'Fresh Milk',
            link: 'search?category=fresh-milk'
        },
        {
            id: 8,
            title: 'Sea Foods',
            link: 'search?category=sea-foods'
        },
    ],

    fixedLinks: [
        {
            id: 1,
            title: 'Login / Sign In',
            link: 'signin'
        },
        {
            id: 2,
            title: 'Wishlist',
            link: 'wishlist'
        },
    ]

}


export const heroSectionData = {
    subTitle: 'Top Seller in The Week',
    desc: 'Presentation matters. Our Fresh Vietnamese vegetable rolls look good and taste even better',
    slidImages: [
        {
            id: 1,
            image: sliderBg1,
            title: 'Choose Your Healthy Lifestyle.'
        },
        {
            id: 2,
            image: sliderBg2,
            title: 'Fresh Bread Oatmeal Crumble.'
        },
        {
            id: 3,
            image: sliderBg3,
            title: 'The Beast Health Fresh.'
        },
    ]
}

export const categoriesData = [
    {
        id: 1,
        image: category1,
        title: 'Vegetables',
        link: 'search?category=vegetables',
        numberOfItems: '5'
    },
    {
        id: 2,
        image: category2,
        title: 'Fresh Fruits',
        link: 'search?category=fresh-fruits',
        numberOfItems: '11'
    },
    {
        id: 3,
        image: category3,
        title: 'Fruit Drink',
        link: 'search?category=fruit-drink',
        numberOfItems: '3'
    },
    {
        id: 4,
        image: category4,
        title: 'Fresh Bakery',
        link: 'search?category=fresh-bakery',
        numberOfItems: '4'
    },
    {
        id: 5,
        image: category5,
        title: 'Biscuits Snack',
        link: 'search?category=biscuits-snack',
        numberOfItems: '2'
    },
    {
        id: 6,
        image: category6,
        title: 'Fresh Meat',
        link: 'search?category=fresh-meat',
        numberOfItems: '4'
    },
    {
        id: 7,
        image: category7,
        title: 'Fresh Milk',
        link: 'search?category=fresh-milk',
        numberOfItems: '1'
    },
    {
        id: 8,
        image: category8,
        title: 'Sea Foods',
        link: 'search?category=sea-foods',
        numberOfItems: '0'
    },
]


export const productsBar = {
    subTitle: '~ Special Products ~',
    title: 'Weekly Food Offers',
    desc: 'The liber tempor cum soluta nobis eleifend option congue doming quod mazim.',
    productsList: [
        {
            id: 1,
            title: 'Strawberry, Beautiful Skin, Good For Health 1Kg',
            brands: 'Vons',
            reviewsNum: 1,
            SKU: '0016',
            rating: '5',
            color: 'red',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-15.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Ideal for Desserts, Breakfasts, and More"
            ],
            discount: '-5%',
            price: '19.00',
            priceDiscount: '20.00',
            availability: 40,
            categories: 'Fresh Fruits',
            tags: 'Strawberry, fresh',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Strawberry Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1kg',
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Perfect'
                },
            ],

        },
        {
            id: 2,
            title: '1kg Yellow onion/ onion/ dried onion Kinh men',
            brands: 'Super Market',
            reviewsNum: 2,
            SKU: '001',
            rating: '4',
            color: 'green',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-1-thumb.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-10%',
            price: '18.00',
            priceDiscount: '20.00',
            availability: 20,
            categories: 'Vegetables',
            tags: 'Onion',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Onion Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1lb',
                    'Color: White'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?size=626&ext=jpg',
                    adminName: 'omar',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Good'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 3,
            title: 'Fresh And Sour Lemon Like An Old Lover',
            brands: 'Super Market',
            reviewsNum: 1,
            SKU: '002',
            rating: '4',
            color: 'green',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-2.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-12%',
            price: '22.00',
            priceDiscount: '25.00',
            availability: 30,
            categories: 'Vegetables',
            tags: 'Lemon',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Lemon Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1lb',
                    'Color: Lemon'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Good'
                },
            ],

        },
        {
            id: 4,
            title: 'Fresh Organic SuSu Cheap Tasty Tonic',
            brands: 'Super Market',
            reviewsNum: 1,
            SKU: '003',
            rating: '4',
            color: 'green',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-3.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-4%',
            price: '24.00',
            priceDiscount: '25.00',
            availability: 45,
            categories: 'Vegetables',
            tags: 'SuSu',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Kiwi Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 8pc(s)',
                    'Color: White'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 5,
            title: 'Ginger Fresh, Whole, Organic – 250gram',
            brands: 'Super Market',
            reviewsNum: 1,
            SKU: '004',
            rating: '4',
            color: 'black',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-4.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-10%',
            price: '27.00',
            priceDiscount: '30.00',
            availability: 45,
            categories: 'Vegetables',
            tags: 'Ginger',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Ginger Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 8pc(s)',
                    'Color: White'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'omar',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Good'
                },
            ],

        },
        {
            id: 6,
            title: 'Guava Leaves From Trees Grown In South',
            brands: 'Super Market',
            reviewsNum: 1,
            SKU: '005',
            rating: '4',
            color: 'red',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-5.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-14%',
            price: '30.00',
            priceDiscount: '35.00',
            availability: 45,
            categories: 'Fresh Fruits',
            tags: 'Guava',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Guava Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1lb',
                    'Color: White'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'omar',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 7,
            title: 'Lettuce Fresh Produce Vegetables',
            brands: 'Super Market',
            reviewsNum: 1,
            SKU: '006',
            rating: '4',
            color: 'green',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-6-thumb.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '10.00',
            priceDiscount: '',
            availability: 30,
            categories: 'Vegetables',
            tags: 'Lettuce',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Lettuce Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1kg',
                    'Color: White'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 8,
            title: 'VietNamese Specialty Fresh Cranberries, Plump Fruit',
            brands: 'Aldi',
            reviewsNum: 1,
            SKU: '007',
            rating: '5',
            color: 'red',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-7-thumb.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-8%',
            price: '35.00',
            priceDiscount: '38.00',
            availability: 20,
            categories: 'Fresh Fruits ',
            tags: 'Cranberries',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Cranberries Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1lb',
                    'Color: White'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'omar',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 9,
            title: 'Chicken Tenders Freshgoods 100%',
            brands: 'Aldi',
            reviewsNum: 1,
            SKU: '008',
            rating: '5',
            color: 'grey',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-8.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            price: '42.00',
            availability: 20,
            categories: 'Fresh Meat ',
            tags: 'Chicken Tenders',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Chicken Tenders Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1lb',
                    'Color: White'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'omar',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Good'
                },
            ],

        },
        {
            id: 10,
            title: 'Fresh Grape Organic USA 100g',
            brands: 'Albertsons',
            reviewsNum: 1,
            SKU: '009',
            rating: '4',
            color: 'grey',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-9.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            price: '21.00',
            availability: 35,
            categories: 'Fresh Fruits',
            tags: 'Common Grape',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Common Grape Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 100gm',
                    'Color: black'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Good'
                },
            ],

        },
        {
            id: 11,
            title: 'Fresh Organic Plum Moc Chau Trip 100g',
            brands: 'Albertsons',
            reviewsNum: 1,
            SKU: '0010',
            rating: '4',
            color: 'blue',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-10.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-10-thumb.jpg&w=640&q=75',
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            price: '26.00',
            availability: 50,
            categories: 'Fresh Fruits',
            tags: 'Plum',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Plum  Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 100gm',
                    'Color: black'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
            ],

        },
        {
            id: 12,
            title: 'Mangosteen Organic From VietNamese',
            brands: 'Albertsons',
            reviewsNum: 1,
            SKU: '0011',
            rating: '4',
            color: 'blue',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-11.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-50%',
            price: '15.00',
            priceDiscount: '30.00',
            availability: 55,
            categories: 'Fresh Fruits',
            tags: 'Mangosteen',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Mangosteen Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 5pc(s)',
                    'Color: black'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '4',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
            ],

        },
        {
            id: 13,
            title: 'Organic Sweet Banana Crisps Snacks',
            brands: 'Vons',
            reviewsNum: 3,
            SKU: '0012',
            rating: '5',
            color: 'blue',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-12.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '20.00',
            priceDiscount: '',
            availability: 60,
            categories: 'Fresh Fruits',
            tags: 'Banana',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Banana Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 20pc(s)',
                    'Color: black'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
                {
                    id: 3,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'Omar',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'good'
                },
            ],

        },
        {
            id: 14,
            title: 'Fresh Milk Chocolate Quaker Popped Rice Crisps',
            brands: 'Vons',
            reviewsNum: 2,
            SKU: '0013',
            rating: '5',
            color: 'blue',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-13.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-13-thumb.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '19.00',
            priceDiscount: '',
            availability: 40,
            categories: 'Fruit Drink',
            tags: 'Milk',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Milk Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 2lb',
                    'Color: Yellow'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 15,
            title: 'Soda Sparkling Water Maker (Rose Gold)',
            brands: 'Vons',
            reviewsNum: 1,
            SKU: '0014',
            rating: '5',
            color: 'black',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-14.jpg&w=640&q=75'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-15%',
            price: '55.00',
            priceDiscount: '65.00',
            availability: 40,
            categories: 'Fruit Drink',
            tags: 'Soda Sparkling',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Soda Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1lb',
                    'Color: Yellow'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
            ],

        },
        {
            id: 16,
            title: 'Fresh Organic Dragon Fruit Vietnam Number-1',
            brands: 'Vons',
            reviewsNum: 2,
            SKU: '0015',
            rating: '5',
            color: 'red',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-16.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-16-thumb.jpg&w=640&q=75',
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '32.00',
            priceDiscount: '',
            availability: 42,
            categories: 'Fruit Fruit',
            tags: 'Dragon Fruit',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Dragon Fruit Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 2kg',
                    'Color: red'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 17,
            title: 'Fresh Organic Lemon Leaves USA 5kg',
            brands: 'Ralphs',
            reviewsNum: 2,
            SKU: '0016',
            rating: '5',
            color: 'green',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-17.jpg&w=256&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-17-thumb.jpg&w=256&q=75',
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '31.00',
            priceDiscount: '',
            availability: 42,
            categories: 'Fruit Fruit',
            tags: 'Lime Fruit',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Lime Fruit Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 5kg',
                    'Color: Yellow'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 18,
            title: 'Fresh Organic Apricot Fruit Quaker Popped',
            brands: 'Ralphs',
            reviewsNum: 2,
            SKU: '0017',
            rating: '5',
            color: 'green',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-18.jpg&w=640&q=75',
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '54.00',
            priceDiscount: '',
            availability: 47,
            categories: 'Fruit Fruit',
            tags: 'Apricot Fruit',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Apricot Fruit Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 4pc(s)',
                    'Color: orange'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 19,
            title: 'Quaker Popped Rice Crisps Snacks Chocolate',
            brands: 'Ralphs',
            reviewsNum: 2,
            SKU: '0018',
            rating: '5',
            color: 'black',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-19.jpg&w=640&q=75',
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '33.00',
            priceDiscount: '',
            availability: 53,
            categories: 'Biscuits Snack',
            tags: 'Rice Crisps',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Rice Crisps Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 4pc(s)',
                    'Color: Black'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'omar',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 20,
            title: 'Laffy Taffy Laff Bites Gone Bananas – 4 Packs',
            brands: 'ShopRite',
            reviewsNum: 2,
            SKU: '0019',
            rating: '5',
            color: 'grey',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-20.jpg&w=640&q=75',
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '55.00',
            priceDiscount: '',
            availability: 55,
            categories: 'Biscuits Snack',
            tags: 'Laffy Taffy',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Laffy Taffy Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 4pc(s)',
                    'Color: Black'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'omar',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 21,
            title: 'USDA Choice Angus Beef Stew Meat - 1Kg',
            brands: 'ShopRite',
            reviewsNum: 2,
            SKU: '0019',
            rating: '5',
            color: 'red',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-21.jpg&w=640&q=75',
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-17%',
            price: '100.00',
            priceDiscount: '120.00',
            availability: 55,
            categories: 'Fresh Meat',
            tags: 'Beef',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Beef Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 2kg',
                    'Color: Black'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/photos-gratuite/portrait-belle-jeune-femme-coiffure-elegante-lunettes_1142-40217.jpg?w=740&t=st=1712422556~exp=1712423156~hmac=216d9a4c3813acc5743b3a79e212c7a4c00ad303e000463e99df3c746a2bde57',
                    adminName: 'Erza',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'omar',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 22,
            title: 'Cheap And Delicious Fresh Chicken',
            brands: 'ShopRite',
            reviewsNum: 2,
            SKU: '0020',
            rating: '4',
            color: 'grey',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-22.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-22-thumb.jpg&w=640&q=75',
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-20%',
            price: '120.00',
            priceDiscount: '150.00',
            availability: 62,
            categories: 'Fresh Meat',
            tags: 'Chicken',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Chicken Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 2kg',
                    'Color: Black'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'omar',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 23,
            title: '1st Quality Fresh Meat From USA 500g',
            brands: 'ShopRite',
            reviewsNum: 2,
            SKU: '0021',
            rating: '4',
            color: 'grey',
            images: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-23.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-23-thumb.jpg&w=640&q=75',
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-13%',
            price: '70.00',
            priceDiscount: '80.00',
            availability: 30,
            categories: 'Fresh Meat',
            tags: 'Meat',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Meat Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 500gm',
                    'Color: red'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Average'
                },
                {
                    id: 2,
                    avatar: 'https://img.freepik.com/photos-gratuite/illustration-3d-jeune-homme-barbe-moustache_1142-51070.jpg?w=740&t=st=1712423072~exp=1712423672~hmac=c4113e4c841f2d7f5424d7d4605cc9682b35812e02442c860ec956bde8bdf377',
                    adminName: 'omar',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 24,
            title: 'Fresh Produce Melons Each',
            brands: 'Aldi',
            reviewsNum: 1,
            SKU: '0023',
            rating: '3',
            color: 'grey',
            images: [
                'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-53-768x691.jpg',
                'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-31-768x691.jpg'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '7.49',
            priceDiscount: '',
            availability: 30,
            categories: 'Fresh fruit',
            tags: 'Melons Each',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Melons Each Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1kg',
                    'Color: white'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Good'
                },
            ],

        },
        {
            id: 25,
            title: 'Organic Maple Syrup',
            brands: 'Aldi',
            reviewsNum: 1,
            SKU: '0024',
            rating: '5',
            color: 'red',
            images: [
                'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-28-768x691.jpg',
                'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-24-768x691.jpg'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '-12%',
            price: '5.28',
            priceDiscount: '5.98',
            availability: 30,
            categories: 'Fresh Drink',
            tags: 'Maple Syrup',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Maple Syrup Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1l',
                    'Color: orange'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 26,
            title: '100% Butter French Croissants',
            brands: 'Aldi',
            reviewsNum: 1,
            SKU: '0025',
            rating: '5',
            color: 'red',
            images: [
                'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '1.44',
            priceDiscount: '',
            availability: 20,
            categories: 'Fresh Bakery',
            tags: 'Croissants',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Croissants Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 100gm',
                    'Color: white'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 27,
            title: 'Valentine’s Day Pink Frosted Chocolate Cookies',
            brands: 'Aldi',
            reviewsNum: 1,
            SKU: '0026',
            rating: '5',
            color: 'black',
            images: [
                'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-6-768x691.jpg',
                'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-5-768x691.jpg'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '15.00',
            priceDiscount: '',
            availability: 20,
            categories: 'Fresh Bakery',
            tags: 'cookies',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'cookies Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 500gm',
                    'Color: Pink'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
        {
            id: 28,
            title: 'Fairlife Lactose-Free 2% Milk',
            brands: 'Aldi',
            reviewsNum: 1,
            SKU: '0027',
            rating: '5',
            color: 'grey',
            images: [
                'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-47-768x691.jpg',
                'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-37-768x691.jpg'
            ],
            specifications: [
                "Vegan & Allergy-Friendly",
                "Smooth, Velvety Texture",
                "Perfect for Plant-Based Dishes",
            ],
            discount: '',
            price: '$3.69',
            priceDiscount: '',
            availability: 20,
            categories: 'Fresh Milk',
            tags: 'Milk',
            paymentImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=384&q=75',
            productDescription: 'Milk Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.',
            subDescription: [
                'Category: Organic',
                'MFG: August 4.2021',
                'LIFE: 60 days',
            ],
            additionalInfo: {
                description: 'Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia eserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                productDetails: [
                    'Material: Plastic, Wood',
                    'Legs: Lacquered oak and black painted oak',
                    'Length: 48cm',
                    'Depth: 52cm',
                    'Weight: 1L',
                    'Color: white'
                ]
            },
            reviews: [
                {
                    id: 1,
                    avatar: 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?w=740&t=st=1712422519~exp=1712423119~hmac=70b4cfdacca2bcaf524544b0db3fea96e5e35db9f7b67acb446e37b68c22a53a',
                    adminName: 'Adam',
                    adminRating: '5',
                    date: '--06 March, 2024:',
                    comment: 'Awesome'
                },
            ],

        },
    ]
}


export const bannerData = [
    {
        id: 1,
        subTitle: 'Top Offers',
        title: 'Eat Green <br/> Beast For Family',
        desc: 'Free shipping 05km',
        image: banner1
    },
    {
        id: 2,
        subTitle: 'Weekend Deals',
        title: 'fresh Food <br/> Restor Health',
        desc: 'Top Quility Products',
        image: banner2
    },
    {
        id: 3,
        subTitle: 'Top Seller',
        title: 'Healthy <br/> Fresh Free Bread',
        desc: 'Limited Time: Online Only!',
        image: banner3
    },
]


export const categoriesControlData = [

    {
        id: 1,
        title: 'All Products',
        category: 'All',
    },
    {
        id: 2,
        title: 'Fruit Drink',
        category: 'Fruit Drink',
    },
    {
        id: 3,
        title: 'Fresh Fruits',
        category: 'Fresh Fruits',
    },
    {
        id: 4,
        title: 'Vegetables',
        category: 'Vegetables',
    },
]

export const blogData = {
    title: 'Weekly Food Offers',
    subTitle: '~ Special Products ~',
    desc: 'The liber tempor cum soluta nobis eleifend option congue doming quod mazim.',
    blogList: [
        {
            id: 1,
            title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
            author: 'amira',
            catLinks: 'Lifestyle',
            postDate: 'SEP 15. 2024',
            paragraph1: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            paragraph2: 'Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.',
            paragraph3: 'Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant.',
            paragraph4: 'Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.',
            paragraph5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.',
            quation: 'he disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned.',
            mainImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-bg-1.ff5c9ab6.jpg&w=1920&q=75',
            imagesList: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-1.171de560.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-2.54c1099e.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-3.124e4374.jpg&w=1080&q=75'
            ],
            tagged: [
                'Furniture', 'Table', 'Fashion'
            ],
            comments: [
                {
                    id: 1,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-1.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
                {
                    id: 2,
                    author: 'BROOKLYN SIMMONS',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-2.jpg&w=96&q=75',
                    comment: 'Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.'
                },
                {
                    id: 3,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-3.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
            ]
        },
        {
            id: 2,
            title: "The Best Great Benefits Of Fresh Beef For Women's Health",
            author: 'Adam',
            catLinks: 'ORGANICS',
            postDate: 'AUG 15. 2024',
            paragraph1: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            paragraph2: 'Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.',
            paragraph3: 'Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant.',
            paragraph4: 'Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.',
            paragraph5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.',
            quation: 'he disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned.',
            mainImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-bg-2.c3fe12c8.jpg&w=1920&q=75',
            imagesList: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-1.171de560.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-2.54c1099e.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-3.124e4374.jpg&w=1080&q=75'
            ],
            tagged: [
                'Furniture', 'Table', 'Fashion'
            ],
            comments: [
                {
                    id: 1,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-1.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
                {
                    id: 2,
                    author: 'BROOKLYN SIMMONS',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-2.jpg&w=96&q=75',
                    comment: 'Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.'
                },
                {
                    id: 3,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-3.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
            ]


        },
        {
            id: 3,
            title: "Ways To Choose Fruits & Seafoods Good For Pregnancy",
            author: 'omar',
            catLinks: 'ORGANICS',
            postDate: 'FEB 15. 2024',
            paragraph1: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            paragraph2: 'Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.',
            paragraph3: 'Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant.',
            paragraph4: 'Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.',
            paragraph5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.',
            quation: 'he disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned.',
            mainImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-bg-3.7c8c4d48.jpg&w=1920&q=75',
            imagesList: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-1.171de560.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-2.54c1099e.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-3.124e4374.jpg&w=1080&q=75'
            ],
            tagged: [
                'Furniture', 'Table', 'Fashion'
            ],
            comments: [
                {
                    id: 1,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-1.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
                {
                    id: 2,
                    author: 'BROOKLYN SIMMONS',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-2.jpg&w=96&q=75',
                    comment: 'Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.'
                },
                {
                    id: 3,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-3.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
            ]


        },
        {
            id: 4,
            title: "Summer Breakfast For The Healthy Morning With Tomatoes",
            author: 'omar',
            catLinks: 'SHOPPING',
            postDate: 'FEB 22. 2024',
            paragraph1: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            paragraph2: 'Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.',
            paragraph3: 'Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant.',
            paragraph4: 'Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.',
            paragraph5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.',
            quation: 'he disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned.',
            mainImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-bg-4.ec8056af.jpg&w=1920&q=75',
            imagesList: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-1.171de560.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-2.54c1099e.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-3.124e4374.jpg&w=1080&q=75'
            ],
            tagged: [
                'Furniture', 'Table', 'Fashion'
            ],
            comments: [
                {
                    id: 1,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-1.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
                {
                    id: 2,
                    author: 'BROOKLYN SIMMONS',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-2.jpg&w=96&q=75',
                    comment: 'Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.'
                },
                {
                    id: 3,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-3.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
            ]


        },
        {
            id: 5,
            title: "Popular Reasons You Must Drinks Juice Everyday",
            author: 'amira',
            catLinks: 'FOODS',
            postDate: 'NOV 04. 2024',
            paragraph1: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            paragraph2: 'Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.',
            paragraph3: 'Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant.',
            paragraph4: 'Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.',
            paragraph5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.',
            quation: 'he disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned.',
            mainImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-bg-5.4ed24836.jpg&w=1920&q=75',
            imagesList: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-1.171de560.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-2.54c1099e.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-3.124e4374.jpg&w=1080&q=75'
            ],
            tagged: [
                'Furniture', 'Table', 'Fashion'
            ],
            comments: [
                {
                    id: 1,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-1.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
                {
                    id: 2,
                    author: 'BROOKLYN SIMMONS',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-2.jpg&w=96&q=75',
                    comment: 'Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.'
                },
                {
                    id: 3,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-3.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
            ]


        },
        {
            id: 6,
            title: "Perfect Quality Reasonable Price For Your Family",
            author: 'amira',
            catLinks: 'LIFESTYLE',
            postDate: 'NDEC 12. 2024',
            paragraph1: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            paragraph2: 'Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.',
            paragraph3: 'Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant.',
            paragraph4: 'Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.',
            paragraph5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.',
            quation: 'he disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned.',
            mainImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-bg-6.3ea02492.jpg&w=1920&q=75',
            imagesList: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-1.171de560.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-2.54c1099e.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-3.124e4374.jpg&w=1080&q=75'
            ],
            tagged: [
                'Furniture', 'Table', 'Fashion'
            ],
            comments: [
                {
                    id: 1,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-1.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
                {
                    id: 2,
                    author: 'BROOKLYN SIMMONS',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-2.jpg&w=96&q=75',
                    comment: 'Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.'
                },
                {
                    id: 3,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-3.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
            ]


        },
        {
            id: 7,
            title: "Ways To Choose Fruits Seafoods Good For Pregnancy",
            author: 'omar',
            catLinks: 'DAIRY FARM',
            postDate: 'DEC 15. 2024',
            paragraph1: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            paragraph2: 'Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.',
            paragraph3: 'Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant.',
            paragraph4: 'Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.',
            paragraph5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.',
            quation: 'he disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned.',
            mainImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-bg-7.b5716c9c.jpg&w=1920&q=75',
            imagesList: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-1.171de560.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-2.54c1099e.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-3.124e4374.jpg&w=1080&q=75'
            ],
            tagged: [
                'Furniture', 'Table', 'Fashion'
            ],
            comments: [
                {
                    id: 1,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-1.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
                {
                    id: 2,
                    author: 'BROOKLYN SIMMONS',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-2.jpg&w=96&q=75',
                    comment: 'Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.'
                },
                {
                    id: 3,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-3.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
            ]


        },
        {
            id: 8,
            title: "The Best Great Benefits Of Fresh Beef For Women’s Health",
            author: 'omar',
            catLinks: 'ORGANIS',
            postDate: 'OCT 15. 2024',
            paragraph1: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            paragraph2: 'Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.',
            paragraph3: 'Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant.',
            paragraph4: 'Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.',
            paragraph5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.',
            quation: 'he disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned.',
            mainImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-bg-8.10b5ab2c.jpg&w=1920&q=75',
            imagesList: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-1.171de560.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-2.54c1099e.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-3.124e4374.jpg&w=1080&q=75'
            ],
            tagged: [
                'Furniture', 'Table', 'Fashion'
            ],
            comments: [
                {
                    id: 1,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-1.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
                {
                    id: 2,
                    author: 'BROOKLYN SIMMONS',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-2.jpg&w=96&q=75',
                    comment: 'Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.'
                },
                {
                    id: 3,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-3.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
            ]


        },
        {
            id: 9,
            title: "Avocado Grilled Salmon, Rich In Nutrients For The Body",
            author: 'omar',
            catLinks: 'LIFESTYLE',
            postDate: 'DEC 05. 2024',
            paragraph1: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            paragraph2: 'Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.',
            paragraph3: 'Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant.',
            paragraph4: 'Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.',
            paragraph5: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.',
            quation: 'he disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned.',
            mainImage: 'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-bg-9.86247a93.jpg&w=1920&q=75',
            imagesList: [
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-1.171de560.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-2.54c1099e.jpg&w=640&q=75',
                'https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-sm-3.124e4374.jpg&w=1080&q=75'
            ],
            tagged: [
                'Furniture', 'Table', 'Fashion'
            ],
            comments: [
                {
                    id: 1,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-1.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
                {
                    id: 2,
                    author: 'BROOKLYN SIMMONS',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-2.jpg&w=96&q=75',
                    comment: 'Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.'
                },
                {
                    id: 3,
                    author: 'KRISTIN WATSON',
                    image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2Fcomment-3.jpg&w=96&q=75',
                    comment: 'The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.'
                },
            ]


        },
    ]

}


export const featuresData = [
    {
        id: 1,
        icon: featureIcon1,
        title: 'FAST DELIVERY',
        desc: 'Across West & East Morocco'
    },
    {
        id: 2,
        icon: featureIcon2,
        title: 'SAFE PAYMENT',
        desc: '100% Secure Payment'
    },
    {
        id: 3,
        icon: featureIcon3,
        title: 'ONLINE DISCOUNT',
        desc: 'Add Multi-buy Discounts'
    },
    {
        id: 4,
        icon: featureIcon4,
        title: 'HELP CENTER',
        desc: 'Dedicated 24/7 Support'
    },
    {
        id: 5,
        icon: featureIcon5,
        title: 'CURATED ITEMS',
        desc: 'From Handpicked Sellers'
    },
]


export const footerData = {
    helpYpu: {
        title: 'Let us help you',
        desc1: 'If you have any question, please',
        desc2: 'contact us at:',
        email: 'support@example.com',
        socialMedia: [
            {
                id: 1,
                icon: facebook,
                link: 'https://www.facebook.com/profile.php?id=100053501469803'
            },
            {
                id: 2,
                icon: twitter,
                link: 'https://twitter.com/AXGflash'
            },
            {
                id: 3,
                icon: tiktok,
                link: 'https://www.tiktok.com/@zigzagxz3'
            }
        ]
    },
    address: {
        title: 'LOOKING FOR ORFARM?',
        location: '68 St. Vicent Place, Glasgow, Greater Newyork NH2012, UK.',
        workingHours: [
            {
                id: 1,
                days: 'Monday - Friday:',
                hours: '8:10 AM - 6:10 PM'
            },
            {
                id: 2,
                days: 'Saturday:',
                hours: '10:10 AM - 06:10 PM'
            },
            {
                id: 3,
                days: 'Sunday:',
                hours: 'Close'
            },
        ]
    },
    hotCategories: {
        title: 'HOT CATEGORIES',
        categories: [
            'Fruits & Vegetables',
            'Dairy Products',
            'Package Foods',
            'Beverage',
            'Health & Wellness'
        ]
    },
    subscribeForm: {
        title: 'OUR NEWSLETTER',
        desc1: 'Subscribe to the Orfarm mailing list to receive updates',
        desc2: 'on new arrivals & other information.'
    }

}

export const aboutBannerData = {
    subTitle: 'ABOUT FOR ORFARM',
    title: 'Unique People',
    desc1: 'Over 25 years of experience, we have crafted thousands of strategic discovery process that',
    desc2: ' enables us to peel back the layers which enable us to understand, connect.'
}

export const helpYouData = {
    title: 'We Help Your <br/> Digital Business Grow',
    desc: '<p>We provide digital experience services to startups and small businesses. We help our <br>clients succeed by creating brand identities, digital experiences, and print materials. Sed <br> trspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>',
    list: [
        'Track your daily activity.',
        'Start a private group video call.',
        'All the lorem ipsum generators on the Internet.'
    ]

}

export const chooseUsData = {
    subTitle: '~ Why Choose Us ~',
    title: 'Our Amazing Work',
    desc: 'The liber tempor cum soluta nobis eleifend option congue doming quod mazim.',
    amazingWorkList: [
        {
            id: 1,
            image: chooseUs1,
            boxTitle: 'Who We Are',
            description: 'Lorem ipsum dolor sit amet consectetur <br> adipisicing elit, sed do eiusmod tempor labore <br> et dolore dignissimos cumque.'
        },
        {
            id: 2,
            image: chooseUs2,
            boxTitle: 'Our Products',
            description: 'Lorem ipsum dolor sit amet consectetur <br> adipisicing elit, sed do eiusmod tempor labore <br> et dolore dignissimos cumque.'
        },
        {
            id: 3,
            image: chooseUs3,
            boxTitle: 'How We Work',
            description: 'Lorem ipsum dolor sit amet consectetur <br> adipisicing elit, sed do eiusmod tempor labore <br> et dolore dignissimos cumque.'
        },
    ]
}

export const weAreDifferentData = {
    subTitle: '~ Why choose us? ~',
    title: 'What makes us different',
    desc: 'The liber tempor cum soluta nobis eleifend option congue doming quod mazim.',
    weAreDifferentList: [
        {
            id: 1,
            image: chooseIcon1,
            title: '100% Fresh Food',
            description: 'Adjust global theme options and see design <br/> changes in real-time.',
        },
        {
            id: 2,
            image: chooseIcon2,
            title: 'Premium Quality',
            description: 'Adjust global theme options and see design <br/> changes in real-time.',
        },
        {
            id: 3,
            image: chooseIcon3,
            title: '100% Natural',
            description: 'Adjust global theme options and see design <br/> changes in real-time.',
        },
        {
            id: 4,
            image: chooseIcon4,
            title: '100% Organic',
            description: 'Adjust global theme options and see design <br/> changes in real-time.',
        },
    ]
}

export const ourClientsData = {
    subTitle: '~ Happy Customer ~',
    title: 'What Client Says',
    desc: 'The liber tempor cum soluta nobis eleifend option congue doming quod mazim.',
    ourClientsList: [
        {
            id: 1,
            image: client1,
            title: 'Algistino Lionel',
            description: '<p>Delivery to your door. Up to 100km  <br> and it is completely free.</p>',
            job: 'Web Designer at microsoft'
        },
        {
            id: 2,
            image: client2,
            title: 'Jackson Roben',
            description: 'Also like the fact that I can pick my staples in the brown paper packs and glass containers at the zero waste section, with an <br> idea to reduce plastic and also more convenient.',
            job: 'Web Developer at adobe'
        },
        {
            id: 3,
            image: client3,
            title: 'Lionel',
            description: 'Also like the fact that I can pick my staples in the brown paper packs and glass containers at the zero waste section, with an <br> idea to reduce plastic and also more convenient.',
            job: 'UI/UX Designer at google'
        },
        {
            id: 4,
            image: client2,
            title: 'Jackson Roben',
            description: 'Also like the fact that I can pick my staples in the brown paper packs and glass containers at the zero waste section, with an <br> idea to reduce plastic and also more convenient.',
            job: 'Web Designer at adobe'
        },
    ]
}

export const stepsData = [
    {
        id: 1,
        image: step1,
        title: 'Select Your Products',
        description: 'Choose from select produce to start. <br> Keep, add, or remove items.',
    },
    {
        id: 2,
        image: step2,
        title: 'Our Shop Orfarm',
        description: 'We provide 100+ products, provide <br> enough nutrition for your family.',
    },
    {
        id: 3,
        image: step3,
        title: 'Delivery To Your',
        description: 'Delivery to your door. Up to 100km  <br> and it is completely free.',
    },
]
export const aboutVideoData = {
    subTitle: '~ Good Performance ~',
    title: 'Our Working Ability',
    desc: 'The liber tempor cum soluta nobis eleifend option congue doming quod mazim.',
    aboutVideoList: [
        {
            id: 1,
            number: '5465+',
            title: 'Active Clients',
            description: 'Sed ut perspiciatis unde omnis <br/> iste natus sit accusantium doloremque.'
        },
        {
            id: 2,
            number: '4968++',
            title: 'Projects Done',
            description: 'Sed ut perspiciatis unde omnis <br/> iste natus sit accusantium doloremque.'
        },
        {
            id: 3,
            number: '565+',
            title: 'Team Advisors',
            description: 'Sed ut perspiciatis unde omnis <br/> iste natus sit accusantium doloremque.'
        },
        {
            id: 4,
            number: '485+',
            title: 'Users Online',
            description: 'Sed ut perspiciatis unde omnis <br/> iste natus sit accusantium doloremque.'
        },
    ]

}


export const faqsData = {
    howCanWeHelpYou: {
        title: 'How can we help you?',
        desc1: 'Returns are free for orders shipped within the U.S. We include a UPS return label in every package which is at no cost to use.',
        steps: {
            title: 'Follow the steps below for a seamless returns process:',
            stepsList: [
                '– Please indicate a reason for return using one of the Return Codes listed on the order form included in your package.',
                '– Attach your UPS return label to the outside of the package. There is no cost to use this label.',
                '– Please make note of your tracking number so that you are able to track it on its way back to us'
            ]
        },
        desc2: 'You will receive an email once your return has been processed. Please allow 06 – 12 business days  from the time your package arrives back to us for a refund to be issued.'
    },
    shoppingInformation: {
        title: 'Shopping Information',
        shoppingInformationList: [
            {
                id: 1,
                question: 'How much is shipping and how long will it take?',
                answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
            },
            {
                id: 2,
                question: 'Pellentesque habitant morbi tristique senectus et netus?',
                answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
            },
            {
                id: 3,
                question: 'How long will it take to get my package?',
                answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
            },
        ]
    },
    paymentInformation: {
        title: 'Payment information',
        paymentInformationList: [
            {
                id: 1,
                question: 'How do I know if my order was successful?',
                answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
            },
            {
                id: 2,
                question: 'How much is shipping and how long will it take?',
                answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
            },
            {
                id: 3,
                question: 'Pellentesque habitant morbi tristique senectus et netus?',
                answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
            },
        ]
    },
    orderAndReturns: {
        title: 'Order & Returns',
        orderAndReturnsList: [
            {
                id: 1,
                question: 'How do I know if my order was successful?',
                answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
            },
            {
                id: 2,
                question: 'How much is shipping and how long will it take?',
                answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
            },
            {
                id: 3,
                question: 'Pellentesque habitant morbi tristique senectus et netus?',
                answer: 'The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
            },
        ]
    }
}


export const contactAndLocationData = {
    title: 'Looking For Orfarm?',
    desc: 'The liber tempor cum soluta nobis eleifend option congue doming quod mazim.',
    locationsList: [
        {
            id: 1,
            image: contactBigBg1,
            location: 'RUE PELLEPORT - PARIS',
            listInfo: [
                'Add: Heaven Stress, Beverly Melbourne',
                'Phone: (+33) 223 542 5432',
                'Email: SolHaven@gmail.com'
            ],
        },
        {
            id: 2,
            image: contactBigBg2,
            location: 'PROSPECT - NEW YORK',
            listInfo: [
                'Add: Heaven Stress, Beverly Melbourne',
                'Phone: (+33) 223 542 5432',
                'Email: SolHaven@gmail.com'
            ],
        },
        {
            id: 3,
            image: contactBigBg3,
            location: 'BUDAPEST - HUNGARY',
            listInfo: [
                'Add: Heaven Stress, Beverly Melbourne',
                'Phone: (+33) 223 542 5432',
                'Email: SolHaven@gmail.com'
            ],
        },
        {
            id: 4,
            image: contactBigBg4,
            location: 'KASTRUP - DENMARK',
            listInfo: [
                'Add: Heaven Stress, Beverly Melbourne',
                'Phone: (+33) 223 542 5432',
                'Email: SolHaven@gmail.com'
            ],

        },
    ]
}

export const contactMapFormInputs = [
    {
        id: 1,
        text: 'Name',
        type: 'text',
        placeholder: 'Your Name *'
    },
    {
        id: 2,
        text: 'Email',
        type: 'email',
        placeholder: 'Your Email *'
    },
    {
        id: 3,
        text: 'Subject',
        type: 'text',
        placeholder: 'Subject *'
    },
    {
        id: 4,
        text: 'Phone',
        type: 'number',
        placeholder: 'Phone *'
    },
]


export const LocationData = {
    image: locationBg1,
    openingHours: '09:00 AM - 18:00 PM',
    listInfo: [
        'Add: Heaven Stress, Beverly Melbourne',
        'Phone: (+33) 223 542 5432',
        'Email: SolHaven@gmail.com',
        'Website: https://shop-location.vercel.app',
        'Description: We have more than 100 stores all over the globe. Find the nearest store toget your favorite stuff'

    ],
}


export const shippingInfoData = [
    {
        id: 1,
        text: 'Free shipping apply to all <br> orders over $90'
    },
    {
        id: 2,
        text: 'Guaranteed 100% Organic <br/> from nature farms'
    },
    {
        id: 3,
        text: '60 days returns if you <br/> change your mind'
    }
]


export const loginInputsData = [
    {
        id: 1,
        placeholder: 'Email address',
        type: 'email'
    },
    {
        id: 2,
        placeholder: 'Password',
        type: 'password'
    },
]
export const signUpInputsData = [
    {
        id: 1,
        placeholder: 'User name',
        type: 'text'
    },
    {
        id: 2,
        placeholder: 'Email address',
        type: 'email'
    },
    {
        id: 3,
        placeholder: 'Password',
        type: 'password'
    },
]