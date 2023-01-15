<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import type { Variant } from "../types";

  export let variant: Variant = "number";
  let button: HTMLButtonElement;
  let data: string = "";
  const dispatch = createEventDispatcher();

  // Send variant & data back to parent component (Keypad)
  const handleButton = () => {
    dispatch("key", {
      variant,
      data,
    });
  };

  onMount(() => (data = button.innerText));
</script>

<button
  class={$$props.class ?? "primary"}
  {...$$restProps}
  bind:this={button}
  on:click={handleButton}
>
  <slot />
</button>

<style scoped>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.9rem 1rem;
    border: none;
    border-radius: 5px;
    font-family: "League Spartan";
    font-size: 2rem;
    font-weight: 700;
    transition: transform 0.2s, box-shadow 0.2s;
    background-color: var(--bgColor);
    color: var(--color);
    box-shadow: 0 4px var(--boxShadow);
  }
  button:active {
    transform: translateY(4px);
    box-shadow: 0 0 var(--boxShadow);
  }

  button:hover {
    filter: brightness(1.25);
  }

  .primary {
    --bgColor: var(--bgKeyMain);
    --color: var(--textMain);
    --boxShadow: var(--bgKeyMainShadow);
  }

  .secondary,
  .accent {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1.25rem 1rem;
  }

  .secondary {
    --bgColor: var(--bgKeySecondary);
    --color: var(--textSecondary);
    --boxShadow: var(--bgKeySecondaryShadow);
  }

  .accent {
    --bgColor: var(--bgKeyAccent);
    --color: var(--textAccent);
    --boxShadow: var(--bgKeyAccentShadow);
  }

  .col-span-1 {
    grid-column: span 1 / span 1;
  }

  .col-span-2 {
    grid-column: span 2 / span 2;
  }

  @media (min-width: 768px) {
    button {
      font-size: 2.5rem;
      border-radius: 10px;
      padding: 1rem;
    }

    .secondary,
    .accent {
      font-size: 2rem;
    }
  }
</style>
