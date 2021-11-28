const app = document.querySelector(".root");

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Xin Chào{this.props.name}<br/>
                Hello{this.props.testName}
                <Timer/>
                <TodoApp/>
            </div>
        );
    }
}


class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {second:0};
    }
 tick(){
        this.setState(state=>({
            second: state.second +1,
        }));
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      
    render() {
        return (
            <div>
                Giây: {this.state.second}
            </div>
        )
    }
}

class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {items:[],text:''};
    }
    render() {
        return (
<div>
        <h3>Danh sách công việc</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="new-todo">
            Bạn cần làm gì?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange.bind(this)}
            value={this.state.text}
          />
          <button>
            Thêm #{this.state.items.length + 1}
          </button>
        </form>
      </div>
        );
    }
    
    handleChange(e) {
        this.setState({ text: e.target.value });
      }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: ''
        }));
    }
    
}
class TodoList extends React.Component {
    render() {
      return (
        <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      );
    }
  }

ReactDOM.render(
    <HelloMessage name="Taylor" testName="New2" />,
    app
)  

