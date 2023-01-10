<script lang="ts">
</script>

<button class="key">
  <slot />
</button>

<style>
  .key {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem;
    background-color: var(--bgKeyMain);
    color: var(--mainText);
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-family: "League Spartan";
    font-size: 2.5rem;
    font-weight: 700;
    box-shadow: 0 5px var(--bgKeyMainShadow);
    transition: 0.2s ease-in-out;
  }
  .key:active {
    transform: translateY(5px);
    box-shadow: 0 0 var(--bgKeyMainShadow);
  }
</style>
