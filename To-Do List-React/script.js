class App extends React.Component {
  // initialisez l'état initial du composant
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  // addTask pour ajouter une tâche
  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
      });
    }
  };



  // pour supprimer une tâche
  removeTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    this.setState({
      tasks: updatedTasks,
    });
  };

  render() {
    const { tasks, newTask } = this.state;
    return (
      <div className="App text-center">       
        <h1>To-Do List</h1>
        <div>
          <InputTodo 
          type="text"
          value={newTask}  
          onChange={(e) => this.setState({ newTask: e.target.value })} 
          />
          <Button 
          onClick={this.addTask} 
          titre='ajouter un task' 
          />
          
        </div>
        
       
          {tasks.map((task, index) => (
            <UlTodo key={index}
            task={task}
            onClick={this.removeTask}
            titre= 'Supprimer un Task'
          />
          ))}
      
      </div>
     
    );
  }
} 'zsx'

// class Abdoulaye extends React.Component{
//   render() {
//     return (
//       <h1>bonjour</h1>
//     )
//   }
// }

class InputTodo extends React.Component {
  render () {
    return (
      <input
            type="text"
            value={this.props.newTask}
            onChange={this.props.onChange}
          />
    )
  }
}

class Button extends React.Component{
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.onClick} >{this.props.titre}</button>
      )
  }
}

class UlTodo extends React.Component {
  render () {
    return (
      <div className="">
          <ul className="">
          <li className="d-flex justify-content-around border bg-light">
              {this.props.task}
              {/* <button className="btn" onClick={() => this.startEditing(index)}>Editer</button> */}
              <button className="btn btn-danger" onClick={this.props.onClick}> {this.props.titre} </button>
            </li>
          </ul>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));


