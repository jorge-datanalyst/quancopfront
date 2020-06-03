import React, { Component } from "react";
import axios from 'axios';
import './style_popup.css'


export default class PopUp extends Component { 
	
	handleClick = () => {
	this.props.toggle();
	  };
	  
  state = { 
	// Initially, no file is selected 
	selectedFile: null
	}; 
	
	// On file select (from the pop up) 
	onFileChange = event => { 
	
	// Update the state 
	this.setState({ selectedFile: event.target.files[0] });
	console.log(event.target.files[0])
	}; 
	
	// On file upload (click the upload button) 
	onFileUpload = () => { 
	
	// Create an object of formData 
    const formData = new FormData(); 
	
	// Update the formData object

	formData.append(
		"file",
		this.state.selectedFile) 

	// Details of the uploaded file 
	console.log(formData.get("file")); 
	
	// Request made to the backend api 
	// Send formData object 
	axios.post('http://localhost:5000/api/FileUpload', formData, 
		{
			headers : {
				'Content-Type': 'multipart/form-data'
			}
		}
		)
	.then(res => { // then print response status
	console.log(res.statusText)
  })

	}; 

	// File content to be displayed after 
	// file upload is complete 
	fileData = () => { 
	
	if (this.state.selectedFile) { 
		
		return ( 
		<div> 
			<h2>Detalles de la carga:</h2> 
			<p>Nombre del Archivo: {this.state.selectedFile.name}</p> 
			<p>Tipo de Archivo: {this.state.selectedFile.type}</p> 
			<p> 
			Ultima modificación:{" "} 
			{this.state.selectedFile.lastModifiedDate.toDateString()} 
			</p> 
		</div> 
		); 
	} else { 
		return ( 
		<div> 
			<br /> 
			<h4>Elegir archivo antes de cargar</h4> 
		</div> 
		); 
	} 
	}; 

  render() {
    return (
      <div className = "modal">
        <div className="modal_content">
          <span onClick={this.handleClick}>
            <span className="close-button topright" onChange={this.onFileChange}>X</span>
          </span>
		  <h1> 
			Quantil-Ecopetrol 
			</h1> 
			<h3> 
			Cargar Archivo 
			</h3> 
			<div> 
				<input type="file" onChange={this.onFileChange} />
				
				<button className="button-cargar" onClick={this.onFileUpload}> 
				Cargar! 
				</button>
				
				{this.fileData()}
			</div> 
			 
        </div>
      </div>
    );
  }
}
//&times;