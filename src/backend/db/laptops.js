import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const laptops = [
  {
    _id: uuid(),
    name: "HP Spectre x360",
    specification: "15.6-inch, Intel i7, 16GB RAM, 512GB SSD",
    price: 12999.9,
    deliveryInDays: 5,
  },
  {
    _id: uuid(),
    name: "Dell XPS 13",
    specification: "13.3-inch, Intel i5, 8GB RAM, 256GB SSD",
    price: 9999.9,
    deliveryInDays: 3,
  },
  {
    _id: uuid(),
    name: "MacBook Pro",
    specification: "16-inch, Apple M1, 16GB RAM, 1TB SSD",
    price: 23999.9,
    deliveryInDays: 7,
  },
  {
    _id: uuid(),
    name: "Lenovo ThinkPad X1 Carbon",
    specification: "14-inch, Intel i7, 16GB RAM, 512GB SSD",
    price: 14999.9,
    deliveryInDays: 4,
  },
  {
    _id: uuid(),
    name: "Asus ROG Zephyrus G14",
    specification: "14-inch, AMD Ryzen 9, 32GB RAM, 1TB SSD",
    price: 17999.9,
    deliveryInDays: 6,
  },
  {
    _id: uuid(),
    name: "Acer Swift 3",
    specification: "14-inch, Intel i5, 8GB RAM, 256GB SSD",
    price: 6999.9,
    deliveryInDays: 2,
  },
  {
    _id: uuid(),
    name: "Microsoft Surface Laptop 4",
    specification: "13.5-inch, AMD Ryzen 7, 16GB RAM, 512GB SSD",
    price: 12999.9,
    deliveryInDays: 4,
  },
  {
    _id: uuid(),
    name: "HP Pavilion 15",
    specification: "15.6-inch, Intel i5, 8GB RAM, 1TB HDD",
    price: 7999.9,
    deliveryInDays: 3,
  },
  {
    _id: uuid(),
    name: "Dell Inspiron 14",
    specification: "14-inch, Intel i3, 4GB RAM, 128GB SSD",
    price: 4999.9,
    deliveryInDays: 5,
  },
  {
    _id: uuid(),
    name: "Lenovo Yoga C940",
    specification: "15.6-inch, Intel i7, 16GB RAM, 1TB SSD",
    price: 15999.9,
    deliveryInDays: 6,
  },
];
