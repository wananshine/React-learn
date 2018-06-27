import React,{ Component} from 'react';
import {get3} from "../../api/api";

export default class Child extends Component{


    //在渲染前调用,在客户端也在服务端。
    componentDidMount() {
        console.log('this.props:',this.props, this.props.match.params.id);
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
        console.log('this.props:',this.props, this.props.match.params.id);
        // this.props.history.push(  '/home/'+'updateHot'  )
    }

    //在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(){
        console.log('this.props:',this.props, this.props.match.params.id);
    }


    render(){
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}