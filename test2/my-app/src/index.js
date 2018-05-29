import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import axios from 'axios'

import './css/reset.css';
// import './index.css';

import registerServiceWorker from './registerServiceWorker';


import App from './App';
import Navlist from './tempalte/ssi/nav';
import Homepage from './tempalte/home/home';
import Bookpage from './tempalte/book/book';
import TeamPage from './tempalte/team/team';



// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// ReactDOM.render(
//     <h1>Ping</h1>,
//     document.querySelector("#root")
// )

/**************************************************/



const tabKey = {
    tbMovie: "movie",
    tbBook:  "Book",
    tbRadio: "aRadio",
    tbTeam:  "Team"
}


//没添加路由
class TagBox extends React.Component{

    render(){
        return(
            <article className="">
                <Homepage />
            </article>
        )
    }
}
const ele = (
    <div className="container">
        <Navlist tabKey={tabKey}/>
        <Homepage />
    </div>
)



//添加路由
class ArticleBox extends  React.Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    {/* both /roster and /roster/:number begin with /roster */}
                    <Route path='/roster' component={Bookpage}/>
                    <Route path='/schedule' component={Bookpage}/>
                    <Route path='/teampage' component={TeamPage}/>
                </Switch>
            </main>
        )
    }
}

const ContainerBox = ()=>(
    <div>
        <Navlist tabKey={tabKey}/>
        <ArticleBox />
    </div>
)






ReactDOM.render(
    <BrowserRouter>
        <ContainerBox />
    </BrowserRouter>,
    document.querySelector("#root")
)