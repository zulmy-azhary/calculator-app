<script lang="ts">
  import { Key } from ".";
</script>

<section class="keypad">
  <Key>7</Key>
  <Key>8</Key>
  <Key>9</Key>
  <Key class="secondary">Del</Key>
  <Key>4</Key>
  <Key>5</Key>
  <Key>6</Key>
  <Key>+</Key>
  <Key>1</Key>
  <Key>2</Key>
  <Key>3</Key>
  <Key>-</Key>
  <Key>.</Key>
  <Key>0</Key>
  <Key>/</Key>
  <Key>x</Key>
  <Key class="secondary col-span-2">Reset</Key>
  <Key class="accent col-span-2">=</Key>
</section>

<style scoped>
  .keypad {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
    padding: 1.5rem;
    background-color: var(--bgKeypad);
    border-radius: 12px;
  }

  @media (min-width: 1440px) {
    .keypad {
      gap: 2rem;
      padding: 2rem;
    }
  }
</style>
