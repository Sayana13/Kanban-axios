import {useEffect} from 'react';
import './App.css';
import axios from "axios";
import {useState} from "react";
import Column from "./Column";

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
            <div className="columns">
                <Column list={list} status='todo'/>
                <Column list={list} status='progress'/>
                <Column list={list} status='review'/>
                <Column list={list} status='done'/>
            </div>


        </div>
    );
}

export default App;
