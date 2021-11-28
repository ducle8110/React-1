const app = document.querySelector(".root");

const name ="test";

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        user : {
            name : "test",
            class : "T3H",
        },
            number : 0,
        }
    }
    clickButton =()=>{
        // this.setState((prevState)=>{
        //     console.log(prevState.count)
        //     return {count: prevState.count + 1};
        // });
        // this.setState({
        //     count: this.state.count+1,
        // })
        // this.setState({
        //     user:{ ...this.state.user,name:"hong"}
        // })
        // this.count++;
        // console.log(this.count);
        this.setState({
            count: this.state.count +1,
            user: {
                ...this.state.user,
                name: "newName",
            },
            number: Math.floor(Math.random() * 1000),
        })
    }
    render() {
        return (
            <div className="main">
            <Header userParent={this.state.user}/>
            <div className="child">
                <header>Random Number: {this.state.number}</header>
                {/* <p>{this.state.count}</p> */}
                {/* <p>Ten toi la {this.state.user.name} hoc lop {this.state.user.class}</p> */}
                <button onClick={this.clickButton}>Random Number</button>
            </div>
            <Footer />
        </div>
        )
    }
}
// ReactDOM.render(element, app);
// ReactDOM.render(
//     <div class="main">
//         <div class="child">
//             <header>Du lieu ban dau</header>
//             <p>Ten toi la {name}</p>
//         </div>
//     </div>
// ,app
// );

// const WelcomeFunction =()=>{
// return (
//     <h1>{user.name}</h1>
// )
// }

class Header extends React.Component {
    render() {
        return (
            <div>
                ------------This is header: {this.props.userParent.name}-----------
            </div>
        )
    }
}

 class Footer extends React.Component {
    render() {
        return (
            <div>
                <p>-----------------Footer-----------------</p>
            <input type="text"></input>
            </div>
        )
    }
}


ReactDOM.render(<Welcome/>, app);
