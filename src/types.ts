export type User = {
  id: number;
  name: string;
};

export type Author = {
  id: number;
  name: string;
};

export type Book = {
  id: number;
  title: string;
  description: string;
  authorId: number;
  price: number;
  url: string;
  imageSrc: string;
};
