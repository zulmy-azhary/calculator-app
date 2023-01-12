import { writable } from "svelte/store";

const createCalc = () => {
  let initialValue: string = "0";
  const { subscribe, set, update } = writable(initialValue);

  return {
    set,
    update,
    subscribe,
    reset: () => set(initialValue),
  };
};

export const calc = createCalc();