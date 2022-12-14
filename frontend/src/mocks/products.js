// const dataList = [
// {
//     id: 7,
//     title: "Cuadro #1",
//     img: "https://picsum.photos/200/150",
//     price: 1500,
//     stock: 5,
//     category: "Cuadros",
//     description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
// {
//     id: 8,
//         title: "Cuadro #2",
//             img: "https://picsum.photos/200/150",
//                 price: 1300,
//                     stock: 8,
//                         category: "Cuadros",
//                             description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
// {
//     id: 9,
//         title: "Cuadro #3",
//             img: "https://picsum.photos/200/150",
//                 price: 1100,
//                     stock: 10,
//                         category: "Cuadros",
//                             description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
// {
//     id: 12,
//         title: 'Capa Telar',
//             img: 'https://picsum.photos/200/150',
//                 price: 6000,
//                     stock: 7,
//                         category: 'tejidos',
//                             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     },
// {
//     id: 5,
//         title: 'Remera Classic Rock',
//             img: 'https://picsum.photos/200/150',
//                 stock: 5,
//                     price: 7000,
//                         category: 'remeras',
//                             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     },
// ];
const dataList = [
    {
        id: 1,
        img: "http://1.bp.blogspot.com/-qxM5EzxDDBU/UVA4Xc6uuCI/AAAAAAAAhzw/4WUUzyrWc1Q/s1600/wolverine-poster1.jpg",
        title: "Wolverine, The",
        genre: "Action",
        stock: 28,
        price: 148.77,
        year: 1937,
    },
    {
        id: 2,
        img: "https://alchetron.com/cdn/Paper-Man-2009-film-images-7097ff47-dd6a-4767-8236-3a1d2f0ec9a.jpg",
        title: "Paper Man",
        genre: "Comedy",
        year: 2010,
        price: 11.38,
        stock: 81,
    },
    {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/en/9/99/Tales-of-manhattan-1942.jpg",
        title: "Tales of Manhattan",
        genre: "Comedy",
        year: 2000,
        price: 3.69,
        stock: 58,
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/51zUz0KU-yL.jpg",
        title: "House of Mirth, The",
        genre: "Romance",
        year: 1991,
        price: 8.29,
        stock: 46,
    },
    {
        id: 5,
        img: "https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fpeliculas%2F000%2F054%2F108%2Fdriven-el-origen-de-la-leyenda-1.jpg&nuevoancho=683&medio=abc",
        title: "Driven",
        genre: "Action",
        year: 1990,
        price: 9.57,
        stock: 57,
    },
    {
        id: 6,
        img: "https://1.bp.blogspot.com/-mk2NMclbbT0/XuaPQEXM_zI/AAAAAAAAtaA/2rBIrkcsBNYI_I4BiF9AQhb_YbsOVOaDgCK4BGAsYHg/s1627/Screenshot_20200615-065654_Chrome.jpg",
        title: "Pandora's Box (B??chse der Pandora, Die)",
        genre: "Drama",
        year: 1993,
        price: 14.77,
        stock: 7,
    },
    {
        id: 7,
        img: "https://i.pinimg.com/originals/81/3b/12/813b129598ece66d1e285af7d4317040.jpg",
        title: "Mysterious Mr. Moto",
        genre: "Drama",
        year: 1951,
        price: 12.43,
        stock: 3,
    },
    {
        id: 8,
        img: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d696cc9b221622584a249858dbe6ce61_d9a5a51d-3154-4e94-b981-bf01b103d34c_480x.progressive.jpg?v=1573590455",
        title: "Hellraiser: Inferno",
        genre: "Horror",
        year: 1998,
        price: 7.01,
        stock: 39,
    },
    {
        id: 9,
        img: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/93641553c23b282012e1b370eb5a1ac5_277d183d-8a0b-498e-b6c7-6b2fb27d8c3e_480x.progressive.jpg?v=1573617434",
        title: "Silence, The (Sokout)",
        genre: "Drama",
        year: 2010,
        price: 5.06,
        stock: 92,
    },
];

export const getDatosMock = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(dataList)
        }, 2000)
    })
}

// export const getProductsById = (itemId) =>{
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(dataList.find(prod => prod.id === Number(itemId)))
//         },2000)
//     })
// }
export default dataList