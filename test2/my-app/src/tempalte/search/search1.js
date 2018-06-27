import React from 'react';
import ReactDOM from 'react-dom';

import '../../css/search.css';


/**************************************************/
import {get3} from "../../api/api";

/**************************************************/



//搜索   start
class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            keyText: '张艺谋',
            date: new Date(),
            searchData: {
                subjects: []
            }
        };
        this.searchHandle = this.searchHandle.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
    }

    componentDidMount(){
        const keyText = this.state.keyText;
        const keyUrl = '/v2/movie/search?q='+keyText;
        console.log(keyText,keyUrl);
        get3(keyUrl,{}).then(res => {
            console.log(res);
            this.setState({
                searchData: res
            })
        }).catch(err => {
            console.log(err);
        })

        // window.addEventListener('keydown', this.searchHandle)
    }

    componentWillUnmount(){

    }

    changeHandle(event){
        this.setState({
            keyText: event.target.value
        })
    }

    searchHandle(event){

        //  /v2/movie/search?q={text}
        //  `/movie/search?q=${query}&start=${start}`

        const keyText = this.state.keyText;
        const keyUrl = '/v2/movie/search?q='+keyText;
        console.log(keyText,keyUrl);
        get3(keyUrl,{}).then(res => {
            console.log(res);
            this.setState({
                searchData: res
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render(){

        const searchData = this.state.searchData;
        console.log(searchData);
        // if(searchData.subjects.length>0){
        //     const liItem = searchData.subjects.map((item, index) => {
        //         return (
        //             <div>
        //                 <div>书名：</div>
        //                 <div>出版时间：</div>
        //                 <hr />
        //             </div>
        //         )
        //     });
        // }

        return(
            <section className="search-layer">
                <div className="search-group">
                    <input type="text" className="seach-control" value={this.state.keyText} onChange={this.changeHandle} />
                    <label className="seach-label" onClick={this.searchHandle} onKeyDown={this.searchHandle}>搜索</label>
                </div>
                <div className="search-results">
                    <h3 className="search-title">{searchData.title}</h3>
                    <div className="search-note">
                    </div>
                    <ul className="search-list">
                        {
                            searchData.subjects.map((item, index) => {
                                return (
                                    <li className="search-cell" key={index}>
                                        <a href={item.alt}>
                                            <div className="search-img"><img src={item.images.small} /></div>
                                            <div className="search-name">{item.title}</div>
                                            {/*<hr />*/}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}
//搜索   end



export default class searchPage1 extends React.Component{
    render(){
        return(
            <div className="search">
                <Search />
            </div>
        )
    }
}