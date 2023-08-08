import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "./DataStore";

const Common = () => {
  const params = useParams();
  const [contextData] = useContext(Store);
    const navigate=useNavigate()
    useEffect(() => {
    
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <>
    
      <div className="commonpage">
        <button onClick={()=>{navigate(-1)}}>Back</button>
        <div className="outerdiv">
          <div className="likeshare">
            <div>
              <img
                className="clap"
                src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=cf55aaa5-c61c-40c7-8fb8-5622c86d93bb&api_key=CometServer1&access_token=1690653480_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_ba36380504d4daa61391bc734a30974ca83f8cd7"
                alt="not found"
              />
              <span className="shareinner">9.3k</span>
            </div>
            <div>
              <img
                className="share"
                src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=178e3f84-dd79-4832-8c69-7926133e32ab&api_key=CometServer1&access_token=1690653480_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_ba36380504d4daa61391bc734a30974ca83f8cd7"
                alt="not found"
              />
              <span className="shareinner"> share this artical</span>
            </div>
          </div>
          <div className="blogcontent">
            {contextData
              .filter((item) => parseInt(item.id) === parseInt(params.id))
              .map((item, index) => {
                return (
                  <>
                    <h2 className="contentheading" >{item.heading}</h2>
                    <div className="profile" key={index}>
                      <img className="profile-img1"
                        src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1690653480_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_ba36380504d4daa61391bc734a30974ca83f8cd7"
                        alt="not found"
                      />

                      <b className="name-time">
                        Dhiraj Sakore
                        <br />
                        <p style={{ color: "#d1caca", fontSize: "12px" }}>
                          july 29,2023:10min Read
                        </p>
                      </b>
                      <div className="socalmedia">
                        <img
                          src="https://img.icons8.com/?size=1x&id=118497&format=png"
                          className="media"
                          alt="not found"
                        />
                        <img
                          src="https://img.icons8.com/?size=1x&id=13963&format=png"
                          className="media"
                          alt="not found"
                        />
                        <img
                          src="https://img.icons8.com/?size=1x&id=32323&format=png"
                          className="media"
                          alt="not found"
                        />
                        <img
                          src="https://img.icons8.com/?size=1x&id=19318&format=png"
                          className="media"
                          alt="not found"
                        />
                      </div>
                    </div>
                    <img
                      src={item.image}
                      className="common-img"
                      alt="not found"
                    />
                    <p className="des">{item.description}</p>

                    <div className="profile">
                      <img
                        className="profilepic2"
                        src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1690653480_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_ba36380504d4daa61391bc734a30974ca83f8cd7"
                        alt="not found"
                      />
                      <p style={{ color: "#d1caca", fontSize: "12px" }}></p>
                      <b style={{ paddingTop: "4.5%" }}>
                        Written BY
                        <br />
                        <p style={{ color: "#d1caca", fontSize: "12px" }}>
                          Dhiraj Sakore
                        </p>
                      </b>
                    </div>

                    <div className="hrbox">
                      <hr className="prhr" />
                    </div>
                    <>
                      <div className="dynamic-bottom">
                        <div className="dynamic-bottom1">
                          <b>More From The Siren</b>
                          <hr className="prhr" />
                        </div>

                        <div className="dynamic-bottom2">
                          <div className="cards">
                            <img
                              src="https://nitsaholidays.in/uploads/blog/588661nitsa.jpg"
                              alt="not found"
                              className="last-img"
                            />
                            <p className="pstyle">
                              The middle class can no longer own a home in
                              Switzerland, according to Martin Neff, chief
                              economist at Raiffeisen Bank.
                            </p>
                            <div className="profile">
                              <img
                                className="profilepic3"
                                src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1690653480_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_ba36380504d4daa61391bc734a30974ca83f8cd7"
                                alt="not found"
                              />
                              <p
                                style={{ color: "#d1caca", fontSize: "12px" }}
                              ></p>
                              <b style={{ paddingTop: "4.5%" }}>
                                Dhiraj Sakore
                                <br />
                                <p
                                  style={{ color: "#d1caca", fontSize: "12px" }}
                                >
                                  Aug 10: (4min Read)
                                </p>
                              </b>
                            </div>
                          </div>
                          <div className="cards">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2g5fUNCawmvMcalxJxv0tLRwgpRwwsDoNw&usqp=CAU"
                              alt="not found"
                              className="last-img"
                            />
                            <p  className="pstyle">
                              Walmart has bought stake in one of India's most
                              popular e-commerce firm, Flipkart. The company has
                              paid $1.4 billion to buy out hedge fund Tiger
                            </p>
                            <div className="profile">
                              <img
                                className="profilepic3"
                                src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1690653480_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_ba36380504d4daa61391bc734a30974ca83f8cd7"
                                alt="not found"
                              />
                              <p
                                style={{ color: "#d1caca", fontSize: "12px" }}
                              ></p>
                              <b style={{ paddingTop: "4.5%" }}>
                                Dhiraj Sakore
                                <br />
                                <p
                                  style={{ color: "#d1caca", fontSize: "12px" }}
                                >
                                  Aug 10: (4min Read)
                                </p>
                              </b>
                            </div>
                          </div>
                          <div className="cards">
                            <img
                              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/markets-end-four-week-rally-but-43-small-cap-stocks-gain-10-26-ep_7-sixteen_nine.jpeg?size=948:533"
                              alt="not found"
                              className="last-img"
                            />
                            <p  className="pstyle">
                              Domestic equity market closed lower on Friday amid
                              negative global cues and profit-booking. Sensex
                              fell 106 points to end the session at 66,160..
                            </p>
                            <div className="profile">
                              <img
                                className="profilepic3"
                                src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1690653480_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_ba36380504d4daa61391bc734a30974ca83f8cd7"
                                alt="not found"
                              />
                              <p
                                style={{ color: "#d1caca", fontSize: "12px" }}
                              ></p>
                              <b style={{ paddingTop: "4.5%" }}>
                                Dhiraj Sakore
                                <br />
                                <p
                                  style={{ color: "#d1caca", fontSize: "12px" }}
                                >
                                  Aug 10 (4min Read)
                                </p>
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </>
                );
              })}
          </div>
        </div>
      </div>

      <div className="common-nav"> 
        <div className="common-logo"><span className='the'>The</span> <span className='siren'>Siren</span></div> 
         <div className="get-started">Get Started</div>
      </div>

    </>
  );
};

export default Common;
