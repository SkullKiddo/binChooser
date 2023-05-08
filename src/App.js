import React, { useState } from 'react';

function ImageUploader() {
  const [imageArray, setImageArray] = useState([]);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageArray(imageArray.concat(reader.result));
    };

    reader.readAsDataURL(file);
    console.log(imageArray)
  };

  function ImageList() {
    console.log("______ imageArray", imageArray)
    return (
      <div>
        {imageArray.map(image => (
          <img src={image} width="500" height="500"/>
        ))}
      </div>
    );
  }
  

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <ImageList/>
    </div>
  );
}

export default ImageUploader;