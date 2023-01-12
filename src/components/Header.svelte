<script lang="ts">
  import { onMount } from "svelte";

  const themeList = [null, "theme-2", "theme-3"];
  let themeIndex = 0;
  $: setTheme = handleTheme(themeList, themeIndex);

  const handleTheme = (themeList: string[], themeIndex: number) => {
    const currentTheme = themeList[themeIndex];
    const html = document.documentElement;

    if (!currentTheme) return html.removeAttribute("data-theme");
    html.setAttribute("data-theme", currentTheme);
  };

  const toggle = () => {
    if (themeIndex >= 2) return (themeIndex = 0);
    themeIndex++;
  };

  onMount(() => setTheme);
</script>

<header>
  <h1 class="logo">calc</h1>
  <div class="theme">
    <h5>Theme</h5>
    <div class="toggle">
      <button on:click={() => themeIndex = 0}>1</button>
      <button on:click={() => themeIndex = 1}>2</button>
      <button on:click={() => themeIndex = 2}>3</button>
    </div>
  </div>
</header>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: var(--textScreen);
  }

  .theme {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
  }

  h5 {
    text-transform: uppercase;
    color: var(--textScreen);
  }

  .toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .125rem;
  }

  .toggle button {
    padding: .125rem;
    background-color: var(--bgKeyAccent);
    border: none;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
  }
</style>
