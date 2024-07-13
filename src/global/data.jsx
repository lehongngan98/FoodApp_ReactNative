export const filterData = [
    {
        "id": 0,
        "name": "Fast Food",
        "image": require("../../assets/fastfood.jpeg"),
    },
    {
        "id": 1,
        "name": "Burgers",
        "image": require("../../assets/burger.jpeg"),
    },
    {
        "id": 2,
        "name": "Salads",
        "image": require("../../assets/salad.jpeg"),
    },
    {
        "id": 3,
        "name": "Hotdog",
        "image": require("../../assets/hotdog.jpeg"),
    },
    {
        "id": 4,
        "name": "Seafood",
        "image": require("../../assets/seafood.jpeg"),
    },



]


export const restaurantsData = [
    {
        "id": 0,
        "restaurantName": "MC Donalds",
        "farAway": "21.2",
        "businessAddress": "22 Bessie street, Cape Town",
        // "images":"https://i.postimg.cc/NFS6cSkZ/mcdonalds.jpg",
        "images": "https://media.thestar.com.my/Prod/AEBABF91-073E-42FD-BE0C-60B99A441403",
        "averageReview": 4.9,
        "numberOfReview": 2222,
        "coordinates": {
            "latitude": -33.918861,
            "longitude": 18.423300
        },
        "discount": 10,
        "deliveryTime": 15,
        "collectTime": 5,
        "foodType": "Burger, Wraps, Milkshakes...",
        "productData": [
            {
                "productId": 0,
                "productName": "Hand cut chips",
                "price": 29.30,
                "image": "https://i.postimg.cc/L8QppMqx/handcutchips.jpg"

            },
            {
                "productId": 1,
                "productName": "Big Mac",
                "price": 50.80,
                "image": "https://i.postimg.cc/sDtL9Dhd/bigmac.jpg"
            },
            {
                "productId": 2,
                "productName": "Chicken Burger",
                "price": 70,
                "image": "https://i.postimg.cc/sxKhfXCB/chickenburger.jpg"
            },
        ]
    },
    {
        "id": 1,
        "restaurantName": "KFC",
        "farAway": "18.4",
        "businessAddress": "104 Bessie street, Cape Town",
        "images": "https://i.postimg.cc/fbxkTLxw/kfc.jpg",
        "averageReview": 4.8,
        "numberOfReview": 4124,
        "coordinates": {
            "latitude": -33.918861,
            "longitude": 17.423300
        },
        "discount": 7,
        "deliveryTime": 15,
        "collectTime": 5,
        "foodType": "Chicken, Chicken wings...",
        "productData": [
            {
                "productId": 0,
                "productName": "Hand cut chips",
                "price": 29.30,
                "image": "https://i.postimg.cc/L8QppMqx/handcutchips.jpg"
            },
            {
                "productId": 1,
                "productName": "Big Mac",
                "price": 50.80,
                "image": "https://i.postimg.cc/sDtL9Dhd/bigmac.jpg"
            },
            {
                "productId": 2,
                "productName": "Chicken Burger",
                "price": 70,
                "image": "https://i.postimg.cc/sxKhfXCB/chickenburger.jpg"
            },
        ]
    },
    {
        "id": 2,
        "restaurantName": "KFC",
        "farAway": "18.4",
        "businessAddress": "104 Bessie street, Cape Town",
        "images": "https://i.postimg.cc/fbxkTLxw/kfc.jpg",
        "averageReview": 4.8,
        "numberOfReview": 4124,
        "coordinates": {
            "latitude": -33.918861,
            "longitude": 17.423300
        },
        "discount": 7,
        "deliveryTime": 15,
        "collectTime": 5,
        "foodType": "Chicken, Chicken wings...",
        "productData": [
            {
                "productId": 0,
                "productName": "Hand cut chips",
                "price": 29.30,
                "image": "https://i.postimg.cc/L8QppMqx/handcutchips.jpg"
            },
            {
                "productId": 1,
                "productName": "Big Mac",
                "price": 50.80,
                "image": "https://i.postimg.cc/sDtL9Dhd/bigmac.jpg"
            },
            {
                "productId": 2,
                "productName": "Chicken Burger",
                "price": 70,
                "image": "https://i.postimg.cc/sxKhfXCB/chickenburger.jpg"
            },
        ]
    },

];


export const menuData = [
    { title: "BEEF", special: false, key: 0 },
    { title: "CHICKEN", special: false, key: 1 },
    { title: "VEGGIE BURGER", special: false, key: 2 },
    { title: "FRIES & CORN", special: false, key: 3 },
    { title: "SALADS", special: false, key: 4 },
    { title: "HAPPY MEALS", special: false, key: 5 },
    { title: "SHARE BOX", special: false, key: 6 },
    { title: "MILKSHAKES", special: false, key: 7 },
    { title: "COLD DRINKS", special: false, key: 8 },
    { title: "DESSERTS", special: false, key: 9 },
    { title: "HOT DRINKS", special: false, key: 10 }
];

export const specialData = [
    { title: "LIMITED OFFER", key: 0 },
    { title: "GO CHILLI", key: 1 },
    { title: "GO CHEESE", key: 2 },
    { title: "MCCHICKEN DELUXE PROMO", key: 3 }
];



export const RoutesModalMenu = [
    { key : 'beef' , title: 'BEEF'},
    { key : 'chicken' , title: 'CHICKEN'},
    { key : 'veggieBurger' , title: 'VEGGIE BURGER'},
    { key : 'friesCorn' , title: 'FRIES & CORN'},
    { key : 'salads' , title: 'SALADS'},
    { key : 'happyMeals' , title: 'HAPPY MEALS'},
    { key : 'shareBox' , title: 'SHARE BOX'},
    { key : 'milkshakes' , title: 'MILKSHAKES'},
    { key : 'coldDrinks' , title: 'COLD DRINKS'},
    { key : 'desserts' , title: 'DESSERTS'},
    { key : 'hotDrinks' , title: 'HOT DRINKS'}
];

export const RestaurantMenuRoutesBeef = [
    {
        id: 0, 
        productName: 'Big Mac',    
        price: 50.80,
        image: 'https://i.postimg.cc/sDtL9Dhd/bigmac.jpg',
        productDetails: 'Two 100% beef patties, a slice of cheese, lettuce, onion, pickles, and our special sauce all on a sesame seed bun.'
    },
    {
        id: 1, 
        productName: 'Quarter Pounder with Cheese',    
        price: 60.80,
        image: 'https://th.bing.com/th/id/OIP.rgFZ3qBG_HDlRNuXHmK9lQHaFa?w=1500&h=1098&rs=1&pid=ImgDetMain',
        productDetails: '100% beef patty, cheese, onions, pickles, mustard, and a dollop of tomato ketchup in a sesame seed bun.'
    },
    {
        id: 2, 
        productName: 'Double Cheeseburger',    
        price: 40.80,
        image: 'https://i.postimg.cc/sxKhfXCB/chickenburger.jpg',
        productDetails: 'Two 100% beef patties, a slice of cheese, pickles, onions, ketchup, and mustard in a soft burger bun.'
    },
    {
        id: 3, 
        productName: 'Cheeseburger',    
        price: 30.80,
        image: 'https://i.postimg.cc/sDtL9Dhd/bigmac.jpg',
        productDetails: '100% beef patty, onions, pickles, ketchup, and mustard in a soft burger bun.'
    },
    {
        id: 4, 
        productName: 'Hamburger',    
        price: 20.80,
        image: 'https://i.postimg.cc/3w8rBw3N/doublecheeseburger.jpg',
        productDetails: '100% beef patty, onions, pickles, ketchup, and mustard in a soft burger bun.'
    },
    {
        id: 5, 
        productName: 'McChicken',    
        price: 40.80,
        image: 'https://i.postimg.cc/3w8rBw3N/doublecheeseburger.jpg',
        productDetails: 'A tender, breaded chicken patty with a crispy coating, topped with fresh lettuce and mayonnaise in a sesame seed bun.'
    },
    {
        id: 6, 
        productName: 'Chicken McNuggets',    
        price: 50.80,
        image: 'https://i.postimg.cc/3w8rBw3N/doublecheeseburger.jpg',
        productDetails: 'Made with 100% seasoned chicken breast, the Chicken McNuggets you crave are still'
    }
];



export const Dips =[
    {
        id:0,
        name:'Ketchup',
        price: 10,
    }
    ,
    {
        id:1,
        name:'Mustard',
        price: 8.2,
    }
    ,
    {
        id:2,
        name:'BBQ',
        price: 11,
    }
    
];

export const Drinks =[
    {
        id:0,
        name:'Coca Cola',
        price: 10,
    }
    ,
    {
        id:1,
        name:'Fanta',
        price: 8.2,
    }
    ,
    {
        id:2,
        name:'Sprite',
        price: 11,
    }
    
];