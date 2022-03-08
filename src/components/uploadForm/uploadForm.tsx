import React, { useEffect, useState } from 'react';
import axios from 'axios'

const UploadForm: React.FC = () =>{
    const [selectedFile, setSelectedFile] = useState('null');
    const [rphotos, setRphots] = useState()
    
    const handleUpload = async (event: any) => {
        
        const formData = new FormData();
        formData.append("productImage", event.target.files[0]);
        try {
          const response = await axios({
            method: "post",
            url: "http://localhost:5000/api/products",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
          console.log(response)
        } catch(error) {
          console.log(error)
        }
      }

      const handleFileSelect = (event:any) => {
        setSelectedFile(event.target.files[0])
      }

    const handleGet = () => {
        axios.get('https://localhost:9000/api/products')
        .then((res:any) => {
            setRphots(res.data)
        })
    }

    useEffect(() => {
        handleUpload
    },[handleUpload])
    return(
        <div>
                  <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" onChange={handleUpload}/>
        </div>
    )
}

export default UploadForm