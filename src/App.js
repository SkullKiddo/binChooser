import { useState } from "react";

export default function ImagesPathInputForm() {


  const pathInputName = "inputPath"
  const [labelText, setLabelText] = useState("label por defecto")

  function getPathInputFromForm(e) {
    // Read the form data
    const form = e.target
    const formData = new FormData(form)

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries())
    return formJson[pathInputName]
  }

  function changeReadLabel(text){
    setLabelText(text)
  }

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault()

    var readinput = getPathInputFromForm(e)

    changeReadLabel(readinput)
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      Text input: <input name={pathInputName} defaultValue="Some initial value" />
      <p>Leido: {labelText}</p>
      <button type="submit">Submit form</button>
    </form>
  );
}
