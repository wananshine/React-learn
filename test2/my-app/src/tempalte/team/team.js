import React, { Component } from 'react';


import '../../css/team.css';



/**************************************************/

import { get, get2, get3 } from '../../api/api'

/**************************************************/




//新组速报
class Teamlist extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            teamData: {
                rec_groups: []
            },
        };
    }

    componentDidMount() {
        // get('../data/team.json').then((res)=>{
        //     console.log('res',res)
        //     this.state.teamData = res;
        // }).catch((err)=>{
        //     console.log('err',err)
        // });

        get3('../data/team.json',{}).then(res => {
            console.log('get3-res',res)
            this.setState({
                teamData: res
            })
        }).catch(err => {
            console.log(err);
        })
    }

    componentWillUnmount() {

    }


    render(){

        const rec_groups = this.state.teamData.rec_groups;
        const floorShow = rec_groups.map((floor, index) =>{
            return(
                 <TeamFloor floor={floor} key={index} />
            )
        })

        return(
            <section className="team-box">
                {floorShow}
            </section>
        )
    }
}


//把classified_groups拆出来
function TeamFloor(props) {
    const floor = props.floor
    const classified_groups = floor.classified_groups.map((group, groupNo)=>{
        return (
            <div className="team-floor" key={groupNo}>
                <p className="team-title">{group.name}</p>
                <GroupsFloor groups={group.groups} />
                <p className="team-more">更多相关小组</p>
            </div>
        )
    });

    return(
        <div className="team-layer">{classified_groups}</div>
    )
}


//把groups拆出来
function GroupsFloor(props) {
    const groups = props.groups
    const lis = groups.map((li, liNo)=>{
        return (

            <li className="team-cell" key={liNo}>
                <figure className="team-cell-info">
                    <span className="team-cell-img"><img src={li.avatar} /></span>
                    <figcaption className="team-cell-name">{li.name}</figcaption>
                    <span className="team-cell-member">{li.member_count}人</span>
                </figure>
                <p className="team-cell-txt">{li.desc_abstract}</p>
            </li>
        )
    });

    return(
        <ul className="team-item">{lis}</ul>
    )
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