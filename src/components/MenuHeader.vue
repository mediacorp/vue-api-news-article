<template>
  <div class="menu-items-container">
    <div class="container menu-items">
      <a href="/">
        <img src="@/assets/logo.png" class="menu-logo" />
      </a>
      <h5 class="menu-today-date">
        {{
          new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-header",
};
</script>