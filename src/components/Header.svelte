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
</script>

<header>
  <h1 class="logo">calc</h1>
  <div class="theme">
    <h5>Theme</h5>
    <div class="toggle">
      <div class="toggle-radio">
        <label for="1">1</label>
        <input
          id="1"
          type="radio"
          bind:group={themeIndex}
          name="theme"
          value={0}
          on:click={() => (themeIndex = 0)}
        />
      </div>
      <div class="toggle-radio">
        <label for="2">2</label>
        <input
          id="2"
          type="radio"
          bind:group={themeIndex}
          name="theme"
          value={1}
          on:click={() => (themeIndex = 1)}
        />
      </div>
      <div class="toggle-radio">
        <label for="3">3</label>
        <input
          id="3"
          type="radio"
          bind:group={themeIndex}
          name="theme"
          value={2}
          on:click={() => (themeIndex = 2)}
        />
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
  }

  .toggle input {
    padding: 0.125rem;
    background-color: var(--bgKeyAccent);
    width: 1rem;
    height: 1rem;
  }

  .toggle-radio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .toggle-radio label {
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 500;
    color: var(--textScreen);
  }
</style>
