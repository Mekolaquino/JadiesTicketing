import tourImg01 from "../images/cebu.jpg";
import tourImg02 from "../images/boracay.jpg";
import tourImg03 from "../images/coron.jpg";
import tourImg04 from "../images/elnido.jpg";
import tourImg05 from "../images/guimaras.jpg";
import tourImg06 from "../images/siagao.jpg";
import tourImg07 from "../images/singapore.jpg";

const tours = [
  {
    id: "01",
    title: "Tour to Cebu",
    city: "Cebu City",
    distance: 300,
    address: "Cebu",
    price: 10.000,
    maxGroupSize: 10,
    desc: "Affordable tour package",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "la Carmela de Boracay",
    city: "Boracay",
    distance: 400,
    address: "Boracay",
    price: "10,000",
    maxGroupSize: 8,
    desc: "back to boracay",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "SCoron",
    city: "Coron",
    distance: 500,
    address: "Coron",
    price: "12,688",
    maxGroupSize: 8,
    desc: "all in one",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Elnido",
    city: "Elnido",
    distance: 500,
    address: "Elnido",
    price: "10,888",
    maxGroupSize: 8,
    desc: "All in one",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Guimaras, Iloilo",
    city: "Iloilo",
    distance: 500,
    address: "Iloilo",
    price: "10,888",
    maxGroupSize: 8,
    desc: "All in one with airfare",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Island Hopping Tours",
    city: "Siargao",
    distance: 500,
    address: "Siargao",
    price: "14,688",
    maxGroupSize: 8,
    desc: "All in one with airfare",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Travel to Singapore",
    city: "Singapore",
    distance: 500,
    price: "25,999",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Coron",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
