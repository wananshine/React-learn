import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link  } from 'react-router-dom'

import '../../css/head-nav.css'


const tabName = {
    tMovie: "电影",
    tBook : "图书",
    tRadio: "广播",
    tTeam : "小组"
}

//nav
function Navlist(props) {
    // const tabName = props.tabName;
    const tabKey = props.tabKey;
    console.log(props.tabKey)
    let tabMovie = "#2384E8";
    let tabBook  = {
        color: "#9F7860",
        // fontSize: 10,
        // backgroundColor:'red',
        WebkitTransition: 'all', // 注意这里的首字母'W'是大写
        msTransition: 'all' // 'ms'是唯一一个首字母需要小写的浏览器前缀
    };
    let tabTeam = "#2AB8CC";
    return (
        <nav className="nav-box">
            <div className="nav-logo"></div>
            <div className="nav-list">
                <span className="nav-cell" data-key={tabKey.tbMovie}  ><Link to='/'         style={{color: tabMovie }}>{tabName.tMovie}</Link></span>
                <span className="nav-cell" data-key={tabKey.tbBook}   ><Link to='/bookpage' style={tabBook}>{tabName.tBook}</Link></span>
                <span className="nav-cell" data-key={tabKey.tabRadio} ><Link to='/bookpage' style={{color: '#E4A813'}}>{tabName.tRadio}</Link></span>
                <span className="nav-cell" data-key={tabKey.tbTeam}   ><Link to='/teampage' style={{color: tabTeam}}>{tabName.tTeam}</Link></span>
            </div>
            <div className="nav-search" ></div>
        </nav>
    )
}

//Navlist2
export class Navlist2 extends React.Component{


    render(){
        let tabMovie = "#2384E8";
        let tabBook  = {
            color: "#9F7860",
            fontSize: 10,
            backgroundColor:'red',
            WebkitTransition: 'all', // 注意这里的首字母'W'是大写
            msTransition: 'all' // 'ms'是唯一一个首字母需要小写的浏览器前缀
        };
        let tabTeam = "#2AB8CC";

        return (
            <nav className="nav-box">
                <div className="nav-logo"></div>
                <div className="nav-list">
                    <a className="nav-cell" style={{color: tabMovie }}>电影</a>
                    <a className="nav-cell" style={tabBook}>图书</a>
                    <a className="nav-cell" style={{color: '#E4A813'}}>广播</a>
                    <a className="nav-cell" style={{color: tabTeam}}>小组</a>
                </div>
                <div className="nav-search" ></div>
            </nav>
        )
    }
}


export default Navlist