<script lang="ts">
  import { ToggleItem } from ".";

  const themeList = [null, "theme-2", "theme-3"];
  $: handleTheme(themeList, themeIndex);
  $: themeIndex = checkStorage();

  const handleTheme = (themeList: string[], themeIndex: number) => {
    const currentTheme = themeList[themeIndex];
    const html: HTMLElement = document.documentElement;

    if (!currentTheme) {
      localStorage.setItem("data-theme", "default-theme");
      return html.removeAttribute("data-theme");
    }
    html.setAttribute("data-theme", currentTheme);
    localStorage.setItem("data-theme", currentTheme);
  };

  const checkStorage = () => {
    const dataTheme = localStorage.getItem("data-theme");
    if (dataTheme === "theme-2") return 1;
    if (dataTheme === "theme-3") return 2;
    return 0;
  };

  const toggle = (e: Event) => {
    const target = e.target as HTMLInputElement;
    themeIndex = +target.value;
  };
</script>

<header>
  <h1 class="logo">calc</h1>
  <div class="theme">
    <h5>Theme</h5>
    <div class="toggle">
      <div class="toggle-title">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div class="toggle-radio">
        <ToggleItem {themeIndex} value={0} on:click={toggle} />
        <ToggleItem {themeIndex} value={1} on:click={toggle} />
        <ToggleItem {themeIndex} value={2} on:click={toggle} />
      </div>
    </div>
  </div>
</header>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: var(--textScreen);
  }

  .theme {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
  }

  h5 {
    text-transform: uppercase;
    color: var(--textScreen);
    align-self: end;
  }

  .toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  .toggle-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.25rem;
    column-gap: 0.5rem;
  }

  .toggle-title p {
    text-align: center;
    flex: 1;
    color: var(--textScreen);
    font-size: 0.75rem;
    font-weight: 500;
  }

  .toggle-radio {
    --height: 26px;
    --width: calc(var(--height) * 3);
    width: var(--width);
    height: var(--height);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--bgKeypad);
    padding: 0.25rem;
    border-radius: 15px;
    column-gap: 0.5rem;
  }
</style>
