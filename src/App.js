import {useEffect} from 'react';
import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {
    const [list, setList] = useState([])
    useEffect(() => {

        axios({
            method: 'GET',
            url: 'http://nazarov-kanban-server.herokuapp.com/card'
        }).then(res => {
            console.log(res);
            setList(res.data)
        }).catch(error => {
            console.log(error);
        });
    }, [])
    return (
        <div className="App">
            <ul>
                {
                    list.map(el => <li key={el._id}>{el.name}<i>{el.status}</i></li>)
                }
            </ul>



        </div>
    );
}

export default App;
