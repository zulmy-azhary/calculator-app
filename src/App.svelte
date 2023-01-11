<script lang="ts">
  import { Header, Screen, Keypad } from "./components";
</script>

<Header />
<main>
  <Screen />
  <Keypad />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }
</style>
