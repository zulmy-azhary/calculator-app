<script lang="ts">
  import { Key } from ".";
  import { calc } from "../stores/calc";
  import type { EventDispatch } from "../types";

  let firstValue: number = null;
  let operator: string = null;
  let waitingSecondValue: boolean = false;

  // Func for number keys
  const appendNumber = (number: number) => {
    if ($calc.length >= 16) return;
    if ($calc === "0") return ($calc = number.toString());

    if (waitingSecondValue) {
      $calc = "";
      waitingSecondValue = false;
    }
    $calc += number;
  };

  // Func for operator keys
  const chooseOperator = (operatorParam: string) => {
    if (firstValue === null || waitingSecondValue) {
      firstValue = Number($calc);
    } else {
      compute();
    }
    operator = operatorParam;
    waitingSecondValue = true;
  };

  // Func for dot key (.)
  const appendDecimal = () => {
    if (!$calc.includes(".")) {
      $calc += ".";
    }
  };

  // Func for del key
  const deleteLastChar = () => {
    if ($calc.length <= 1) return ($calc = "0");
    return ($calc = $calc.slice(0, -1));
  };

  // Func for reset key
  const reset = () => {
    firstValue = null;
    operator = null;
    waitingSecondValue = false;
    calc.reset();
  };

  // Func to execute
  const compute = () => {
    if(firstValue === null || waitingSecondValue) return;

    if (operator === "+") {
      $calc = (firstValue + Number($calc)).toString();
    } else if (operator === "-") {
      $calc = (firstValue - Number($calc)).toString();
    } else if (operator === "x") {
      $calc = (firstValue * Number($calc)).toString();
    } else if (operator === "/") {
      $calc = (firstValue / Number($calc)).toString();
    }

    firstValue = null;
  };

  // Handle Click when key pressed
  const handleClick = (event: EventDispatch) => {
    const variant = event.detail.variant;
    const data = event.detail.data;

    if (variant === "number") return appendNumber(+data);
    if (variant === "operator") return chooseOperator(data);
    if (variant === "decimal") return appendDecimal();
    if (variant === "delete") return deleteLastChar();
    if (variant === "reset") return reset();
    return compute();
  };
</script>

<section class="keypad">
  <Key on:key={handleClick}>7</Key>
  <Key on:key={handleClick}>8</Key>
  <Key on:key={handleClick}>9</Key>
  <Key on:key={handleClick} class="secondary" variant="delete">Del</Key>
  <Key on:key={handleClick}>4</Key>
  <Key on:key={handleClick}>5</Key>
  <Key on:key={handleClick}>6</Key>
  <Key on:key={handleClick} variant="operator">+</Key>
  <Key on:key={handleClick}>1</Key>
  <Key on:key={handleClick}>2</Key>
  <Key on:key={handleClick}>3</Key>
  <Key on:key={handleClick} variant="operator">-</Key>
  <Key on:key={handleClick} variant="decimal">.</Key>
  <Key on:key={handleClick}>0</Key>
  <Key on:key={handleClick} variant="operator">/</Key>
  <Key on:key={handleClick} variant="operator">x</Key>
  <Key on:key={handleClick} class="secondary col-span-2" variant="reset">Reset</Key>
  <Key on:key={handleClick} class="accent col-span-2" variant="compute">=</Key>
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
