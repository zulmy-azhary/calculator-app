<script lang="ts"></script>

<button class="primary" {...$$props}>
  <slot />
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.9rem 1rem;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-family: "League Spartan";
    font-size: 2.5rem;
    font-weight: 700;
    transition: 0.2s ease-in-out;
    background-color: var(--bgColor);
    color: var(--color);
    box-shadow: 0 5px var(--boxShadow);
  }
  button:active {
    transform: translateY(5px);
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

  .secondary {
    --bgColor: var(--bgKeySecondary);
    --color: var(--textSecondary);
    --boxShadow: var(--bgKeySecondaryShadow);
    text-transform: uppercase;
    font-size: 2rem;
  }

  .accent {
    --bgColor: var(--bgKeyAccent);
    --color: var(--textAccent);
    --boxShadow: var(--bgKeyAccentShadow);
    text-transform: uppercase;
    font-size: 2rem;
  }

  .col-span-1 {
    grid-column: span 1 / span 1;
  }

  .col-span-2 {
    grid-column: span 2 / span 2;
  }
</style>
