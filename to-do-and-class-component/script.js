// Composant Parent
class ParentComponent extends React.Component { 
    handleChildEvent = (data) => {
    // Traiter les données du composant enfant
    console.log(data);
  }
   
  render() {
    return <ChildComponent onEvent={this.handleChildEvent} />;
    }
  }
  
  // Composant Enfant
  class ChildComponent extends React.Component {
    handleClick = () => {
      const data = "Données importantes";
      this.props.onEvent(data);
    }
  
    render() {
      return <button onClick={this.handleClick}>Cliquez-moi</button>;
    }
  } 


ReactDOM.render(<ParentComponent />, document.getElementById('AppTodo'))