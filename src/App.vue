<template>
  <div :class="{'t-dark' : $store.state.ui.darkMode}">

    <router-view />
  </div>
</template>

<style scoped>
.t-dark {
  background-color: #ccc;
}
</style>