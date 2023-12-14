import React from "react";
import "./featured.scss";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  MoreVertRounded,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertRounded fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} />
        </div>
        <p className="title">Today's total sales</p>
        <p className="amount">$420</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          soluta.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownRounded fontSize="small" />

              <div className="resultAmount">$20k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRounded fontSize="small" />

              <div className="resultAmount">$50k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRounded fontSize="small" />

              <div className="resultAmount">$50k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
