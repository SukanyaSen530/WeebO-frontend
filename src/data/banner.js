import { v4 as uuid } from "uuid";

// images
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import banner4 from "../assets/images/banner-4.jpg";

export const bannerData = [
  {
    id: uuid(),
    imgSrc: banner1,
    altText: "banner1",
    imageDescription: "Demon Slayer",
  },
  {
    id: uuid(),
    imgSrc: banner2,
    altText: "banner2",
    imageDescription: "Harry Potter",
  },
  {
    id: uuid(),
    imgSrc: banner3,
    altText: "banner3",
    imageDescription: "Marvel",
  },
  {
    id: uuid(),
    imgSrc: banner4,
    altText: "banner4",
    imageDescription: "List of Your Favorite Anime",
  },
];
