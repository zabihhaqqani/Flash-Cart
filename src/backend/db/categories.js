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
    url: "https://www.stuff.tv/wp-content/uploads/sites/2/2021/04/Stuff-Best-Laptop-Lead.png",
  },
  {
    _id: uuid(),
    categoryName: "Phone",
    description:
      "Introducing our latest collection of cutting-edge mobile phones that combine sleek design with powerful performance. Our mobile phones are packed with advanced features and innovative technologies, offering you a seamless and immersive mobile experience.",
    url: "https://cdn.thewirecutter.com/wp-content/media/2022/06/android-phone-2048px-0004-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=1.5",
  },
  {
    _id: uuid(),
    categoryName: "Headphones",
    description:
      "Immerse yourself in superior sound quality and elevate your audio experience with our exceptional range of headphones. Designed for music enthusiasts and avid gamers alike, our headphones deliver crystal-clear audio and exceptional comfort for extended listening sessions.",
    url: "https://cdn.thewirecutter.com/wp-content/uploads/2020/03/audiophile-headphones-2020-2x1-lowres9454.jpg?auto=webp&quality=75&crop=2:1&width=1024",
  },
];
