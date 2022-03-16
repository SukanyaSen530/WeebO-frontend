import { v4 as uuid } from "uuid";
import { IMAGE_URL } from "./url";

const bannerURL = IMAGE_URL + "v1647415515/banner/";
const brandURL = IMAGE_URL + "v1647450695/brands/";
const categoryURL = IMAGE_URL + "/v1647450927/category/";

export const bannerData = [
  {
    id: uuid(),
    imgSrc: `${bannerURL}banner-0.jpg`,
    altText: "banner0",
  },
  {
    id: uuid(),
    imgSrc: `${bannerURL}banner-1.jpg`,
    altText: "banner1",
    imageDescription: "Demon Slayer",
  },
  {
    id: uuid(),
    imgSrc: `${bannerURL}banner-2.jpg`,
    altText: "banner2",
    imageDescription: "Harry Potter",
  },
  {
    id: uuid(),
    imgSrc: `${bannerURL}banner-3.jpg`,
    altText: "banner3",
  },
  {
    id: uuid(),
    imgSrc: `${bannerURL}banner-4.jpg`,
    altText: "banner4",
    imageDescription: "All your favourite anime!",
  },
];

export const categoryData = [
  {
    id: uuid(),
    categoryName: "Naruto",
    imgSrc: `${categoryURL}naruto.jpg`,
    altText: "Naruto",
  },
  {
    id: uuid(),
    categoryName: "Demon Slayer",
    imgSrc: `${categoryURL}ds.jpg`,
    altText: "Naruto",
  },
  {
    id: uuid(),
    categoryName: "My Hero Academia",
    imgSrc: `${categoryURL}mha.jpg`,
    altText: "My Hero Academia",
  },
  {
    id: uuid(),
    categoryName: "Jujutsu Kaisen",
    imgSrc: `${categoryURL}jjk.jpg`,
    altText: "Jujutsu Kaisen",
  },
  {
    id: uuid(),
    categoryName: "Marvel",
    imgSrc: `${categoryURL}marvel.jpg`,
    altText: "Marvel",
  },
  {
    id: uuid(),
    categoryName: "One Piece",
    imgSrc: `${categoryURL}op.jpg`,
    altText: "One Piece",
  },
  {
    id: uuid(),
    categoryName: "DC",
    imgSrc: `${categoryURL}dc.jpg`,
    altText: "DC",
  },
  {
    id: uuid(),
    categoryName: "Tokyo Revengers",
    imgSrc: `${categoryURL}tr.jpg`,
    altText: "Tokyo Revengers",
  },
];

export const brandData = [
  {
    id: uuid(),
    brandName: "Banpresto",
    imgSrc: `${brandURL}banpresto.jpg`,
    altText: "Banpresto",
  },
  {
    id: uuid(),
    brandName: "Funko",
    imgSrc: `${brandURL}funko.jpg`,
    altText: "Funko",
  },
  {
    id: uuid(),
    brandName: "SHFiguarts",
    imgSrc: `${brandURL}shfigurearts.jpg`,
    altText: "SHFiguarts",
  },
];
