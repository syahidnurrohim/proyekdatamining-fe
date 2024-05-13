<script>
  import "filepond/dist/filepond.css";
  import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

  import FilePond from "./Filepond.svelte"

  import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
  import FilePondPluginImagePreview from "filepond-plugin-image-preview";
  import { registerPlugin } from "filepond";

  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
  );

  // a reference to the component, used to call FilePond methods
  // for example `pond.getFiles()` will return the active files
  let pond;

  // the name to use for the internal file input
  let name = "file";

  let apiEndpoint = "http://localhost:5000/predict"

  // handle filepond events
  function handleInit() {
    console.log("FilePond has initialised");
  }

  function handleAddFile(err, fileItem) {
    console.log("A file has been added", fileItem);
  }

</script>

<FilePond
  bind:this={pond}
  {name}
  server={apiEndpoint}
  allowMultiple={true}
  oninit={handleInit}
  onaddfile={handleAddFile}
/>
