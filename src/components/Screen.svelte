<script lang="ts">
  import { calc } from "../stores/calc";
</script>

<section class="screen">
 <p class="output">{$calc}</p>
</section>

<style scoped>
  .screen {
    padding: 2.5rem 2rem;
    text-align: end;
    background-color: var(--bgScreen);
    color: var(--textScreen);
    display: flex;
    justify-content: end;
    align-items: center;
    border-radius: 10px;
    overflow-x: hidden;
  }

  .output {
    font-size: 3.5rem;
    line-height: 3rem;
    font-weight: 700;
  }
</style>