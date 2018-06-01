import React from 'react';
import ReactDOM from 'react-dom';

import '../../css/book.css';


/**************************************************/
import {get3} from "../../api/api";

/**************************************************/



//最受关注的图书|虚构类   start
class BookFiction extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            book1: {
                subject_collection: {},
                subject_collection_items: []
            }
        }
    }

    componentDidMount(){
        get3('../data/book1.json',{}).then(res => {
            this.setState({
                book1: res
            })
        }).catch(err => {
            console.log(err);
        })
    }

    componentWillUnmount(){

    }

    render(){

        const book1 = this.state.book1;
        const liShow = book1.subject_collection_items.map((cell, index) =>{
            return(
                <li className="book-cell" key={index}>
                    <div className="book-img"><img src={cell.cover.url} /></div>
                    <div className="book-title">{cell.title}</div>
                </li>
            )
        })

        return(
            <section className="book-floor">
                <div className="book-name">{book1.subject_collection.name}</div>
                <ul className="book-list">
                    {liShow}
                </ul>
            </section>
        )
    }
}
//最受关注的图书|虚构类   end



//最受关注的他图书|非虚构类   start
class BookNonfiction extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            book2: {
                subject_collection: {},
                subject_collection_items: []
            },
        }
    }

    componentDidMount(){
        get3('../data/book2.json',{}).then(res => {
            console.log('get3-bookres',res)
            this.setState({
                book2: res
            })
        }).catch(err => {
            console.log(err);
        })
    }

    componentWillUnmount(){

    }

    render(){

        const book2 = this.state.book2;
        console.log('book2',book2)
        const liShow = book2.subject_collection_items.map((cell, index) =>{
            return(
                <li className="book-cell" key={index}>
                    <div className="book-img" style={{backgroundImage: "url("+cell.cover.url+")"}}>
                        {/*<img src={cell.cover.url} />*/}
                    </div>
                    <div className="book-title">{cell.title}</div>
                </li>
            )
        })

        return(
            <section className="book-floor">
                <div className="book-name">{book2.subject_collection.name}</div>
                <ul className="book-list">
                    {liShow}
                </ul>
            </section>
        )
    }
}
//最受关注的他图书|非虚构类   end




//书店  start
class BookStore extends  React.Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            book3: {
                header: {},
                subject_collection: {},
                subject_collection_items: []
            },
        }
    }

    componentDidMount(){
        get3('../data/book3.json',{})
            .then((res)=>{
                this.setState({
                    book3: res
                })
            })
            .catch((err)=>{

        })
    }


    componentWillUnmount(){}


    render(){
        const book3 = this.state.book3;
        console.log('book3',book3)
        // const liShow = book3
        return(
            <section className="book-floor">
                <dl className="book-up">
                    <dt></dt>
                </dl>
                <div className="book-down"></div>
            </section>
        )
    }
}
//书店  end



//发现好书
class BookFind extends React.Component{
    render(){
        return(
            <section>
                发现好书
            </section>
        )
    }
}





export default class BookPage extends React.Component{
    render(){
        return(
            <div className="book">
                <BookFiction />
                <BookNonfiction />
                <BookStore  />
            </div>
        )
    }
}