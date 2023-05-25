import React, { useState } from "react";

const Tabela = ({ columns, subItens, data }) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleRowClick = (rowId) => {
    if (expandedRows.includes(rowId)) {
      setExpandedRows(expandedRows.filter((id) => id !== rowId));
    } else {
      setExpandedRows([...expandedRows, rowId]);
    }
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data];
  if (sortConfig.key !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field} onClick={() => handleSort(column.field)}>
              {column.title}{" "}
              {sortConfig.key === column.field && (
                <span>{sortConfig.direction === "ascending" ? "▲" : "▼"}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <React.Fragment key={item.id}>
            <tr onClick={() => handleRowClick(item.id)}>
              {columns.map((column) => (
                <td key={column.field}>
                  {column.render
                    ? column.render(item[column.field])
                    : item[column.field]}
                </td>
              ))}
            </tr>
            {expandedRows.includes(item.id) && (
              <tr>
                <td colSpan={columns.length + 1}>
                  {subItens.map((subItem, subIndex) => (
                    <div key={subIndex}>{subItem.render(item.id)}</div>
                  ))}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
