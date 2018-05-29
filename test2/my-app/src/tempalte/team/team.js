import React, { Component } from 'react';


import '../../css/team.css';



/**************************************************/
import { get, get2 } from '../../api/api'

/**************************************************/


//新组速报
class Teamlist extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            teamData: [],
        };
    }

    componentDidMount() {
        get('../data/team.json').then((data)=>{
            console.log('res',data)
        }).catch((err)=>{
            console.log('err',err)
        });
    }

    componentWillUnmount() {

    }

    render(){
        return(
            <section className="team-box">
                <div className="team-list">
                    <p className="team-title">新组速报</p>
                    <ul className="team-item">
                        <li className="team-cell">
                            <figure className="team-cell-info">
                                <img className="team-cell-img" src={require('../../images/p1.jpg')} />
                                <figcaption className="team-cell-name">推理</figcaption>
                            </figure>
                            <p className="team-cell-txt">让我们一起走进推理的世界</p>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}









export default class TeamPage extends React.Component{
    render(){
        return(
            <div className="team">
                <Teamlist />
            </div>
        )
    }
}