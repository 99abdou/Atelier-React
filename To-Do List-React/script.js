// class Todo extends React.Component {
//     render () {
//         <div>
//             <input 
//             type="text" 
//             id="myTodolist"
//             placehoalder="Ajoutez....."
//             />
//             <button onClick={this.handleClick}>Ajoute</button>
//         </div>
//     }
// }

// // export default Todo;
// function Toodo() {
//     return <div>
//         <Todo/>
//     </div>
// }

// ReactDOM.render(<Toodo/>, document.getElementById('showTodo'))

// class Task extends React.Component{
//     constructor(props){
//         super(props);

//         this.removeTask = this.removeTask.bind(this);
//         this.markDone = this.markDone.bind(this);

//         this.state = {
//             backgroundColor: ''
//         }
//     }

//     removeTask(){
//         this.props.removeTask(this.props.id);
//     }

//     markDone(){
//         if (this.state.backgroundColor === ''){
//             this.setState({ backgroundColor: 'rgb(144,238,144, 0.5)' });
//         } else {
//             this.setState({backgroundColor: ''});
//         }
//     }

//     render(){
//         return (
//             <div className='task-container'>
//                 <div className='task-container-background' style={{backgroundColor: this.state.backgroundColor}}>
//                     <div className='task-term-container'>
//                         <h2 className='task-term'>{this.props.text}</h2>
//                     </div>
//                     <div className='buttons-container'>
//                         <button className='done-button' onClick={this.markDone}>Modifier</button>
//                         <button className='delete-button' onClick={this.removeTask}>Supprimer</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

// }
// class SubmitForm extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = { tasksCount: 0 };

//         this.addItem = this.addItem.bind(this);
//     }

//     addItem(e) {
//         if (this._inputElement.value !== "") {
//             var newItem = {
//               text: this._inputElement.value,
//               id: this.state.tasksCount,
//               key: Date.now()
//             };

//             this.props.addTask(newItem);

//             this.state.tasksCount++;
//             this._inputElement.value = "";
//         }
             
//         e.preventDefault();
//     }
    

//     render(){
//         return (
//             <div className='form'>
//                 <form>
//                     <input className='input' placeholder='Add Task' />
//                     <button className='add-button' type='submit'>Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

// function Home (){
//     return <div>
//         <SubmitForm  />
//         <Task />
//     </div>
// }



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

  startEditing = (index) => {
    const { tasks } = this.state;
    this.setState({
      editingIndex: index,
      editedTask: tasks[index],
    });
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
        <h1>Ma To-Do List</h1>
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => this.setState({ newTask: e.target.value })}
          />
          <button onClick={this.addTask}>Ajouter</button>
        </div>
        <ul className="">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="btn" onClick={() => this.startEditing(index)}>Editer</button>
              <button className="btn" onClick={() => this.removeTask(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('container'));


