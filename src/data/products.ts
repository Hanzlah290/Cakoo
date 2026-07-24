export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  description: string;
  price: string;
  image: string;
  featured: boolean;
  highlight: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Belgian Chocolate",
    category: "Chocolate",
    description:
    "Rich Belgian chocolate sponge layered with silky chocolate ganache and finished with premium cocoa.",
    price: "Rs. 3,200",
    image: "/images/products/belgian.jpeg",
    featured: true,
    highlight: false,
  },
  {
    id: 2,
    name: "Blueberry Bliss",
    category: "Cheesecake",
    description:
      "Creamy cheesecake topped with fresh blueberries for a perfectly balanced sweet and tangy flavor.",
    price: "Rs. 3,800",
    image: "/images/products/blueberry.png",
    featured: true,
    highlight: true,
  },
  {
    id: 3,
    name: "New York Cheesecake",
    category: "Cheesecake",
    description:
      "A timeless baked cheesecake with a buttery biscuit crust and irresistibly smooth texture.",
    price: "Rs. 2,900",
    image: "/images/products/cheesecake.jpeg",
    featured: true,
    highlight: false,
  },
  {
    id: 4,
    name: "Chocolate Fudge",
    category: "Chocolate",
    description:
      "Moist chocolate sponge generously layered with rich fudge frosting for true chocolate lovers.",
    price: "Rs. 3,600",
    image: "/images/products/fudge.jpeg",
    featured: false,
    highlight: false,
  },
  {
    id: 5,
    name: "Lotus Biscoff",
    category: "Specialty",
    description:
      "Creamy Lotus Biscoff cake infused with caramelized biscuit spread and crunchy cookie crumbs.",
    price: "Rs. 3,900",
    image: "/images/products/lotus.jpeg",
    featured: false,
    highlight: false,
  },
  {
    id: 6,
    name: "Ferrero Rocher",
    category: "Specialty",
    description:
      "A luxurious chocolate cake inspired by Ferrero Rocher with hazelnut cream and roasted nuts.",
    price: "Rs. 4,200",
    image: "/images/products/ferrero.jpeg",
    featured: false,
    highlight: false,
  },
  {
    id: 7,
    name: "Love Story Cake",
    category: "Birthday",
    price: "Rs. 3,700",
    image: "/images/products/love-story.jpeg",
    description:
      "Elegant vanilla celebration cake finished with silky buttercream, delicate heart accents, and handcrafted details for life's sweetest moments.",
      featured: false,
      highlight: false,
  },
  {
    id: 8,
    name: "Galaxy Celebration Cake",
    category: "Birthday",
    price: "Rs. 6,200",
    image: "/images/products/galaxy.jpeg",
    description:
      "A premium two-tier celebration cake inspired by the night sky, decorated with handcrafted stars, planets, and a playful rocket theme.",
      featured: false,
      highlight: false,
  },
  {
    id: 9,
    name: "Red Velvet Dream",
    category: "All",
    price: "Rs. 3,500",
    image: "/images/products/red-velvet.jpeg",
    description:
      "Soft and velvety red velvet sponge layered with smooth cream cheese frosting and finished with a delicate crumb garnish.",
      featured: false,
      highlight: false,
  }
];

export const featuredProducts = products.filter(
  (product) => product.featured
);

export const categories = [
  "All",
  "Chocolate",
  "Cheesecake",
  "Specialty",
  "Birthday",
] as const;

export type ProductCategory = (typeof categories)[number];