import React from 'react';
import PomodoroItem from './PomodoroItem';

export default function PomodorosList(props){
    return <ul className="w3-ul">
        {
            props.pomodoros.map((element)=>{
                return <PomodoroItem data={element} key={element.id} toggleCompleted={props.toggleCompleted} makeCurrent={props.makeCurrent}/>
            })
        }
    </ul>
}