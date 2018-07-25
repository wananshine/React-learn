import React,{ Component} from 'react';
import '../../css/update.css';
import { Carousel } from 'antd';
import Navlist from '../ssi/nav';

import { get, get2, get3 } from '../../api/api'
import { postJSON, getJSON } from '../../api/api2'
/**************************************************/







//floor  分类浏览
class Update extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            start: 0,
            count: 20,
            moreData: {
                subjects: []
            },
            total: 0
        })
    }

    //请求正在热映接口
    moreTheaters(start,count){
        //in_theaters
        const moreParams = this.props.moreParams;
        console.log('type:',moreParams)
        switch (moreParams) {
            case 'updateHot':
                //热门
                get3('../v2/movie/in_theaters?start='+start+'&count='+count)
                    .then((data)=>{
                        if(start === 0){
                            this.setState({
                                moreData: data,
                                total: data.total
                            })
                        }else{
                            this.setState({
                                total: data.total,
                                moreData: {
                                    subjects: this.state.moreData.subjects.concat(data.subjects),
                                }
                            })
                        }
                    })
                    .catch((err)=>{
                        console.log('err',err)
                    })
                break;
            case 'updateSoon':
                //即将 shang-ying
                get3('../v2/movie/coming_soon?start='+start+'&count='+count)
                    .then((data)=>{
                        if(start === 0){
                            this.setState({
                                moreData: data,
                                total: data.total
                            })
                        }else{
                            this.setState({
                                total: data.total,
                                moreData: {
                                    subjects: this.state.moreData.subjects.concat(data.subjects),
                                }
                            })
                        }
                    })
                    .catch((err)=>{
                        console.log('err',err)
                    })
                break;
            case 'updateFree':
                //免费
                get3('../v2/movie/weekly?start='+start+'&count='+count)
                    .then((data)=>{
                        if(start === 0){
                            this.setState({
                                moreData: data,
                                total: data.total
                            })
                        }else{
                            this.setState({
                                total: data.total,
                                moreData: {
                                    subjects: this.state.moreData.subjects.concat(data.subjects),
                                }
                            })
                        }
                    })
                    .catch((err)=>{
                        console.log('err',err)
                    })
                break;
            default:
            //n 与 case 1 和 case 2 不同时执行的代码
                break;
        }

    }

    //获取滚动条在Y轴上的滚动距离
    getScrollTop(){
        let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if(document.body){
            bodyScrollTop = document.body.scrollTop;
        }
        if(document.documentElement){
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop
    }

    //文档的总高度
    getScrollHeight(){
        let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if(document.body){
            bodyScrollHeight = document.body.scrollHeight;
        }
        if(document.documentElement){
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }

    //获取浏览器视口的高度
    getWindowHeight(){
        let windowHeight = 0;
        if(document.compatMode == "CSS1Compat"){
            windowHeight = document.documentElement.clientHeight;
        }else{
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }


    componentDidMount(){

        console.log('getJSON',getJSON)
        getJSON('../v2/movie/in_theaters',{}).then((data)=>{
            console.log('getJSON',JSON.parse(data))
        }).catch((err)=>{
            console.log('getJSON error',err)
        })

        window.onscroll = ()=>{
            console.log(this.state.start,this.state.moreData.subjects.length,this.state.total,this.getScrollHeight(), this.getScrollTop(), this.getWindowHeight())
            if(this.getScrollHeight() == this.getScrollTop() + this.getWindowHeight() && this.state.moreData.subjects.length<this.state.total){
                console.log("正在加载。。。。",this.state.start);
                this.setState({
                    start: this.state.start + 20
                })
                this.moreTheaters( this.state.start,this.state.count);
            }else{
                console.log("没有更多。。。。",this.state.start)
            }
        }
        console.log(1,this.props)
        this.moreTheaters(this.state.start,this.state.count);


    }


    //在组件接收到一个新的 props (更新后)时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(){

    }

    //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
    // shouldComponentUpdate(){}

    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate(){

    }

    //在组件完成更新后立即调用。在初始化时不会被调用
    componentDidUpdate(){

    }

    //在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount(){}

    render(){

        let moreData = this.state.moreData
        console.log(888,moreData)

        const listItems = moreData.subjects.map((item, index) =>{
            return (
                <li className="movie-cell" key={index}>
                    <a href={item.alt}>
                        <div className="movie-img"><img src={item.images.small} /></div>
                        <div className="movie-name">{item.title}</div>
                        <div className="movie-star"></div>
                    </a>
                </li>
            )

        });

        return(
            <section className="movie-box">
                <div className="movie-layer">
                    <h5 className="movie-title">
                        <span className="movie-txt">{moreData.title}</span>
                    </h5>
                    <ul className="movie-list">
                        {listItems}
                    </ul>
                </div>
            </section>
        )
    }
}


export default class Updatepage extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            moreParams: this.props.match.params.name
        })
    }

    componentDidMount(){
        console.log(4,this.props.match.params.name)
        console.log(5,this.props)
    }

    render(){
        const moreParams = this.state.moreParams
        return(
            <div className="update">
                <Update moreParams={moreParams} />
            </div>
        )
    }
}