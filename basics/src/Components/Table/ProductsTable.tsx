//Reference taken from https://react-table-v7.tanstack.com/docs/api/useTable,//https://github.com/TanStack/table/discussions/2664
//https://www.youtube.com/watch?v=CQ165vFGLVs&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=4

import { useTable } from "react-table";
import styled from "styled-components";
import { columns } from "./Columns";
import { data } from "./Data";

const ProductsTable: React.FC = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
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
    background: green;
  `;

  const Styledtd = styled.td`
    border: 1px solid black;
    text-align: center;
  `;

  const StyledFooter = styled.tfoot`
    background: green;
    font-weight: bold;
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
      <StyledFooter>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <Styledtd {...column.getFooterProps}>
                {column.render("Footer")}
              </Styledtd>
            ))}
          </tr>
        ))}
      </StyledFooter>
    </StyledTable>
  );
};

export default ProductsTable;
