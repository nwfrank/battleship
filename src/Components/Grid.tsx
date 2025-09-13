import { useState } from "react";

export const Grid = () => {
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

  const Cell = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <td
        style={{
          backgroundColor: isHovered ? "red" : "#419ad9",
          height: 25,
          width: 25,
          padding: 0,
          border: "1px solid black",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  };

  return (
    <table
      style={{
        borderCollapse: "collapse",
        borderSpacing: 0,
      }}
    >
      <thead>
        <tr>
          <th
            key={"blank"}
            style={{
              width: 25,
              height: 25,
              padding: 0,
            }}
          ></th>
          {columns.map((item) => (
            <th
              key={item}
              style={{
                width: 25,
                height: 25,
                padding: 0,
              }}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowItem) => (
          <tr key={rowItem}>
            <td
              style={{
                width: 25,
                height: 25,
                padding: 0,
              }}
            >
              {rowItem}
            </td>
            {columns.map((_, i) => (
              <Cell key={i} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
