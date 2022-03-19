/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

import { productURL } from "../../data/imageData";

export const products = [
  {
    _id: "p1",
    name: "batman",
    brandName: "SHFiguarts",
    price: 4999,
    discount: 5,
    tag: "sale",
    img: [`${productURL}bm1.jpg`, `${productURL}bm1.jpg`],
    description:
      "Based on Michael Keaton's take on the caped crusader in Tim Burton's Batman 1989 film which became a cult classic that revived the era of superhero movies. It also brought a much darker and cool Batman onscreen for the first time.",
    specification: {
      size: "8 inches",
      material: "ABS",
      age: "13+",
    },
    inStock: true,
    rating: 4.1,
    categoryName: "DC",
  },
  {
    _id: "p2",
    name: "joker",
    brandName: "SHFiguarts",
    price: 11999,
    discount: 20,
    tag: "new",
    img: [`${productURL}joker1.jpg`, `${productURL}joker2.jpg`],
    description:
      "The IKEMAN lineup famously consists of re-designs of famous Japanese illustrator Ricken in the Japanese Ikemen (“handsome men”) style. Joining the Ikemen lineup is the clown prince of Gotham. From the trademark purple suit to his mischievous grin to the long staff and 'Laughing Fish' held in each hand, this statue perfectly showcases the insanity of Batman's Arch Enemy Joker",
    specification: {
      size: "8 inches",
      material: "PVC",
      age: "13+",
    },
    inStock: true,
    rating: 4.2,
    categoryName: "DC",
  },
  {
    _id: "p3",
    name: "iron man",
    brandName: "SHFiguarts",
    price: 5999,
    img: [`${productURL}im1.jpg`, `${productURL}im2.jpg`],
    description:
      "One of the best figures in this innovative new series, the self-proclaimed Genius, Playboy, Billionaire, Philanthropist is covered in a shiny die-cast armor and each joint is carefully designed to recreate the articulation of a truly human body.",
    specification: {
      size: "8 inches",
      material: "ABS",
      age: "5+",
    },
    rating: 3,
    inStock: true,
    categoryName: "marvel",
  },
  {
    _id: "p4",
    name: "doctor strange",
    brandName: "SHFiguarts",
    price: 8999,
    discount: 10,
    img: [`${productURL}ds1.jpg`, `${productURL}ds2.jpg`],
    specification: {
      size: "8 inches",
      material: "PVC",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    description:
      "S.H.Figuarts welcomes Doctor Strange, as he prepares for new adventures in the upcoming Marvel Studios film Doctor Strange in the Multiverse of Madness! This Marvel figure includes effect parts and a cape for recreating your favourite dramatic scenes, as well as a newly sculpted body and Tamashii digital coloured head.",
    categoryName: "marvel",
  },
  {
    _id: "p5",
    name: "Sanemi Shinazugawa",
    brandName: "Banpresto",
    price: 4999,
    discount: 10,
    tag: "sale",
    img: [`${productURL}sanemi1.jpg`, `${productURL}sanemi2.jpg`],
    description:
      "This figure features Sanemi Shinazugawa from the anime series Demon Slayer: Kimetsu no Yaiba. Sanemi stands ready for battle with his trusty sword sheathed at his hip. In this Volume 15 version, Sanemi is colored in sepia tone, giving amazing detail to any collection.",
    specification: {
      size: "7 inches",
      material: "PVC and ABS",
      age: "13+",
    },
    inStock: true,
    rating: 3.8,
    categoryName: "demon slayer",
  },
  {
    _id: "p6",
    name: "Gyomei Himejima",
    brandName: "banpresto",
    price: 9999,
    img: [`${productURL}gyomei1.jpg`, `${productURL}gyomei2.jpg`],
    description:
      "From the popular anime series Demon Slayer: Kimetsu no Yaiba comes a figure of Gyoumei Himejima! He has been expertly recreated with great attention to detail.",
    specification: {
      size: "7 inches",
      material: "PVC",
      age: "13+",
    },
    inStock: true,
    rating: 4.9,
    categoryName: "demon slayer",
  },
  {
    _id: "p7",
    name: "Naruto",
    brandName: "banpresto",
    price: 8499,
    img: [`${productURL}naruto1.jpg`, `${productURL}naruto2.jpg`],
    description:
      "The Boruto Naruto Next Generation Vibration Stars series features highly detailed, collectable static figurines that are designed carefully keeping in mind the minute details of the character.",
    specification: {
      size: "8 inches",
      material: "ABS",
      age: "13+",
    },
    rating: 3,
    inStock: false,
    categoryName: "naruto",
  },
  {
    _id: "p8",
    name: "luffy",
    brandName: "funko",
    price: 1200,
    img: [`${productURL}luffy1.jpg`, `${productURL}luffy2.jpg`],
    specification: {
      size: "1.5 inches",
      material: "PVC",
      age: "5+",
    },
    rating: 5,
    inStock: true,
    description:
      "Monkey D. Luffy is determined to become the Pirate King by finding Gol D. Roger's legendary treasure. Your collection of One Piece needs Pop! Luffytaro to lead the Straw Hat Pirates to victory.",
    categoryName: "one piece",
  },
  {
    _id: "p9",
    name: "sabo",
    brandName: "banpresto",
    price: 12000,
    discount: 25,
    tag: "sale",
    img: [`${productURL}sabo1.jpg`, `${productURL}sabo2.jpg`],
    description:
      "Banpresto One Piece Magazine Figure Special Episode Luffy Vol.3 - Sabo",
    specification: {
      size: "7 inches",
      material: "ABS",
      age: "13+",
    },
    inStock: true,
    rating: 3.2,
    categoryName: "one piece",
  },
  {
    _id: "p10",
    name: "baaji",
    brandName: "banpresto",
    price: 4500,
    tag: "new",
    img: [`${productURL}baaji1.jpg`, `${productURL}baaji2.jpg`],
    description:
      "From the Tokyo Revengers anime comes a figure of Baji! He stands about 7 inches tall and has been faithfully recreated, a great addition to any collection!",
    specification: {
      size: "6 inches",
      material: "Plastic",
      age: "13+",
    },
    inStock: true,
    rating: 4.2,
    categoryName: "tokyo revengers",
  },
  {
    _id: "p11",
    name: "satoru gojo",
    brandName: "banpresto",
    price: 8000,
    discount: 15,
    tag: "sale",
    img: [`${productURL}gojo1.jpg`, `${productURL}gojo2.jpg`],
    description:
      "From the hit anime series Jujutsu Kaisen comes a new figure of Satoru Gojo! Satoru Gojo has been recreated in great detail.",
    specification: {
      size: "7 inches",
      material: "ABS & PVC",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    categoryName: "jujutsu kaisen",
  },
  {
    _id: "p12",
    name: "megumi fushiguro",
    brandName: "banpresto",
    price: 8000,
    img: [`${productURL}megumi1.jpg`, `${productURL}megumi2.jpg`],
    description:
      "From the currently airing anime series 'Jujutsu Kaisen' comes this figure from Banpresto! It features Yuji Itadori, the main character, ready for action!",
    specification: {
      size: "7 inches",
      material: "ABS & PVC",
      age: "13+",
    },
    rating: 4.2,
    inStock: false,
    categoryName: "jujutsu kaisen",
  },
  {
    _id: "p13",
    name: "deku",
    brandName: "funko",
    price: 1299,
    img: [`${productURL}deku1.jpg`, `${productURL}deku2.jpg`],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 4,
    inStock: false,
    description:
      "This Deku, complete with his iconic green hair and freckles comes as a Pop! vinyl figure. The Deku figure comes in Funko's classic themed display window box.",
    categoryName: "my hero academia",
  },
  {
    _id: "p14",
    name: "hulk",
    brandName: "funko",
    price: 2099,
    discount: 10,
    tag: "new",
    img: [`${productURL}hulk1.jpg`, `${productURL}hulk2.jpg`],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 3.8,
    inStock: true,
    description:
      "These are bound to bring a smile to your face and become a talking point among friends. These are ideal as gifts for a hardcore fan of any show/movie. It will look perfect on your work/study desk. Ideal to decorate and bring some fandom right into your home.",
    categoryName: "marvel",
  },
  {
    _id: "p15",
    name: "ken ryuguji",
    brandName: "banpresto",
    price: 6000,
    discount: 5,
    tag: "new",
    img: [`${productURL}ryuji1.jpg`, `${productURL}ryuji2.jpg`],
    specification: {
      size: "7 inches",
      material: "PVC & ABS",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    description: "",
    categoryName: "tokyo revengers",
  },
  {
    _id: "p16",
    name: "sasuke",
    brandName: "banpresto",
    price: 14999,
    discount: 50,
    tag: "sale",
    img: [`${productURL}sasuke1.jpg`, `${productURL}sasuke2.jpg`],
    specification: {
      size: "7 inches",
      material: "ABS",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    description:
      "This highly articulated 6 Inch tall Sasuke figure by Bandai is the figure you have been waiting for. Sasuke is carefully sculpted using the assets from the show which brings out every possible detail bringing out his Kawai heritage.",
    categoryName: "naruto",
  },
  {
    _id: "p17",
    name: "wolverine",
    brandName: "SHFiguarts",
    price: 10999,
    discount: 15,
    tag: "new",
    img: [`${productURL}wolverin1.jpg`, `${productURL}wolverin2.jpg`],
    specification: {
      size: "7 inches",
      material: "PVC",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    description: "",
    categoryName: "marvel",
  },
  {
    _id: "p18",
    name: "muzan",
    brandName: "funko",
    price: 2099,
    discount: 5,
    img: [`${productURL}muzan1.jpg`, `${productURL}muzan2.jpg`],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 4.8,
    inStock: true,
    description: "",
    categoryName: "demon slayer",
  },
  {
    _id: "p19",
    name: "kirishima",
    brandName: "funko",
    price: 1200,
    img: [`${productURL}kirishima1.jpg`, `${productURL}kirishima2.jpg`],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 3,
    inStock: false,
    description:
      "Figure is from the popular Anime series, My Hero Academia,  Kirishima Figure is not a bobblehead.",
    categoryName: "my hero academia",
  },
  {
    _id: "p20",
    name: "zenitsu",
    brandName: "funko",
    price: 2999,
    discount: 10,
    tag: "sale",
    img: [`${productURL}zenitsu1.jpg`, `${productURL}zenitsu2.jpg`],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 4.3,
    inStock: true,
    description: "",
    categoryName: "demon slayer",
  },
];
