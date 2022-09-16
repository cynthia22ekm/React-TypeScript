//Reference taken from https://react-table-v7.tanstack.com/docs/api/useTable,//https://github.com/TanStack/table/discussions/2664

import { Column, useTable } from "react-table";
import styled from "styled-components";
import { productsApi } from "../../API/api";
import { Products } from "../../API/api";
import { columns } from "./Columns";
import { data } from "./Data";

const ProductsTable: React.FC = () => {
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

  const StyledTable = styled.table`
    border: 1px solid black;
    margin-left: 20px;
    margin-top: 50px;
    border-collapse: collapse;
  `;

  const Styledth = styled.th`
    border: 1px solid black;
  `;

  const Styledtd = styled.td`
    border: 1px solid black;
  `;

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Styledth {...column.getHeaderProps()}>
                {column.render("Header")}
              </Styledth>
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
                return (
                  <Styledtd {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </Styledtd>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default ProductsTable;
