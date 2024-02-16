import "./page.css"
import { Table } from "./components/Table";
import { Modal } from "./components/Modal/Modal";




function App() {
    return (        
        <div className="table-container">
            <Table />
            <Modal />         
        </div>
    )
}

export default App;
