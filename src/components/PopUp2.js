import React from 'react';    
import { post } from 'axios';    
class Fileupload extends React.Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            file: '',    
        };    
    }    
    async submit(e) {    
        e.preventDefault();    
        const url = `http://localhost:5000/api/FileUpload`;
        //const url = `app-ecopetrol/src/components/file`;    
        const formData = new FormData();    
        formData.append('body', this.state.file);    
        const config = {    
            headers: {    
                'content-type': 'multipart/form-data',    
            },    
        };    
        const post_test = post(url, formData, config);
        console.log(post_test);
        return post_test     
    }    
    setFile(e) {    
            this.setState({ file: e.target.files[0] });    
    }    
    render() {    
        return (    
            <div className="container-fluid">    
                <form onSubmit={e => this.submit(e)}>    
                    <div className="col-sm-12 btn btn-primary">    
                        File Upload    
                    </div>    
                    <h1>File Upload</h1>    
                    <input type="file" onChange={e => this.setFile(e)} />    
                    <button className="btn btn-primary" type="submit">Upload</button>    
                </form>    
            </div>    
        )    
    }    
}    
export default Fileupload