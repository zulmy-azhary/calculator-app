<script lang="ts">
  import { onMount } from "svelte";

  const theme = [null, "theme-2", "theme-3"];
  let count = 0;
  $: setTheme = handleTheme(theme, count);

  const handleTheme = (theme: string[], count: number) => {
    const currentTheme = theme[count];
    const html = document.documentElement;

    if (!currentTheme) return html.removeAttribute("data-theme");
    html.setAttribute("data-theme", currentTheme);
  };

  const toggle = () => {
    if (count >= 2) return (count = 0);
    count++;
  };

  onMount(() => setTheme);
</script>

<header>
  <h1 class="logo">calc</h1>
  <button on:click={toggle}>Toggle</button>
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
</style>
