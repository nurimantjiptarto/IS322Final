import logo from './logo.svg';
import './App.css';

function App() {

  getData() {
    axios.get('https://my-json-server.typicode.com/nurimantjiptarto/IS322Final')
      .then(response => {
        this.setState({ tasks: response.data });
      }).catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }

}

const App = () => {
  return (
    <div className="container">
      <div className="row">


        <div className="col-sm-6">
          <div className="card">
            <h2>Bank Account 1 </h2>
          </div>
        </div>

        
        <div className="col-sm-6">
          <div className="card">
            <h2>Bank Account 2 </h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
