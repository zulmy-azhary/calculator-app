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
  <button on:click={toggle}>Press me</button>
</header>

<style>
</style>
