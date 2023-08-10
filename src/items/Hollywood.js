import React, { useContext } from "react";
import { Store } from "./DataStore";
import { NavLink } from "react-router-dom";
import Arrow from"./arrow.svg"

const Hollywood = () => {
  const [contextData] = useContext(Store);

  const filtered = contextData.filter((item) => {
    return item.category0 === "hollywood";
  });
  const filtered2 = contextData.filter((item) => {
    return item.category1 === "hollywoodtop1";
  });
  const filtered3 = contextData.filter((item) => {
    return item.category2 === "hollywoodtop";
  });
  let count = 2;

  return (
    <>
      <div className="page">
        <div className="page2">
          <div className="blog-container">
            <>
              <h4 className="heading">Hollywood</h4>
            </>
            {filtered.map((item, index) => {
              return (
                <div className="blog" key={index}>
                  <img className="blogimg" src={item.image} alt="not found" />

                  <NavLink
                    to={`/hollywood/${item.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="parabox">
                      <p className="blogheading">{item.heading}</p>
                      <p className="blogdetail">{item.smalldes}</p>
                    </div>
                  </NavLink>
                  <hr className="gaphr" />
                </div>
              );
            })}
          </div>

          <div className="blog-container2">
            <>
              <h4 className="heading1">Top posts</h4>
            </>
            <>
              {filtered2.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="blog2" key={index}>
                      <img src={item.image} className="blogimg1" alt="img" />
                      <div className="flexnum">
                        <NavLink
                          to={`/hollywood/${item.id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <div className="parabox">
                            <p className="blogheading">{item.heading}</p>
                            <p className="blogdetail">{item.smalldes}</p>
                          </div>
                        </NavLink>
                        <div className="num1">1</div>
                      </div>
                    </div>
                    <hr className="gaphr2" />
                  </div>
                );
              })}
            </>
            <>
              {filtered3.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="blog3" key={index}>
                      <img src={item.image} className="blogimg2" alt="img" />
                      <div className="flexnum">
                        <NavLink
                          to={`/hollywood/${item.id}`}
                          style={{ textDecoration: "none", color: "black" }}>
                          <div className="parabox2">
                            <p className="blogheading2">{item.heading}</p>
                            <div className="num">{count++}</div>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                    <hr className="gaphr2" />
                  </div>
                );
              })}
            </>
            <div className="advertisement">Advertisement</div>
          </div>
        </div>
        <div className="loadmore">
          
          <img src={Arrow} alt="not found"  className="arrow"/>
          <p className="load">Load more</p>
        </div>
      </div>
    </>
  );
};

export default Hollywood;
