import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter  } from 'react-router-dom'
import { createStore } from 'redux';
import axios from 'axios'
import route from './router/index'
import App from './App';


import './css/reset.css';
import 'antd/dist/antd.css';

import Navlist from './tempalte/ssi/nav';



// const reducer = function(state, action) {
//     return state;
// }
//
// const store = createStore(reducer);

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