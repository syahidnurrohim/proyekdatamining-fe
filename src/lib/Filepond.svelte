<svelte:options accessors />

<script>
  import { onDestroy, afterUpdate } from "svelte";
  import * as FilePond from "filepond";

  // is FilePond supported
  const isSupported = FilePond.supported();

  // private props, root element + active instance of FilePond
  let root;
  let instance;

  // base props for use on file input
  let klass = undefined;
  export { klass as class };
  export let id = undefined;
  export let name = undefined;
  export let allowMultiple = undefined;
  export let required = undefined;
  export let captureMethod = undefined;
  export let acceptedFileTypes = undefined;

  // placeholder fn for methods
  const noop = () => {};

  // functions to call on this component (if it's initialised)
  export let addFile = noop;
  export let addFiles = noop;
  export let browse = noop;
  export let fireSync = noop;
  export let getFile = noop;
  export let getFiles = noop;
  export let moveFile = noop;
  export let prepareFile = noop;
  export let prepareFiles = noop;
  export let processFile = noop;
  export let processFiles = noop;
  export let removeFile = noop;
  export let removeFiles = noop;
  export let sort = noop;

  // this lifecycle method will handle updating and creating the FilePond instance
  afterUpdate(() => {
    if (!isSupported) return;
    if (!instance) {
      // create instance
      instance = FilePond.create(root, { ...$$props });

      // Reference pond methods to FilePond component instance
      // @ts-ignore
      addFile = instance.addFile;
      // @ts-ignore
      addFiles = instance.addFiles;
      removeFile = instance.removeFile;
      removeFiles = instance.removeFiles;
      browse = instance.browse;
      // @ts-ignore
      fireSync = instance.fireSync;
      getFile = instance.getFile;
      getFiles = instance.getFiles;
      // @ts-ignore
      moveFile = instance.moveFile;
      prepareFile = instance.prepareFile;
      prepareFiles = instance.prepareFiles;
      processFile = instance.processFile;
      processFiles = instance.processFiles;
      // @ts-ignore
      sort = instance.sort;
    } else {
      instance.setOptions($$props);
    }
  });

  // cleans up the component
  onDestroy(() => {
    if (!instance) return;
    instance.destroy();
    instance = undefined;
  });
</script>

<div class="filepond--wrapper">
  <input
    type="file"
    bind:this={root}
    {id}
    {name}
    class={klass}
    accept={acceptedFileTypes}
    multiple={allowMultiple}
    {required}
    capture={captureMethod}
  />
</div>
