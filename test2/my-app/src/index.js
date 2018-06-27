import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter  } from 'react-router-dom'

import axios from 'axios'

import './css/reset.css';
import 'antd/dist/antd.css';
// import './index.css';


import route from './router/index'


import App from './App';
import Navlist from './tempalte/ssi/nav';
// import Homepage from './tempalte/home/home';
// import Updatepage from './tempalte/home/update';
// import Bookpage from './tempalte/book/book';
// import TeamPage from './tempalte/team/team';
// import searchPage from './tempalte/search/search';

import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

/**************************************************/



const tabKey = {
    tbMovie: "movie"  ,
    tbBook:  "Book"   ,
    tbRadio: "aRadio" ,
    tbTeam:  "Team"
};


//添加路由
class ArticleBox extends  React.Component{
    render(){
        return(
            <main>
                {route}
            </main>
        )
    }
}


const ContainerBox = ()=>(
    <div>
        <Navlist tabKey={tabKey}/>
        {/*<ArticleBox />*/}
        <main>
            {route}
        </main>
    </div>
);






ReactDOM.render(
    <BrowserRouter>
        <ContainerBox />
    </BrowserRouter>,
    document.querySelector("#root")
);