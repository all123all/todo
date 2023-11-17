<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
        <BaseModal :isOpen="isOpen" @closeModal="isOpen = false"/>
        <button
          v-if="$route.path === '/'"
          @click="isOpen = true"
          class="btn btn-primary mx-2"
        >
          Add new task
        </button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import BaseModal from '@/components/common/Modals/BaseModal.vue'

export default {
  name: 'App',
  components: {
    BaseModal,
  },

  data() {
    return {
      isOpen: false
    }
  },
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin: 1rem 0;
}

nav a {
  margin: 0 .3rem;
}
</style>
