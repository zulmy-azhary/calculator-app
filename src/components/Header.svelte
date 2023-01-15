<script lang="ts">
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

  $: position = themeIndex === 0 ? 0 : themeIndex === 1 ? 50 : 100;
</script>

<header>
  <h1 class="logo">calc</h1>
  <div class="theme">
    <h5>Theme</h5>
    <div class="toggle">
      <div class="toggle-radio" style="--position: {position};">
        <input type="radio" bind:group={themeIndex} name="theme" value={0} on:click={toggle} />
        <input type="radio" bind:group={themeIndex} name="theme" value={1} on:click={toggle} />
        <input type="radio" bind:group={themeIndex} name="theme" value={2} on:click={toggle} />
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
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
    user-select: none;
  }

  .toggle-radio {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--bgKeypad);
    padding: 0.25rem;
    border-radius: 15px;
    column-gap: 0.5rem;
    min-height: 1.5rem;
  }

  /* .toggle-radio:after {
    position: absolute;
    content: "";
    width: .875rem;
    height: .875rem;
    left: var(--position);
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--bgKeyAccent);
    border-radius: 50%;
  } */
</style>
