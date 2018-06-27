import React from 'react';
import { BrowserRouter, BrowserRouter as Router, HashRouter, Switch, Route, Redirect  } from 'react-router-dom'

import axios from 'axios'



/**************************************************/
import App from '../App';
import Navlist from './../tempalte/ssi/nav';
import Homepage from '../tempalte/home/home'
import Updatepage from '../tempalte/home/update'
import Bookpage from '../tempalte/book/book'
import TeamPage from '../tempalte/team/team'
import searchPage from '../tempalte/search/search';

/**************************************************/



//添加路由
const RouterConfig = (
    <div>
        <Switch>
            <Route exact path='/'       component={Homepage}  />
            {/* both /roster and /roster/:number begin with /roster */}
            <Route path='/home/:name'   component={Updatepage}/>
            <Route path='/bookpage'     component={Bookpage}  />
            <Route path='/bookpage'     component={Bookpage}  />
            <Route path='/teampage'     component={TeamPage}  />
            <Route path='/searchPage'   component={searchPage}/>
        </Switch>
        {/*<Redirect from='' to="/"/>*/}
    </div>
);

export default RouterConfig;