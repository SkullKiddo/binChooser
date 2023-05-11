import React, { useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function ImageUploader() {
  const [imageList, setImageList] = useState([]);


  const handleFileChange = (e) => {
    const files = e.target.files
    const fileArray = [...files]
    const readerArray = []
    const imageArray = []
    console.log("______ setting files",  fileArray)
    fileArray.forEach(file =>{
        console.log("______ file: ", file)
        const reader = new FileReader()
        readerArray.push(reader)
        reader.onload = () => {
          imageArray.push(reader.result)
          if(imageArray.length ===  fileArray.length){
            setImageList(imageArray)
          }
          // console.log("______ pushin to image array: ", reader.result)
        }
        reader.readAsDataURL(file);
        console.log("______ equals: ", imageArray.length, " = ", fileArray.length)
      }
    )

  };



  function ImageList() {
    console.log("______ printing files",  imageList)
    return (
      <div>
        { imageList.map(image => (
          <img src={image} width="500" height="500" alt=""/>
        ))}
      </div>
    );
  }


  return (
    <div>
    <input type="file" onChange={handleFileChange} onDrop={handleFileChange} multiple={true} />
    <ImageList/>
    </div>
  );
}

export default ImageUploader;