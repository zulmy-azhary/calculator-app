<script lang="ts">
  export let themeIndex: number;
  export let value: number;
</script>

<label>
  <input type="radio" bind:group={themeIndex} name="theme" {value} on:click />
  <span />
</label>

<style scoped>
  label {
    height: calc(var(--height) / 1.45);
    width: var(--height);
    position: relative;
    border-radius: 50%;
  }

  input, span {
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  span {
    background-color: var(--bgKeyAccent);
    border-radius: 50%;
    transition: 0.2s;
  }

  input[type="radio"]:checked ~ span {
    opacity: 1;
  }

  input[type="radio"]:checked ~ span:hover {
    filter: brightness(125%);
  }
</style>
