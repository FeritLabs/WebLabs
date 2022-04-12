
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import App from './App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App name="Doktor Helper" />)


// During an update, there is no need to pass the container again
root.render(<App name="Doktor Pomoc" />);


