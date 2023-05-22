import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Laptop",
    description:
      "Discover the perfect companion for work, entertainment, and everything in between with our exceptional range of laptops. Designed to deliver unrivaled performance and versatility, our laptops are built to empower you in the digital world.",
  },
  {
    _id: uuid(),
    categoryName: "Mobiles",
    description:
      "Introducing our latest collection of cutting-edge mobile phones that combine sleek design with powerful performance. Our mobile phones are packed with advanced features and innovative technologies, offering you a seamless and immersive mobile experience",
  },
  {
    _id: uuid(),
    categoryName: "Headphones",
    description:
      "Immerse yourself in superior sound quality and elevate your audio experience with our exceptional range of headphones. Designed for music enthusiasts and avid gamers alike, our headphones deliver crystal-clear audio and exceptional comfort for extended listening sessions",
  },
];
