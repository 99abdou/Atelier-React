class ApiApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
        }

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => this.setState({todos: data}))
        }

        render () {
            return(
                <div className="text-center mt-5 bg-danger">
                    <h2  className=" text-light">Api JSON PLACEHOLDER</h2>
                    <div>
    
                    <Mytable todos={this.state.todos}/>
                    </div>
                </div>
            )
        }
    }


class Mytable extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
      return (
        <div className="container mt-4">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">UserId</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                        </tr>
                    </thead>
                   <Tablebody todos={this.props.todos}/>
                    </table>
                </div>
           
      )
    }
  }

  class Tablebody extends React.Component {
    constructor(props){
        super(props);
    }
        render (){
            return (
              <tbody>
                {this.props.todos.map((item)=> (
                  <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed ? 'true':'false'}</td>
                  </tr>
                  
                ))}
              </tbody>
            )
               
            
        }
  }

ReactDOM.render(<ApiApp />, document.getElementById('container'))