import React, { Component,Fragment } from 'react';
import resume from "./resum.json" 
import TimeLine from './TimeLine'
import './style/style.css'

class App extends Component {
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
                                        陳韋齊<label className="en-name">  Oliver Chen</label>
                                    </h2>
                                    
                                </div>
                                <div className="sidetation">
                                    擁有一台相機的小前端。
                                </div> 
                                <div className="intro-prief">
                                      80後，生在影像和資訊爆炸年代，遊走在電影幕後與前端開發間的Web開發者，曾經想看遍世上每一部好電影，並參與每部精采的國片拍攝，<span className="shame-issue">無奈閃到腰，</span>現在的目標是成為一位有台相機且稱職的<span className="web-dev">Web Developer</span>。
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