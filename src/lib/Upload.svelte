<script>
  import "filepond/dist/filepond.css";
  import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

  import FilePond from "./Filepond.svelte";

  import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
  import FilePondPluginImagePreview from "filepond-plugin-image-preview";
  import { registerPlugin } from "filepond";

  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
  );

  export let onload;
  export let processfilerevert;

  // a reference to the component, used to call FilePond methods
  // for example `pond.getFiles()` will return the active files
  let pond;

  // the name to use for the internal file input
  let name = "file";
  let apiEndpoint = "http://localhost:5000/predict";

  let server = {
    process: {
      url: apiEndpoint,
      method: "POST",
      withCredentials: false,
      headers: {},
      timeout: 7000,
      onload: null,
      onerror: null,
      ondata: null,
    },
  };

  if (onload) {
    server.process.onload = onload;
  }

  // handle filepond events
  function handleInit() {
    console.log("FilePond has initialised");
  }

  function handleAddFile(err, fileItem) {}

  const handleProcessFile = (err, file) => {};
</script>

<FilePond
  bind:this={pond}
  {name}
  {server}
  allowMultiple={true}
  oninit={handleInit}
  onaddfile={handleAddFile}
  onprocessfile={handleProcessFile}
  onprocessfilerevert={processfilerevert}
/>
