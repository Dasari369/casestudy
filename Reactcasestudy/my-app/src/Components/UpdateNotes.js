import React, { Component } from "react";
import TaskService from "../services/TaskService";
import Home from '../Components/HomeComponent';

class UpdateNotes extends Component{

    constructor(props) {
        super(props)

        this.state = {
        taskID:'',
        notes:'',
        task:''
        
        }
        this.changeHandler = this.changeHandler.bind(this);
       this.submitHandler=this.submitHandler.bind(this);
      
    }

    changeHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler(e){
        e.preventDefault()
        console.log(this.state)
        TaskService.setNotes(this.state.taskID,this.state.notes)
        .then(response => {
            console.log(response)
            this.setState({task:response.data})
        })
        .catch(error =>{
           console.log(error)
       })
    }

    render(){
        const{taskID,notes,task} = this.state
        return(
            <div>
                <Home></Home>
                 <h2 style={{textAlign:"center"}}>Update Notes</h2>
                <form onSubmit={this.submitHandler} style={{textAlign:"center"}}>
                <div>
                        Task ID:
                        <input type="number"
                        name="taskID"
                        value={taskID}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        Task Notes:
                        <input type="text"
                        name="notes"
                        value={notes}
                        onChange={this.changeHandler}
                        />
                    </div>
                    
                    
                <button type="submit">Submit</button>
                
                
                   
                </form>
                <div>
                <ul>
                    <li>TaskID:{task.taskID}</li> 
                    <li>TaskName:{task.tname}</li>
                    <li>TaskOwner:{task.ownerID}</li>
                    <li>Task CreatorID:{task.creatorID}</li>
                    <li>Task status:{task.status}</li>
                    <li>Description:{task.desc}</li>
                    <li>notes:{task.notes}</li>
                    <li>statusChangedOn:{task.statusChangedOn}</li>
                    <li>Priority:{task.priority}</li>
                    <li>bookMarked:{task.bookMarked===true?"true":"false"}</li>
                    <li> createdon:{task.createdon}</li>
                    </ul>
            </div>
            </div>
        )
    
    }

    
}

export default UpdateNotes