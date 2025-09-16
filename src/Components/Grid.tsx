import React, { useState } from "react";
import Aircraft_Carrier1 from "../Images/Aircraft_Carrier1.png";
import Aircraft_Carrier2 from "../Images/Aircraft_Carrier2.png";
import Aircraft_Carrier3 from "../Images/Aircraft_Carrier3.png";
import Aircraft_Carrier4 from "../Images/Aircraft_Carrier4.png";
import Aircraft_Carrier5 from "../Images/Aircraft_Carrier5.png";

type GridProps = {
  color: string;
  player: "Opponent" | "Mine";
  ships: any;
};

export const Grid: React.FC<GridProps> = ({ color, player, ships }) => {
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
    const element = document.getElementById("Mine-9-13");
    console.log(element?.offsetWidth);

    return (
      <div
        key={`cell-${r}-${c}`}
        id={`${player}-${r}-${c}`}
        style={{
          backgroundColor: isHovered && player === "Opponent" ? "red" : color,
          aspectRatio: "1 / 1",
          borderBottom: "1px solid black",
          borderRight: "1px solid black",
          position: "relative",
          overflow: "visible",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {r === 1 && c === 1 && (
          <img
            src={Aircraft_Carrier1}
            alt={"ship"}
            style={{
              position: "absolute",
              width: "100%",
              height: "auto",
              left: 0,
            }}
          />
        )}
        {r === 1 && c === 2 && (
          <img
            src={Aircraft_Carrier2}
            alt={"ship"}
            style={{
              position: "absolute",
              width: "100%",
              height: "auto",
              left: 0,
            }}
          />
        )}
        {r === 1 && c === 3 && (
          <img
            src={Aircraft_Carrier3}
            alt={"ship"}
            style={{
              position: "absolute",
              width: "100%",
              height: "auto",
              left: 0,
            }}
          />
        )}
        {r === 1 && c === 4 && (
          <img
            src={Aircraft_Carrier4}
            alt={"ship"}
            style={{
              position: "absolute",
              width: "100%",
              height: "auto",
              left: 0,
            }}
          />
        )}
        {r === 1 && c === 5 && (
          <img
            src={Aircraft_Carrier5}
            alt={"ship"}
            style={{
              position: "absolute",
              width: "100%",
              height: "auto",
              left: 0,
            }}
          />
        )}
      </div>
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
        position: "relative",
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
            borderBottom: "1px solid black",
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
              borderRight: "1px solid black",
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
