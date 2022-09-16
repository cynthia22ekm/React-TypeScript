import { Column } from "react-table";
import { Products } from "../../API/api";

export const columns: Column<Products>[] = [
  {
    accessor: "category",
    Header: "Category",
  },
  {
    accessor: "id",
    Header: "Id",
  },
  {
    accessor: "image",
    Header: "Image",
  },
  {
    accessor: "price",
    Header: "Price",
  },
  {
    accessor: "title",
    Header: "Title",
  },
];
