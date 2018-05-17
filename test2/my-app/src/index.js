import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom'



import './css/reset.css';
import './css/home.css';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import Navlist from './tempalte/ssi/nav';
import Homepage from './tempalte/home/home';



// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// ReactDOM.render(
//     <h1>Ping</h1>,
//     document.querySelector("#root")
// )

/**************************************************/



const tabKey = {
    tbBovie: "movie",
    tbBook:  "Book",
    tbRadio: "aRadio",
    tbTeam:  "Team"
}


//
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
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>
    </div>
)



ReactDOM.render(
    ele,
    document.querySelector("#root")
)