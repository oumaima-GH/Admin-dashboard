import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const ListTable = () => {
  const rows = [
    {
      id: 121565,
      product: "PRODUCT 1",
      img: "https://freepngimg.com/thumb/categories/673.png",
      customer: "CUSTOMER 1",
      date: "12 April",
      amount: 3,
      method: "Cash",
      status: "Approved",
    },
    {
      id: 121568,
      product: "PRODUCT 2",
      img: "https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt1c33e1158f1c5ecf/6319d97c454b1c2ebb3f4037/Carousel_iPhone14Plus_Purple_Placement01-PreOrder.png",
      customer: "CUSTOMER 2",
      date: "12 April",
      amount: 3,
      method: "Cash",
      status: "Approved",
    },
    {
      id: 121511,
      product: "PRODUCT 3",
      img: "https://d2j6dbq0eux0bg.cloudfront.net/images/17498625/2085784215.jpg",
      customer: "CUSTOMER 3",
      date: "12 April",
      amount: 3,
      method: "Cash",
      status: "Pending",
    },
    {
      id: 121536,
      product: "PRODUCT 4",
      img: "https://mediazone.ma/uploads/images/products/14285/14285-bLfKWm1k.webp",
      customer: "CUSTOMER 4",
      date: "12 April",
      amount: 3,
      method: "Cash",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="product img" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
