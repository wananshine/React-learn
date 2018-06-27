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
    let tabMovie = "#2384E8";
    let tabBook  = {
        color: "#9F7860",
        // fontSize: 10,
        // backgroundColor:'red',
        WebkitTransition: 'all', // 注意这里的首字母'W'是大写
        msTransition: 'all' // 'ms'是唯一一个首字母需要小写的浏览器前缀
    };
    let tabTeam = "#2AB8CC";
    function searchHandle(props) {
        window.location.pathname = '/searchPage'
    }

    return (
        <nav className="nav-box" >
            <div className="nav-logo"></div>
            <div className="nav-list">
                <span className="nav-cell" data-key={tabKey.tbMovie}  ><Link to='/'         style={{color: tabMovie }}>{tabName.tMovie}</Link></span>
                <span className="nav-cell" data-key={tabKey.tbBook}   ><Link to='/bookpage' style={tabBook}>{tabName.tBook}</Link></span>
                <span className="nav-cell" data-key={tabKey.tabRadio} ><Link to='/bookpage' style={{color: '#E4A813'}}>{tabName.tRadio}</Link></span>
                <span className="nav-cell" data-key={tabKey.tbTeam}   ><Link to='/teampage' style={{color: tabTeam}}>{tabName.tTeam}</Link></span>
            </div>
            
            <div className="nav-search" onClick={searchHandle}>
                {/*<Link to='/searchPage' ></Link>*/}
            </div>
        </nav>
    )
}



//Navlist2
export class Navlist2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            clickDisplay:{
                display: 'block',  //控制display的值来隐藏与显示
            }
        }
    };


    searchHandle(props) {
        console.log(props);
        // window.location.pathname = '/searchPage';
        // if (this.state.clickDisplay.display == "block") {
        //     this.setState({
        //         clickDisplay: {
        //             display: "none"
        //         }
        //     });
        // } else {
        //     this.setState({
        //         clickDisplay: {
        //             display: "block"
        //         }
        //     });
        // }
    }


    render(){
        const clickDisplay = this.state.clickDisplay;
        const tabKey = this.props.tabKey;
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
            <nav  style={clickDisplay}>
                <div className="nav-box">
                    <div className="nav-logo"></div>
                    <div className="nav-list">
                        <span className="nav-cell" data-key={tabKey.tbMovie}  ><Link to='/'         style={{color: tabMovie }}>{tabName.tMovie}</Link></span>
                        <span className="nav-cell" data-key={tabKey.tbBook}   ><Link to='/bookpage' style={tabBook}>{tabName.tBook}</Link></span>
                        <span className="nav-cell" data-key={tabKey.tabRadio} ><Link to='/bookpage' style={{color: '#E4A813'}}>{tabName.tRadio}</Link></span>
                        <span className="nav-cell" data-key={tabKey.tbTeam}   ><Link to='/teampage' style={{color: tabTeam}}>{tabName.tTeam}</Link></span>
                    </div>

                    <div className="nav-search" onClick={this.searchHandle.bind(this)}>
                        <Link to='/searchPage' ></Link>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navlist2