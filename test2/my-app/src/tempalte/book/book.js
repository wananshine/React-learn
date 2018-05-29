import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/reset.css';
import '../../css/home.css';
import Navlist from '../ssi/nav';


/**************************************************/


//最受关注的图书|虚构类
class BookFiction extends React.Component{
    render(){
        return(
            <section>
                虚构类
            </section>
        )
    }
}



//最受关注的他图书|非虚构类
class BookNonfiction extends React.Component{
    render(){
        return(
            <section>
                非虚构类
            </section>
        )
    }
}


//书店
class BookStore extends  React.Component{
    render(){
        return(
            <section>
                书店书籍
            </section>
        )
    }
}



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
            <div>
                <BookFiction />
                <BookNonfiction />
                <BookStore  />
            </div>
        )
    }
}