<script lang="ts">
  import Header from "./components/Header.svelte";
  import Key from "./components/Key.svelte";
</script>

<Header />
<main>
  <Key>1</Key>
  <Key>1</Key>
  <Key>1</Key>
  <Key>1</Key>
  <Key>1</Key>
  <Key>1</Key>
  <Key>1</Key>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: var(--bgKeypad);
  }
</style>
