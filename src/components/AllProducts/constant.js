import chocolateDonut from "src/assets/images/ChocolateDonuts.jpeg";
import chocolateChipCookies from "src/assets/images/ChocolateChipCookies.jpeg";
import ChocoPastery from "src/assets/images/ChocoPastery.jpeg";
import chocoAlmondCake from "src/assets/images/chocoAlmondCake.jpeg";
import chocoholicCake from "src/assets/images/chocoholicCake.jpeg";
import crispyAndCreamyDonut from "src/assets/images/crispyAndCreamyDonut.jpeg";

export const ALL_PRODUCTS = [
    {
        image: chocolateDonut,
        name: "Chocolate Donut",
        description: "Chocolate Donut",
        price: 90,
        id: "1"
    },
    {
        image: chocolateChipCookies,
        name: "Chocolate Chip Cookies",
        description: "Chocolate Chip Cookies",
        price: 100,
        id: "2"
    },
    {
        image: ChocoPastery,
        name: "Chocolate Pastery",
        description: "Chocolate Pastery",
        price: 60,
        id: "3"
    },
    {
        image: chocoAlmondCake,
        name: "Choco Almond Cake",
        description: "Choco Almond Cake",
        price: 600,
        id: "4"
    },
    {
        image: chocoholicCake,
        name: "Chocoholic Cake",
        description: "Chocolate Pastery",
        price: 700,
        id: "5"
    },
    {
        image: crispyAndCreamyDonut,
        name: "Crispy And Creamy Donut",
        description: "Crispy And Creamy Donut",
        price: 85,
        id: "6"
    }
]

export const SORT_OPTIONS = {
    "PRICE_LOW_TO_HIGH":{
        label: "Price Low to High",
        value: "PRICE_LOW_TO_HIGH"
    },
    "PRICE_HIGH_TO_LOW":{
        label: "Price High to Low",
        value: "PRICE_HIGH_TO_LOW"
    }
}