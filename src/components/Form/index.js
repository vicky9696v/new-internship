import {Component} from "react";
import {MdDelete} from "react-icons/md"
// import Sorting from "../Sorting"

import "./index.css";

const formData = [
    {
        id: 1,
        name: "Rohit",
        mail: "rohith@gmail.com",
        phoneNumber: "918200934",
        Project: "Project-1",
        Task: "Design",
        Status: "Done",
        staringtDate: "01-09-21",
        endingDate: "05-09-21",

    }
]

class Form extends Component {
    state = {
       data: formData,
       personName: "",
       email: '',
       number: '',
       projectName: '',
       taskDescription: '',
       startDate: '',
       endDate: '',
       errors : {
        }

    }

    onFieldInput = e => {
      
        this.setState({[e.target.id]:e.target.value})
      
      }

    submitForm = e => {
        e.preventDefault();
        const {data, personName, email, number, projectName, taskDescription, startDate, endDate} = this.state
        const newData = {
            id: data.length+1,
            name: personName,
            mail: email,
            phoneNumber: number,
            Project: projectName,
            Task: taskDescription,
            staringtDate: startDate,
            endingDate: endDate
        }

        this.setState(prev => ({data: [...prev.data, newData]}))
    }
    
    deleteFunction = e => {  
    const {data} = this.state
    console.log(e.target.id)
     const result = data.filter(each => each.id !== e.target.id)
     this.setState({data: result});
    }

   render() {
    const {personName, email, number, projectName, taskDescription, startDate, endDate} = this.state
    let result = this.state.data.map(each => {
        return (
         
          <tr key={each.id}>
          <td>{each.id}</td>
          <td>{each.name}</td>
          <td>{each.Project}</td>
          <td>{each.Task}</td>
          <td>{each.Status}</td>
          <td>{each.staringtDate}</td>
          <td>{each.endingDate}</td>
          <td type="button" onClick={this.deleteFunction} className="delete-button"><MdDelete /></td>
          </tr>
          
        )
      })

    return(
        <div className="main-container">
            <h1>
                Ideal Labs Form
            </h1>
            <form className="form" onSubmit={this.submitForm}>
                <input type="text" value={personName} 
                onChange={(event) => this.setState({personName: event.target.value})} 
                placeholder="Entern Person Name( 3-20 Chars only)" 
                className="input-box" required />
                <div className="email-mobile-container">
                    <input type="text" value={email} 
                    onChange={(event) => this.setState({email: event.target.value})} 
                    placeholder="Enter A Valid E-mail ID"
                     className="input-box modified-box" required  />
                    <input type="text" value={number} 
                    onChange={(event) => this.setState({number: event.target.value})}
                     placeholder="Enter A Valid Mobile Number" 
                     className="input-box modified-box"  required />
                </div>
                <input type="text" value={projectName}
                 onChange={(event) => this.setState({projectName: event.target.value})} 
                 placeholder="Enter Project Name( 3-20 Chars and Numbers only)" 
                 className="input-box" required  />
                <input type="text" value={taskDescription} 
                onChange={(event) => this.setState({taskDescription: event.target.value})} 
                placeholder="Enter Task Description( 3-30 Chars/Num/Spl Char also)" 
                className="input-box" required  />
                <div  className="email-mobile-container">
                    <input type="text" value={startDate} 
                    onChange={(event) => this.setState({startDate: event.target.value})}
                     placeholder="Start Date dd/mm/yy" 
                     className="input-box modified-box" required  />
                    <input type="text" value={endDate} 
                    onChange={(event) => this.setState({endDate: event.target.value})}
                     placeholder="Target Date dd/mm/yy" 
                     className="input-box modified-box" required  />
                    
                </div>
                <p className="para">Task Status: <span className="dot"></span>Planned  <span className="dot"></span>In-Progress <span className="dot"></span>Done</p>
                    <div className="d-flex flex-row justify-content-center">
                    <button className="btn btn-primary m-3" type="submit">Save</button>
                    <button className="btn btn-danger m-3">View</button>
                    </div>
            </form>
            <div className="unorder-list">
           <table className="table table-bordered">
               <thead>
                <tr>
                <th>SN.No</th>
             <th>Name</th>
             <th>Project</th>
             <th>Task</th>
             <th>Status</th>
             <th>Start Date</th>
             <th>End Date</th>
             <th>Edit / Delete</th>
                </tr>
                </thead> 
             <tbody>
               {result}
             </tbody>
            </table>
            </div>  
        </div>
    )
   }
}

export default Form;