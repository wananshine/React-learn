import React,{ Component } from 'react';
import {  BrowserRouter as Router, Link, Route  } from 'react-router-dom'
import { Carousel } from 'antd';
import '../../css/home.css';


/**************************************************/

import { get, get2, get3 } from '../../api/api'
import Updatepage from "./update";
import Child from "./Child";

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


//bannerList
class Bannerlist extends React.Component{

    

    render(){

        function onChange(a, b, c) {
            console.log('a:',a, 'b:',b, 'c:',c);
        }

        return (
            <div className="bannerSwiper">
                <Carousel className="banner-list" afterChange={onChange}>
                    <div className="banner-cell"><img src={require('../../images/banner_01.webp')} alt=""  /></div>
                    <div className="banner-cell"><img src={require('../../images/banner_02.webp')} alt=""  /></div>
                    <div className="banner-cell"><img src={require('../../images/banner_03.webp')} alt=""  /></div>
                    <div className="banner-cell"><img src={require('../../images/banner_04.webp')} alt=""  /></div>
                    <div className="banner-cell"><img src={require('../../images/banner_04.webp')} alt=""  /></div>
                </Carousel>
                {/* <ul className="banner-list">
                    <li className="banner-cell">
                        <img src={require('../../images/banner_01.gif')} alt=""  />
                    </li>
                </ul> */}
            </div>
        )
    }
}



//floor  影院热映
class Moviehot extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            // movieHot: {
            //     subject_collection: {},
            //     subject_collection_items: []
            // }
            movieHot: {
                subjects: []
            }
        };
    }

    //在渲染前调用,在客户端也在服务端。
    componentDidMount() {
        console.log('this.props:',this.props);
        // this.props.history.push(  '/home/updateHot'  );
        get3('../data/movie.json')
            .then((data)=>{
                this.setState({
                    // movieHot: data
                })
            })
            .catch((err)=>{
                console.log('err',err)
            });

        //in_theaters
        get3('v2/movie/in_theaters')
            .then((data)=>{
                this.setState({
                    movieHot: data
                })
            })
            .catch((err)=>{
                console.log('err',err)
            })
    }

    //在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
    componentWillUnmount() {
        // this.props.history.push(  '/home/'+'updateHot'  )
    }

    //在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(){

    }

    //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
    // shouldComponentUpdate(){}

    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate(){}

    //在组件完成更新后立即调用。在初始化时不会被调用
    componentDidUpdate(){}

    //在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount(){}

    //更多电影
    moreHandle(event){
        console.log("更多热门电影");
        // window.location.pathname='/home/updateHot'
    }

    render(){
        const ok = {
            id: 1,
            name: "updateHot"
        }

        let movieHotDate = this.state.movieHot;
        let movieList = this.props.movieHot;
        let subjects = movieHotDate.subjects.slice(0,8);

        console.log('movieHot',movieHotDate);
        console.log(this.props)

        const listItems = subjects.map((item, index) =>
            // Correct! Key should be specified inside the array.
            <ListItem key={index} value={item} />
        );
        return(

            <section className="movie-box">
                <div className="movie-floor">
                    <div className="movie-title">
                        <span className="movie-txt">{movieHotDate.title}</span>
                        {/*onClick={this.moreHandle.bind(this)}*/}
                        <span className="movie-more" onClick={this.moreHandle.bind(this)}>
                            <Link className="movie-to" to={`home/${ok.name}`} >更多</Link>
                            {/*<Link className="movie-to" to={`/home/${ok.name}`} >更多</Link>*/}
                            {/*<i className="movie-to" onClick={this.moreHandle} >更多</i>*/}
                            {/*<Link className="movie-to" to={{*/}
                            {/*pathname: '/home',*/}
                            {/*search: 'updateHot',*/}
                            {/*hash: '#the-hash',*/}
                            {/*state: { fromDashboard: true }*/}
                            {/*}} >更多</Link>*/}
                            <br/>
                        </span>
                    </div>
                    <div className="movie-layer">
                        <ul className="movie-list">
                            {listItems}
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
            <a href={value.alt}>
                <div className="movie-img"><img src={value.images.small} /></div>
                <div className="movie-name">{value.title}</div>
                <div className="movie-star"></div>
            </a>
        </li>
    )
}


//floor  即将上映
class Comingsoon extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){}

    componentWillUnmount(){}

    render(){
        return(
            <div></div>
        )
    }
}


//floor  免费在线电影
class Moviefree extends React.Component{

    componentDidMount(){
        console.log(this.props)
        // this.props.history.push(  '/home/updateFree'  );
    }

    moreHandle(event){
        console.log("更多免费在线电影")
    }

    render(){
        var textColor = "#CC0000";
        return(
            <section className="movie-box">
                <div className="movie-floor">
                    <div className="movie-title">
                        <span className="movie-txt">免费在线电影</span>
                        <span className="movie-more" onClick={this.moreHandle.bind(this)}>
                            <Link className="movie-to" to={`/home/updateFree`} >更多</Link>
                        </span>
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

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({ match }) => {
    console.log({ match })
    return(
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.url}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    )
};

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);



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

class Tabnav extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/react-router">React Router</Link></li>
                        <li><Link to="/leoashin">LeoAshin</Link></li>
                        <li><Link to="/justjavac">justjavac</Link></li>
                        <li><Link to="/reacttraining">React Training</Link></li>
                    </ul>
                    <hr/>
                    <Route path="/:id" component={Child}/>
                </div>
            </Router>
        )
    }
}


export default class Homepage extends React.Component{

    render(){
        return(
            <div className="home">
                {/*<Navlist tabKey={tabKey}/>*/}
                <Tabnav />
                <Bannerlist />
                <Moviehot movieHot={movieHot} />
                <Moviefree />
                <Movienew />
                {/*<Topics />*/}
                {/*<BasicExample />*/}
                <Moviefind />
                <Movietype />
            </div>
        )
    }
}