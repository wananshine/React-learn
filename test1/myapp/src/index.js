import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

/*************************************************/

// function formatName(user){
// 	return user.firstName + ' ' + user.lastName;
// }

// const user = {
// 	firstName: 'Hai',
// 	lastName: 'Ping'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
// 	element,
// 	document.getElementById("root")
// )

//********************************************************************/

// function getGreeting(user){
// 	if(user){
// 		return <h1>Hello, { formatName(user) }!</h1>
// 	}else {
// 		return <h1>Hello ,Ping</h1>
// 	}
// }

// function formatName(user){
// 	return user.firstName + ' ' + user.lastName;
// }

// const user = {
// 	firstName: 'Hai',
// 	lastName: 'Ping'
// };

// const ele = (
// 	<div> {getGreeting(user)} </div>
// )

// ReactDOM.render(
// 	ele,
// 	document.querySelector("#root")
// 	// document.getElementById("root")
// )
//********************************************************************/


// const element = <div tabIndex="0">  </div>
// const element = <img src={user.avatarUrl} />;





// function tick(){
// 	const element = (
// 		<div>
// 			<h1 className="pig">you are Pig</h1>
// 			<h2>It is { new Date().toLocaleTimeString() }.</h2>
// 		</div>
// 	);
// 	ReactDOM.render(
// 		element,
// 		document.querySelector("#root")
// 	)
// }

// setInterval(tick, 1000);

//********************************************************************/


// // function Welcome(props){
// // 	return <h1>Hello , {this.props.name}</h1>;
// // }
// // ==> 等同于
// class Welcome extends React.Component{
// 	render(){
// 		return <h1>Pig , {this.props.name}</h1>
// 	}
// };


// function Male(props) {
// 	return <h1>Pig, {props.name}</h1>;
// }


// const element=(
// 	<div>
// 		<Welcome name="Sara" />,
// 		<Welcome name="mm" />,
// 		<Welcome name="bb" />,
// 		<Male name="la"  />,
// 	</div>
// )

// ReactDOM.render(
// 	element,
// 	document.querySelector("#root")
// )


//********************************************************************/

// function formatDate(date){
// 	return date.toLocaleDateString();
// }

// function Comment(props){
// 	return (
// 		<div className="Comment">
// 			<div className="UserInfo">
// 				<img className="Avatar" src={props.auther.avatarUrl} alt={props.auther.name} />
// 				<div className="Userinfo-name">
// 					{props.auther.name}
// 				</div>
// 			</div>
// 			<div className="Comment-text">
// 				{props.text}
// 			</div>
// 			<div className="Comment-date">
// 				{formatDate(props.date)}
				
// 			</div>
// 		</div>
// 	);
// }


// const comment = {
// 	date: new Date(),
// 	text: 'i hope you enjoy learning React!',
// 	auther: {
// 		name: "hello Kitty",
// 		avatarUrl: "http://placekitten.com/g/64/64",
// 	}
// };



// ReactDOM.render(
// 	<Comment date={comment.date} text={comment.text} auther={comment.auther} />,
// 	document.querySelector("#root")
// )

/**************************************************************************/



// function formatDate(date){
// 	return date.toLocaleDateString();
// }

// function Avatar(props){
// 	return(
// 		<img className="Avatar" 
// 			src={props.user.avatarUrl} 
// 			alt={props.user.name} 
// 		/>
// 	)
// }


// function UserInfo(props){
// 	return(
// 		<div className="UserInfo">
// 			<Avatar user={props.user} />
// 			<div className="Userinfo-name">
// 				{props.user.name}
// 			</div>
// 		</div>
// 	)
// }

// function Comment(props){
// 	return (
// 		<div className="Comment">
// 			<UserInfo user={props.auther} />
// 			<div className="Comment-text">
// 				{props.text}
// 			</div>
// 			<div className="Comment-date">
// 				{formatDate(props.date)}
// 			</div>
// 		</div>
// 	);
// }


// const comment = {
// 	date: new Date(),
// 	text: 'i hope you enjoy learning React!',
// 	auther: {
// 		name: "hello Kitty",
// 		avatarUrl: "http://placekitten.com/g/64/64",
// 	}
// };



// ReactDOM.render(
// 	<Comment date={comment.date} text={comment.text} auther={comment.auther} />,
// 	document.querySelector("#root")
// )


/****************************************************************/ 

// function tick(){
//     const element = (
//         <div>
//             <h1>Hello world</h1>
//             <h2>It is {new Date().toLocaleTimeString()}. </h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.querySelector("#root")
//     );
// }

// setInterval(tick, 1000)


/****************************************************************/

// //更新的时候有传新值
// function Clock(props){
//     return (
//         <div>
//             <h1>Hello, Pig 2</h1>
//             <h2>it is {props.date.toLocaleTimeString()}</h2>
//             {element}
//         </div>
//     );
// }

// //更新的时候没传新值
// const element = (
//     <div>
//         <h1>Hello, Dog</h1>
//         <h2>it is {new Date().toLocaleTimeString()}</h2>
//     </div>
// ); 

// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById("root")
//     );
// }

// setInterval(tick, 1000)



/****************************************************************/


// function FormattedDate(props){
//     return <h2>It is {props.date.toLocaleTimeString()}</h2>
// }


// class Clock extends React.Component{


//     constructor(props){
//         super(props);
//         this.state = { date: new Date() };
//     }

//     componentDidMount() {
//         this.timerID = setInterval(()=>{
//             this.tick()
//         }, 1000);
//     }
  
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick(){

//         //this.setState()来更新组件局部状态
//         this.setState({
//             date: new Date()
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <h1>Dog, wehre</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//                 <FormattedDate date={this.state.date} />
//             </div>
//         )
//     }
// }

// function More(){
//     return (
//         <div>
//             <Clock />,
//             <Clock />,
//             <Clock />,
//         </div>
//     )
// }


// ReactDOM.render(
//     <More />,
//     document.querySelector("#root")
// );




/****************************************************************/


//事件处理

// class Toggle extends React.Component{
//     constructor (props){
//         super(props);
//         this.state = {
//             isToggleOn: true
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.setState(preState => ({
//             isToggleOn: !preState.isToggleOn
//         }))
        
//     }

//     handleClick1 = ()=>{
//         console.log('this is 1', this)
//     }

//     handleClick2 = ()=>{
//         console.log('this is 2', this)
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={this.handleClick}>
//                     {this.state.isToggleOn ? 'on' : 'off'}
//                 </button>
//                 <button onClick={this.handleClick1}>
//                     Click me 1
//                 </button>
//                 <button onClick={(e)=> this.handleClick2(e)}>
//                     Click me 2
//                  </button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById("root")
// )



/****************************************************************/


class Popper extends React.Component{}


