import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())


const data = {
    categories: [
        {
            id: 1,
            image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-1.jpg&w=96&q=75',
            title: 'Vegetables',
            link: 'search?category=vegetables',
            numberOfItems: '5'
        },
        {
            id: 2,
            image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-2.jpg&w=96&q=75',
            title: 'Fresh Fruits',
            link: 'search?category=fresh-fruits',
            numberOfItems: '11'
        },
        {
            id: 3,
            image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-3.jpg&w=96&q=75',
            title: 'Fruit Drink',
            link: 'search?category=fruit-drink',
            numberOfItems: '3'
        },
        {
            id: 4,
            image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-4.jpg&w=96&q=75',
            title: 'Fresh Bakery',
            link: 'search?category=fresh-bakery',
            numberOfItems: '2'
        },
        {
            id: 5,
            image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-5.jpg&w=96&q=75',
            title: 'Biscuits Snack',
            link: 'search?category=biscuits-snack',
            numberOfItems: '2'
        },
        {
            id: 6,
            image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-6.jpg&w=96&q=75',
            title: 'Fresh Meat',
            link: 'search?category=fresh-meat',
            numberOfItems: '4'
        },
        {
            id: 7,
            image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-7.jpg&w=96&q=75',
            title: 'Fresh Milk',
            link: 'search?category=fresh-milk',
            numberOfItems: '1'
        },
        {
            id: 8,
            image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-8.jpg&w=96&q=75',
            title: 'Sea Foods',
            link: 'search?category=sea-foods',
            numberOfItems: '0'
        },
    ],
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
            categories: 'Fresh Fruits',
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
            categories: 'Fresh Meat',
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
            categories: 'Fresh Fruits',
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
            categories: 'Fresh Fruits',
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
            categories: 'Fresh Fruits',
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
            categories: 'Fresh Fruits',
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
            title: '100% Organic Maple Syrup',
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
            categories: 'Fruit Drink',
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
    ],
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


app.get('/', (req, res) => {
    res.status(200).send(
        {
            'categories': '/categories',
            'products': '/products',
            'blogs': '/blogs',
        }
    )
})

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id); // Convert id to integer

    // Find the product with the matching ID
    const product = data.productsList.find(item => item.id === productId);

    if (!product) {
        // If product not found, return 404 error
        return res.status(404).send({ message: 'Product not found' });
    }

    // If product found, return it
    res.status(200).send({ product, maxProducts: data.productsList.length });
});

app.get('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id); // Convert id to integer

    // Find the blog with the matching ID
    const blog = data.blogList.find(item => item.id === blogId);

    if (!blog) {
        // If blog not found, return 404 error
        return res.status(404).send({ message: 'blog not found' });
    }

    // If blog found, return it
    res.status(200).send({ blog, maxblogs: data.blogList.length });
});


app.post('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    // Find the product with the matching ID
    const productIndex = data.productsList.findIndex(item => item.id === productId);

    if (productIndex === -1) {
        // If product not found, return 404 error
        return res.status(404).send({ message: 'Blog not found' });
    }

    // Add the review to the product
    data.productsList[productIndex].reviewsNum = req.body.reviewsNum
    data.productsList[productIndex].reviews.push(req.body.review);

    // Return the updated product and the total number of products
    res.status(200).send({ product: data.productsList[productIndex], maxProducts: data.productsList.length });
});


app.post('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);

    // Find the blog with the matching ID
    const blogIndex = data.blogList.findIndex(item => item.id === blogId);

    if (blogIndex === -1) {
        // If blog not found, return 404 error
        return res.status(404).send({ message: 'Blog not found' });
    }

    // Add the comment to the blog
    data.blogList[blogIndex].comments.push(req.body);

    // Return the updated blog and the total number of blogs
    res.status(200).send({ blog: data.blogList[blogIndex], maxblogs: data.blogList.length });
});

app.get('/categories', (req, res) => {
    res.status(200).send(data.categories)
})
app.get('/products', (req, res) => {
    res.status(200).send(data.productsList)
})
app.get('/blogs', (req, res) => {
    res.status(200).send(data.blogList)
})



app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
})