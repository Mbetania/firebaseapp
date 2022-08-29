export const dataList = [
    {
        id: 7,
        title: "Cuadro #1",
        img: "https://picsum.photos/200/150",
        price: 1500,
        stock: 5,
        category: "Cuadros",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 8,
        title: "Cuadro #2",
        img: "https://picsum.photos/200/150",
        price: 1300,
        stock: 8,
        category: "Cuadros",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 9,
        title: "Cuadro #3",
        img: "https://picsum.photos/200/150",
        price: 1100,
        stock: 10,
        category: "Cuadros",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 12,
        title: 'Capa Telar',
        img: 'https://picsum.photos/200/150',
        price: 6000,
        stock: 7,
        category: 'tejidos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 5,
        title: 'Remera Classic Rock',
        img: 'https://picsum.photos/200/150',
        stock: 5,
        price: 7000,
        category: 'remeras',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

export const getDatosMock = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(dataList)
        }, 2000)
    })
}

export const getProductsById = (itemId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataList.find(prod => prod.id === Number(itemId)))
        },2000)
    })
}