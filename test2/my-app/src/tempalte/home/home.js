import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/reset.css';
import '../../css/home.css';
import Navlist from '../ssi/nav';


/**************************************************/




const movieHot = [
    { moviename: "复仇者联盟3"      , movieimg: require("../../images/p1.jpg") },
    { moviename: "后来的我们"       , movieimg: require("../../images/p2.jpg") },
    { moviename: "我是你妈"         , movieimg: require("../../images/p3.jpg") },
    { moviename: "青年马克思"       , movieimg: require("../../images/p4.jpg") },
    { moviename: "狂暴巨兽"         , movieimg: require("../../images/p5.jpg") },
    { moviename: "幕后玩家"         , movieimg: require("../../images/p6.jpg") },
    { moviename: "战犬瑞克斯"       , movieimg: require("../../images/p7.jpg") },
    { moviename: "巴霍巴利王2：终结" , movieimg: require("../../images/p8.jpg") }
]

const numbers = [1, 2, 3, 4, 5];


const tabName = {
    tabMovie: "电影",
    tabBook : "图书",
    tabRadio: "广播",
    tabTeam : "小组"
}

const tabKey = {
    tbBovie: "movie",
    tbBook:  "Book",
    tbRadio: "aRadio",
    tbTeam:  "Team"
}

//nav
// function Navlist(props) {
//     const tabName = props.tabName;
//     let tabMovie = "#2384E8";
//     let tabBook  = {
//         color: "#9F7860",
//         // fontSize: 10,
//         // backgroundColor:'red',
//         WebkitTransition: 'all', // 注意这里的首字母'W'是大写
//         msTransition: 'all' // 'ms'是唯一一个首字母需要小写的浏览器前缀
//     };
//     let tabTeam = "#2AB8CC";
//     return (
//         <nav className="nav-box">
//             <div className="nav-logo"></div>
//             <div className="nav-list">
//                 <a className="nav-cell" style={{color: tabMovie }}>{tabName.tabMovie}</a>
//                 <a className="nav-cell" style={tabBook}           >{tabName.tabBook}</a>
//                 <a className="nav-cell" style={{color: '#E4A813'}}>{tabName.tabRadio}</a>
//                 <a className="nav-cell" style={{color: tabTeam}}  >{tabName.tabTeam}</a>
//             </div>
//             <div className="nav-search"  style={{backgroundImage: 'url('+require('./images/search_01.png')+')'}}></div>
//         </nav>
//     )
// }

//Navlist2
class Navlist2 extends React.Component{


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
                    {/*style={{backgroundImage: 'url('+require('../../images/search_01.png')+')'}}*/}
                </div>
                <div className="nav-search"  style={{backgroundImage: 'url('+require('../../images/search_01.png')+')'}}></div>
            </nav>
        )
    }
}


//bannerList
class Bannerlist extends React.Component{

    render(){
        return (
            <div className="bannerSwiper">
                <ul className="banner-list">
                    <li className="banner-cell">
                        <img src={require('../../images/banner_01.gif')} alt=""  />
                    </li>
                </ul>
            </div>
        )
    }
}

//floor  影院热映
class Moviehot extends React.Component{

    render(){
        let movieList = this.props.movieHot;
        const listItems = movieList.map((item, index) =>
            // Correct! Key should be specified inside the array.
            <ListItem key={index} value={item} />
        );
        return(
            <section className="movie-box">
                <div className="movie-floor">
                    <div className="movie-title">
                        <span className="movie-txt">影院热映</span>
                        <span className="movie-more">更多</span>
                    </div>
                    <div className="movie-layer">
                        <ul className="movie-list">
                            {listItems}
                            {/*<li className="movie-cell">*/}
                            {/*<div className="movie-img"><img src={require('./images/p1.jpg')} /></div>*/}
                            {/*<div className="movie-name"></div>*/}
                            {/*<div className="movie-star"></div>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
function ListItem(props) {
    const value = props.value;
    return (
        <li className="movie-cell">
            <div className="movie-img"><img src={value.movieimg} /></div>
            <div className="movie-name">{value.moviename}</div>
            <div className="movie-star"></div>
        </li>
    )
}



//floor  免费在线电影
class Moviefree extends React.Component{

    render(){
        var textColor = "#CC0000";
        return(
            <section className="movie-box">
                <div className="movie-floor">
                    <div className="movie-title">
                        <span className="movie-txt">免费在线电影</span>
                        <span className="movie-more">更多</span>
                    </div>
                    <div className="movie-layer">
                        <ul className="movie-list">
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p1.jpg')} /></div>
                                <div className="movie-name">复仇者联盟3</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p2.jpg')} /></div>
                                <div className="movie-name">后来的我们</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p3.jpg')} /></div>
                                <div className="movie-name">我是你妈</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p4.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p5.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p6.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p7.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p8.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

//floor  新片速递
class Movienew extends React.Component{

    render(){
        var textColor = "#CC0000";
        return(
            <section className="movie-box">
                <div className="movie-floor">
                    <div className="movie-title">
                        <span className="movie-txt">新片速递</span>
                        <span className="movie-more">更多</span>
                    </div>
                    <div className="movie-layer">
                        <ul className="movie-list">
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p1.jpg')} /></div>
                                <div className="movie-name">复仇者联盟3</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p2.jpg')} /></div>
                                <div className="movie-name">后来的我们</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p3.jpg')} /></div>
                                <div className="movie-name">我是你妈</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p4.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p5.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p6.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p7.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                            <li className="movie-cell">
                                <div className="movie-img"><img src={require('../../images/p8.jpg')} /></div>
                                <div className="movie-name">青年马克思</div>
                                <div className="movie-star"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

//floor  发现好电影
class Moviefind extends React.Component{

    render(){
        var textColor = "#CC0000";
        return(
            <section className="movie-box">
                <div className="movie-floor">
                    <div className="movie-title">
                        <span className="movie-txt">发现好电影</span>
                        {/*<span className="movie-more">更多</span>*/}
                    </div>
                    <div className="movie-layer">
                        <ul className="movie-list">
                            <li className="movie-tag">
                                <div className="movie-find">同时入选IMDB250和豆瓣电影250的电影</div>
                            </li>
                            <li className="movie-tag">
                                <div className="movie-find">带你进入不正常的世界</div>
                            </li>
                            <li className="movie-tag">
                                <div className="movie-find">用电【影】来祭奠逝去的岁月</div>
                            </li>
                            <li className="movie-tag">
                                <div className="movie-find">女孩们的故事【电影】</div>
                            </li>
                        </ul>
                        <ul className="movie-list">
                            <li className="movie-tag">
                                <div className="movie-find">使用 App 【找电影】功能</div>
                            </li>
                            <li className="movie-tag">
                                <div className="movie-find">科幻是未来的钥匙——科幻启示录【科幻题材】</div>
                            </li>
                            <li className="movie-tag">
                                <div className="movie-find">美国生活面面观</div>
                            </li>
                            <li className="movie-tag">
                                <div className="movie-find">2015终极期待</div>
                            </li>
                            <li className="movie-tag">
                                <div className="movie-find">经典韩国电影——收集100部</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

//floor  分类浏览
class Movietype extends React.Component{

    render(){
        return(
            <section className="movie-box">
                <div className="movie-floor">
                    <div className="movie-title">
                        <span className="movie-txt">分类浏览</span>
                        {/*<span className="movie-more">更多</span>*/}
                    </div>
                    <div className="movie-layer">
                        <ul className="movie-types">
                            <li className="movie-tp">
                                <div className="movie-kind">经典<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">冷门佳片<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">豆瓣高分<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">动作<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">喜剧<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">爱青<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">悬疑<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">恐怖<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">科幻<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">治愈<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">文艺<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">成长<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">动画<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">华语<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">欧美<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">韩国<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind">日本<i className="icon-right"></i></div>
                            </li>
                            <li className="movie-tp">
                                <div className="movie-kind"><i className="icon-right"></i></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}


export default class Homepage extends React.Component{

    render(){
        return(
            <div className="home">
                {/*<Navlist tabKey={tabKey}/>*/}
                <Bannerlist />
                <Moviehot movieHot={movieHot} numbers={numbers} />
                <Moviefree />
                <Movienew />
                <Moviefind />
                <Movietype />
            </div>
        )
    }
}