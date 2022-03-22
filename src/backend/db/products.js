/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "p1",
    name: "batman",
    brandName: "SHFiguarts",
    price: 4999,
    discount: 5,
    tag: "sale",
    img: [
      `https://weebofigurines.sirv.com/images/bm1.jpg`,
      `https://weebofigurines.sirv.com/images/bm2.jpg`,
    ],
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
    img: [
      `https://weebofigurines.sirv.com/images/joker1.jpg`,
      `https://weebofigurines.sirv.com/images/joker2.jpg`,
    ],
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
    img: [
      `https://weebofigurines.sirv.com/images/im1.jpg`,
      `https://weebofigurines.sirv.com/images/im2.jpg`,
    ],
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
    brandName: "funko",
    price: 2999,
    discount: 10,
    img: [
      `https://weebofigurines.sirv.com/images/ds1.jpg`,
      `https://weebofigurines.sirv.com/images/ds2.jpg`,
    ],
    specification: {
      size: "4.5 inches",
      material: "PVC",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    description:
      "Funko welcomes Doctor Strange, as he prepares for new adventures in the upcoming Marvel Studios film Doctor Strange in the Multiverse of Madness! This Marvel figure includes effect parts and a cape for recreating your favourite dramatic scenes, as well as a newly sculpted body and Tamashii digital coloured head.",
    categoryName: "marvel",
  },
  {
    _id: "p5",
    name: "Sanemi",
    brandName: "Banpresto",
    price: 4999,
    discount: 10,
    tag: "sale",
    img: [
      `https://weebofigurines.sirv.com/images/sanemi1.jpg`,
      `https://weebofigurines.sirv.com/images/sanemi2.jpg`,
    ],
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
    name: "Gyomei",
    brandName: "banpresto",
    price: 9999,
    img: [
      `https://weebofigurines.sirv.com/images/gyomei1.jpg`,
      `https://weebofigurines.sirv.com/images/gyomei2.jpg`,
    ],
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
    img: [
      `https://weebofigurines.sirv.com/images/naruto1.jpg`,
      `https://weebofigurines.sirv.com/images/naruto2.jpg`,
    ],
    description:
      "Banpresto features highly detailed - Naruto Uzumaki, which is designed carefully keeping in mind the minute details of the character.",
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
    img: [
      `https://weebofigurines.sirv.com/images/luffy1.jpg`,
      `https://weebofigurines.sirv.com/images/luffy2.jpg`,
    ],
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
    img: [
      `https://weebofigurines.sirv.com/images/sabo1.jpg`,
      `https://weebofigurines.sirv.com/images/sabo2.jpg`,
    ],
    description:
      "Banpresto One Piece Magazine Figure Special Episode Luffy Vol.3 - Sabo. Sabo is the Revolutionary Army's chief of staff, recognized as the No. 2 of the entire organization outranked only by Supreme Commander Monkey D. Dragon.",
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
    name: "baji",
    brandName: "banpresto",
    price: 4500,
    tag: "new",
    img: [
      "https://weebofigurines.sirv.com/images/baaji1.jpg",
      `https://weebofigurines.sirv.com/images/baaji2.jpg`,
    ],
    description:
      "From the Tokyo Revengers anime comes a figure of Keisuke Baji! He has been faithfully recreated, a great addition to any collection!",
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
    name: "gojo",
    brandName: "banpresto",
    price: 8000,
    discount: 15,
    tag: "sale",
    img: [
      `https://weebofigurines.sirv.com/images/gojo1.jpg`,
      `https://weebofigurines.sirv.com/images/gojo2.jpg`,
    ],
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
    name: "megumi",
    brandName: "banpresto",
    price: 8000,
    img: [
      `https://weebofigurines.sirv.com/images/megumi1.jpg`,
      `https://weebofigurines.sirv.com/images/megumi2.jpg`,
    ],
    description:
      "From the currently airing anime series 'Jujutsu Kaisen' comes this figure from Banpresto! It features Megumi Fushiguru, one of the main characters, ready for action!",
    specification: {
      size: "7 inches",
      material: "ABS & PVC",
      age: "13+",
    },
    rating: 4.2,
    inStock: false,
    description:
      "Banpresto brings the adventures of Megumi Fushiguro, the young  jujutsu sorcerer at the Tokyo Jujutsu High. He is carefully sculpted using the assets from the show which brings out the confident personality of the stoic sorcerer.",
    categoryName: "jujutsu kaisen",
  },
  {
    _id: "p13",
    name: "deku",
    brandName: "funko",
    price: 1299,
    img: [
      `https://weebofigurines.sirv.com/images/deku1.jpg`,
      `https://weebofigurines.sirv.com/images/deku2.jpg`,
    ],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 4,
    inStock: false,
    description:
      "This Deku, complete with his iconic green hair and freckles comes as a Pop! vinyl figure. The Izuku Midoriya figure comes in Funko's classic themed display window box.",
    categoryName: "my hero academia",
  },
  {
    _id: "p14",
    name: "hulk",
    brandName: "funko",
    price: 2099,
    discount: 10,
    tag: "new",
    img: [
      `https://weebofigurines.sirv.com/images/hulk1.jpg`,
      `https://weebofigurines.sirv.com/images/hulk2.jpg`,
    ],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 3.8,
    inStock: true,
    description:
      "These cute figure of Hulk from marvel is bound to bring a smile to your face and become a talking point among friends. Look's perfect on your work/study desk. Ideal to decorate and bring some fandom right into your home.",
    categoryName: "marvel",
  },
  {
    _id: "p15",
    name: "ken ryuguji",
    brandName: "banpresto",
    price: 6000,
    discount: 5,
    tag: "new",
    img: [
      `https://weebofigurines.sirv.com/images/ryuji1.jpg`,
      `https://weebofigurines.sirv.com/images/ryuji2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "PVC & ABS",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    description:
      "Banpresto brings the Vice-president and one of the founding members of the Tokyo Manji Gang! with this impressive figure of Ken Ryuguji from the acclaimed Japanese Manga and Anime series.",
    categoryName: "tokyo revengers",
  },
  {
    _id: "p16",
    name: "sasuke",
    brandName: "banpresto",
    price: 14999,
    discount: 50,
    tag: "sale",
    img: [
      `https://weebofigurines.sirv.com/images/sasuke1.jpg`,
      `https://weebofigurines.sirv.com/images/sasuke2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "ABS",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    description:
      "Sasuke is carefully sculpted using the assets from the show which brings out every possible detail bringing out his Kawai heritage.",
    categoryName: "naruto",
  },
  {
    _id: "p17",
    name: "harley quinn",
    brandName: "bandai",
    price: 10999,
    tag: "new",
    img: [
      `https://weebofigurines.sirv.com/images/hq1.jpg`,
      `https://weebofigurines.sirv.com/images/hq2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "PVC",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    description:
      "She’s athletic, intelligent and quick with a joke. Her loyalty to her loved ones is the stuff of legend. She’s definitely the kind of gal you’d want to be friends with…except for the whole mallet-happy super-villain who hangs out with the Joker thing.",
    categoryName: "dc",
  },
  {
    _id: "p18",
    name: "catwoman",
    brandName: "bandai",
    price: 12000,
    discount: 10,
    img: [
      `https://weebofigurines.sirv.com/images/catwoman1.jpg`,
      `https://weebofigurines.sirv.com/images/catwoman2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "Plastic",
      age: "13+",
    },
    rating: 4.8,
    inStock: true,
    description:
      "Based on DC characters with universal appeal, DC Essentials is a line of 7 inch action figures that are appealing to both longtime collectors and those just starting out. These figures deliver authentic detail from a company with two decades of experience producing high-quality action figures.",
    categoryName: "dc",
  },
  {
    _id: "p19",
    name: "poison ivy",
    brandName: "bandai",
    price: 14999,
    img: [
      `https://weebofigurines.sirv.com/images/poison1.jpg`,
      `https://weebofigurines.sirv.com/images/poison2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "ABS",
      age: "13+",
    },
    rating: 5,
    inStock: false,
    description:
      "From Bandai comes one of the most polarizing character who bends the line between good and bad, Poison Ivy. Beautiful and deadly, Dr. Pamela Isley aka Poison Ivy displays another of her monstrous botanical creations in this beautiful'Poison Ivy DC Comics 1/10 Art Scale by Bandai'.",
    categoryName: "dc",
  },
  {
    _id: "p20",
    name: "wonder woman",
    brandName: "SHFiguarts",
    price: 19400,
    discount: 20,
    tag: "sale",
    img: [
      `https://weebofigurines.sirv.com/images/ww1.jpg`,
      `https://weebofigurines.sirv.com/images/ww2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "PVC",
      age: "13+",
    },
    rating: 4.9,
    inStock: true,
    description:
      "This brand new Golden Armor Wonder Woman collectible figure faithfully reproduced the Warrior Princess and her legendary armor with startling detail. This SH Figurarts figure stands over 7 inches tall and features multiple points of premium articulation.",
    categoryName: "dc",
  },
  {
    _id: "p21",
    name: "wolverine",
    brandName: "bandai",
    price: 10999,
    discount: 15,
    tag: "new",
    img: [
      `https://weebofigurines.sirv.com/images/wolverin1.jpg`,
      `https://weebofigurines.sirv.com/images/wolverin2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "PVC",
      age: "13+",
    },
    rating: 5,
    inStock: true,
    description:
      "Wolverine Sixth Scale Figure features a Marvel Comics inspired design with the head sculpt of everyone’s favorite mutant having a stern expression beneath his yellow and black finned cowl.",
    categoryName: "marvel",
  },
  {
    _id: "p22",
    name: "muzan",
    brandName: "funko",
    price: 2099,
    discount: 5,
    img: [
      `https://weebofigurines.sirv.com/images/muzan1.jpg`,
      `https://weebofigurines.sirv.com/images/muzan2.jpg`,
    ],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 4.8,
    inStock: true,
    description:
      "Muzan is the main antagonist of Demon Slayer: Kimetsu no Yaiba. He is the Demon King, the first of his kind, as well as the progenitor of all other demons in existence. ",
    categoryName: "demon slayer",
  },
  {
    _id: "p23",
    name: "kirishima",
    brandName: "funko",
    price: 1200,
    img: [
      `https://weebofigurines.sirv.com/images/kirishima1.jpg`,
      `https://weebofigurines.sirv.com/images/kirishima2.jpg`,
    ],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 3,
    inStock: false,
    description:
      "Eijiro Kirishima, also known as the Sturdy Hero: Red Riot, is a student in Class 1-A at U.A. High School, training to become a Pro Hero. Figure is from the popular Anime series, My Hero Academia.",
    categoryName: "my hero academia",
  },
  {
    _id: "p24",
    name: "zenitsu",
    brandName: "funko",
    price: 2999,
    discount: 10,
    tag: "sale",
    img: [
      `https://weebofigurines.sirv.com/images/zenitsu1.jpg`,
      `https://weebofigurines.sirv.com/images/zenitsu2.jpg`,
    ],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 4.3,
    inStock: true,
    description:
      "Zenitsu Agatsuma is one of the main protagonists of Demon Slayer: Kimetsu no Yaiba and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado. This figurin is completed with his iconic yellow hair and cute face.",
    categoryName: "demon slayer",
  },
  {
    _id: "p25",
    name: "kakashi",
    brandName: "bandai",
    price: 3999,
    img: [
      `https://weebofigurines.sirv.com/images/kakashi1.jpg`,
      `https://weebofigurines.sirv.com/images/kakashi2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "PVC",
      age: "13+",
    },
    rating: 3.9,
    inStock: true,
    description:
      "A true anime fan needs to have this naurto shippuden vibration stars - hatake kakashi action figure made by Banpresto. From the anime series naurto comes this highly detailed pvc statue. This figure is beautifully moulded with neat detailing to give a realistic feel.",
    categoryName: "naruto",
  },
  {
    _id: "p26",
    name: "inoske",
    brandName: "funko",
    price: 3199,
    discount: 5,
    img: [
      `https://weebofigurines.sirv.com/images/inoske1.jpg`,
      `https://weebofigurines.sirv.com/images/inoske2.jpg`,
    ],
    specification: {
      size: "4.5 inches",
      material: "Plastic",
      age: "5+",
    },
    rating: 4.8,
    inStock: true,
    description:
      "Inosuke is a member of the Demon Slayer Corps who makes use of the Breath of the Beast sword style, a style he pioneered. He is a travelling companion of the series' main protagonist Tanjiro Kamado.",
    categoryName: "demon slayer",
  },
  {
    _id: "p27",
    name: "nobara",
    brandName: "banpresto",
    price: 4999,
    img: [
      `https://weebofigurines.sirv.com/images/nobara1.jpg`,
      `https://weebofigurines.sirv.com/images/nobara2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "PVC & ABS",
      age: "13+",
    },
    rating: 4.5,
    inStock: false,
    description:
      "This 7 Inch tall Jujutsu Kaisen Nobara Kugisaki Figure by Banpresto is the figure you have been waiting for. She is carefully sculpted using the assets from the show which brings out the confident personality of the sorcerer. The figure also features a high amount of detailing and paintwork from head to toe especially on Nobara Kugisaki's attire.",
    categoryName: "jujutsu kaisen",
  },
  {
    _id: "p28",
    name: "tengen uzui",
    brandName: "banpresto",
    price: 4099,
    discount: 10,
    tag: "sale",
    img: [
      `https://weebofigurines.sirv.com/images/uzui1.jpg`,
      `https://weebofigurines.sirv.com/images/uzui2.jpg`,
    ],
    specification: {
      size: "7 inches",
      material: "ABS",
      age: "13+",
    },
    rating: 4.9,
    inStock: true,
    description:
      "Tengen Uzui Collectible Figure by Banpresto is the statue you have been waiting for. He is carefully sculpted using the assets from the show which brings out the features of the optimist slayer.",
    categoryName: "demon slayer",
  },
];
