import { useMemo } from "react";
import { Column, useTable } from "react-table";
import { productsApi } from "../../API/api";
import { Products } from "../../API/api";

//https://github.com/TanStack/table/discussions/2664

const ProductsTable: React.FC = () => {
  const data: Products[] = [
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      category: "men's clothing",
      description:
        "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      category: "men's clothing",
      description:
        "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 4,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      category: "men's clothing",
      description:
        "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
  ];

  const columns: Column<Products>[] = [
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;
