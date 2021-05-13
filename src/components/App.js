import logo from './logo.svg';
import './App.css';

function App() {
  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
      .then(response => {
        this.setState({ tasks: response.data });
      }).catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }
}

export default App;
