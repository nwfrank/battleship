import React, { useState } from "react";

type GridProps = {
  color: string;
  changeColorOnHover: boolean;
};

export const Grid: React.FC<GridProps> = ({ color, changeColorOnHover }) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const columns = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];

  type CellProps = {
    r: number;
    c: number;
  };

  const Cell: React.FC<CellProps> = ({ r, c }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        key={`cell-${r}-${c}`}
        style={{
          backgroundColor: isHovered && changeColorOnHover ? "red" : color,
          aspectRatio: "1 / 1",
          marginRight: "1px",
          marginBottom: "1px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `auto repeat(${columns.length}, 1fr)`,
        gridTemplateRows: `auto repeat(${rows.length}, 1fr)`,
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "black",
      }}
    >
      <div style={{ backgroundColor: "white" }} />

      {Array.from({ length: columns.length }).map((_, c) => (
        <div
          key={`col-${c}`}
          style={{
            textAlign: "center",
            fontWeight: "bold",
            padding: "4px",
            backgroundColor: "white",
            marginBottom: "1px",
          }}
        >
          {columns[c]}
        </div>
      ))}

      {Array.from({ length: rows.length }).map((_, r) => (
        <React.Fragment key={`row-${r}`}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              padding: "4px",
              backgroundColor: "white",
              marginRight: "1px",
            }}
          >
            {rows[r]}
          </div>

          {Array.from({ length: columns.length }).map((_, c) => (
            <Cell r={r} c={c} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
