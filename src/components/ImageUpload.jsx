// ImageUpload.js
import React, { useState } from "react";
import { Button } from "@mui/material";

function ImageUpload() {
  const [file, setFile] = useState(null);


  return (
    <form action="http://localhost:5000" enctype="multipart/form-data" method="POST">
      <div>
        <Button variant="contained" component="label">
          Upload File
          <input type="file" name="pic" hidden />
        </Button>
        <Button variant="contained">
        Submit
        <input type="submit" />
        </Button>
      </div>
    </form>
  );
}

export default ImageUpload;
