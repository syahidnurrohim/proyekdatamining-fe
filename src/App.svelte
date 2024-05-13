<script>
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Upload.svelte";

  let result = {
    status: "",
    data: {},
  };
  const onload = (res) => {
    result = JSON.parse(res);
  };
  const processfilerevert = () => {
    result = {
      status: "",
      data: {}
    }
  }

  $: result;
</script>

<main class="flex flex-col items-center justify-center">
  <div class="flex items-center justify-center gap-1 mb-4">
    <a href="#" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo mx-auto" alt="Vite Logo" />
    </a>
  </div>

  <h1 class="mb-8">Bisindo Detector</h1>

  {#if result.status == "ok"}
    <div
      id="alert-border-3"
      class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
      role="alert"
    >
      <svg
        class="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <div class="ms-3 text-sm font-medium">
        Gambar dibawah merupakan huruf {result.data.result} dalam bahasa isyarat
      </div>
    </div>
  {:else if result.status == "error"}
    <div
      id="alert-border-2"
      class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
      role="alert"
    >
      <svg
        class="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <div class="ms-3 text-sm font-medium">
        {result.message}
      </div>
    </div>
  {/if}
  <div class="card mt-0 w-4/12">
    <Counter {onload} {processfilerevert} />
  </div>
</main>

<style>
  .logo {
    height: 8em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
