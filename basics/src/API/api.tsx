import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Products = [
  {
    id: string;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: { rate: string; count: string };
  }
];

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, void>({
      query: () => `Products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
