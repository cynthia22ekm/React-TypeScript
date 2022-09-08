import { useTable } from "react-table";
import { productsApi } from "../../API/api";

const ProductsTable: React.FC = () => {
  const { data: Products } = productsApi.useGetProductsQuery();
  const data = Products ? Products : [];
  const columns = [
    {
      id: "category",
      accessor: "category",
      Header: "Category",
      minWidth: 20,
    },
    {
      id: "description",
      accessor: "description",
      Header: "Description",
      minWidth: 20,
    },
    {
      id: "id",
      accessor: "id",
      Header: "Id",
      minWidth: 20,
    },
    {
      id: "image",
      accessor: "image",
      Header: "Image",
      minWidth: 20,
    },
    {
      id: "price",
      accessor: "price",
      Header: "Price",
      minWidth: 20,
    },
    {
      id: "rating",
      accessor: "rating",
      Header: "Rating",
      minWidth: 20,
    },
    {
      id: "title",
      accessor: "title",
      Header: "Title",
      minWidth: 20,
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
