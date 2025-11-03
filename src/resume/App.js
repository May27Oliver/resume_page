import React, { Component, Fragment, createRef } from "react";
import resume from "./resum.json";
import TimeLine from "./TimeLine";
import "./style/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.myAddress = createRef();
  }
  copiedEmail = (e) => {
    let address = document.getElementById("myEmailAddress");
    address.select();
    document.execCommand("Copy");
  };
  render() {
    return (
      <Fragment>
        <div className="protrait">
          <h1 className="about-me">關於我</h1>
          <div className="self-protrait-zone">
            <div className="self-portrait-box">
              <div className="self-protrait"></div>
            </div>
            <div className="id-card">
              <div className="card">
                <div className="personal-name">
                  <h2 className="tw-name">
                    陳韋齊<label className="en-name"> Oliver Chen</label>
                  </h2>
                </div>
                <div className="sidetation">擁有一台相機的網頁開發工程師。</div>
                <div className="intro-prief">
                  <span className="En">
                    5+ Years of Web Developer
                    <br />
                    Focus on :<br />
                    Ruby on Rails Backend Development<br />
                    JavaScript (Framework such as React)<br />
                    Typescript
                    <br />
                    CSS ( Tailwind css、SASS、Styled-Component )<br />
                    HTML ( JSX )<br />
                    Git
                    <br />
                    <br />
                    E-mail: (click it will copy!){" "}
                    <input
                      id="myEmailAddress"
                      onClick={this.copiedEmail}
                      value="oliverskychen@gmail.com"
                      readonly="true"
                    ></input>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ex-resume">
          <div className="experience wrap">
            <div className="column-title">
              <h3 className="title">經歷</h3>
            </div>
            <TimeLine resume={resume.work_exp}></TimeLine>
          </div>
        </div>
        <div className="resume">
          <div className="education wrap">
            <div className="column-title">
              <h3 className="title">學歷</h3>
            </div>
            <TimeLine resume={resume.resume}></TimeLine>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
