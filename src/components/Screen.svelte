<script lang="ts">
  import { calc } from "../stores";
  $: filteredOutput = filteredCalc($calc);

  const filteredCalc = (calc: string) => {
    if (!isNaN(+calc)) {
      let inputValue = calc;
      let [mainNumbers, decimalNumbers] = inputValue.split(".");
      mainNumbers = mainNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      if (decimalNumbers) {
        return mainNumbers + "." + decimalNumbers;
      }
      return mainNumbers;
    }
  };
</script>

<section class="screen">
  <p class="output">{filteredOutput}</p>
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
