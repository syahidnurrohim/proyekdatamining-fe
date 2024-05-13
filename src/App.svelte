<script>
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Upload.svelte";
</script>

<main class="flex flex-col items-center justify-center">
  <div class="flex items-center justify-center gap-1 mb-4">
    <a href="#" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo mx-auto" alt="Vite Logo" />
    </a>
  </div>

  <h1>Bisindo Detector</h1>

  <div class="card mt-8 w-4/12">
    <Counter />
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
