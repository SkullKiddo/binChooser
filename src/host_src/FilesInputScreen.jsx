import {
  Dropzone,
  FileMosaic,
  FullScreen,
  ImagePreview,
  VideoPreview
} from "@files-ui/react";
import Button from '@mui/material/Button';
import * as React from "react";
import { writeImagesToDB } from "./host_DB";



    
export default function FilesInputScreen(props) {
  const setImages = props.setImages
  const [extFiles, setExtFiles] = React.useState([]);
  const [imageSrc, setImageSrc] = React.useState(undefined);
  const [videoSrc, setVideoSrc] = React.useState(undefined);

  


  function createImageSourcesFromImageFiles(){
    const readerArray = []
    const imageArray = []
    extFiles.forEach(file =>{
      const reader = new FileReader()
      readerArray.push(reader)
      reader.onload = () => {
        imageArray.push(reader.result)
        if(imageArray.length ===  extFiles.length){
          writeImagesToDB(imageArray)
          setImages(imageArray)
        }
        // console.log("______ pushin to image array: ", reader.result)
      }
      console.log("______ file: ", file.file)
      reader.readAsDataURL(file.file);
    })
  }

  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setExtFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setExtFiles(extFiles.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleWatch = (videoSource) => {
    setVideoSrc(videoSource);
  };
  const handleStart = (filesToUpload) => {
    console.log("advanced demo start upload", filesToUpload);
  };
  const handleFinish = (uploadedFiles) => {
    console.log("advanced demo finish upload", uploadedFiles);
  };
  const handleAbort = (id) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: "aborted" };
        } else return { ...ef };
      })
    );
  };
  const handleCancel = (id) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: undefined };
        } else return { ...ef };
      })
    );
  };
  // return <button onClick={() => writeImages()}>write database</button>
  return (
    <>
      <Dropzone
        onChange={updateFiles}
        value={extFiles}
        label="Drag'n drop files here or click to browse"
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
      >
        {extFiles.map((file) => (
          <FileMosaic
            {...file}
            key={file.id}
            onDelete={onDelete}
            onSee={handleSee}
            onWatch={handleWatch}
            onAbort={handleAbort}
            onCancel={handleCancel}
            resultOnTooltip
            alwaysActive
            preview
            info
          />
        ))}
      </Dropzone>
      <FullScreen
        open={imageSrc !== undefined}
        onClose={() => setImageSrc(undefined)}
      >
        <ImagePreview src={imageSrc} />
      </FullScreen>
      <FullScreen
        open={videoSrc !== undefined}
        onClose={() => setVideoSrc(undefined)}
      >
        <VideoPreview src={videoSrc} autoPlay controls />
      </FullScreen>
      <Button variant="contained" color="primary" onClick={createImageSourcesFromImageFiles}>
      Upload
      </Button>
    </>
  );
}
  