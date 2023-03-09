import bcrypt from 'bcryptjs'
const data = {
    books:[
        {   
            // _id:"1",
            name:"All Quiet On the Western Front",
            slug:"all-quiet-on-the-western-front",
            author:"Erich Maria Remarque",
            genre:"war novel",
            image:"/images/img1.jpg",
            year:1928,
            price:24.76,
            stock:10,
            rating:4.7,
            review:24,
            desc:"A young German soldier of World War I tells of a generation of men who, even though they may have escaped shells, were destroyed by the war."
        },
        {
            // _id:"2",
            name:"The Old Man and the Sea",
            slug:"the-old-man-and-the-sea",
            author:"Ernest Hemingway",
            genre:"novel",
            image:"/images/img2.jpg",
            year:1952,
            price:10.59,
            stock:5,
            rating:4.4,
            review:35,
            desc:"The Old Man and the Sea, short heroic novel by Ernest Hemingway, published in 1952 and awarded the 1953 Pulitzer Prize for fiction.",
            
        },
        {
            // _id:"3",
            name:"Kafka on the Shore",
            slug:"kafka-on-the-shore",
            author:"Haruki Murakami",
            genre:"novel",
            image:"/images/img3.jpg",
            year:2002,
            price:27.62,
            stock:15,
            rating:4.2,
            review:45,
            desc:"KAFKA ON THE SHORE is a beautifully told story about needing to let go and step out of your own reality in order to find out that life is meant to be lived."
        },
        {
            // _id:"4",
            name:"To Kill a Mockingbird",
            slug:"to-kill-a-mockingbird",
            author:"Harper Lee",
            genre:"novel",
            image:"/images/img4.jpg",
            year:1960,
            price:24.99,
            stock:12,
            rating:4.6,
            review:26,
            desc:"To Kill a Mockingbird is primarily a novel about growing up under extraordinary circumstances in the 1930s in the Southern United States."
        },
        {
            name:"1984",
            slug:"1-9-8-4",
            author:"George Orwell",
            genre:"novel",
            image:"/images/img5.jpg",
            year:1949,
            price:13.39,
            stock:17,
            rating:4.7,
            review:56,
            desc:"1984 at a Glance · The setting of 1984 is a dystopia: an imagined world that is far worse than our own, as opposed to a utopia, which is an ideal place or state."
        },
        {
            name:"The Great Gatsby",
            slug:"the-great-gatsby",
            author:"F. Scott Fitzgerald",
            genre:"novel",
            image:"/images/img6.jpg",
            year:1925,
            price:14.19,
            stock:27,
            rating:4.3,
            review:33,
            desc:"The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island."
        },
        {
            name:"Animal Farm",
            slug:"animal-farm",
            author:"George Orwell",
            genre:"novel",
            image:"/images/img7.jpg",
            year:1945,
            price:15.75,
            stock:25,
            rating:4.5,
            review:46,
            desc:"George Orwell's timeless and timely allegorical novel—a scathing satire on a downtrodden society's blind march towards totalitarianism."
        },
        {
            name:"Pride and Prejudice",
            slug:"pride-and-prejudice",
            author:"Jane Austen",
            genre:"novel",
            image:"/images/img8.jpg",
            year:1813,
            price:11.75,
            stock:28,
            rating:4.1,
            review:34,
            desc:"Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner."
        },
    ],
    users:[
        {
            name:'Salman',
            email:'salman@mail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true
        },
        {
            name:'user',
            email:'user@mail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:false
        }
    ]
}

export default data