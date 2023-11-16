<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div>
        <button class="btn btn-primary mx-2">Add new task</button>
      </div>
    </nav>

    <div class="task-container">
      <Card :isDefined="false"/>
      <Card title="Task 1" text="Some text" createdAt="2022-01-01" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
      <Card title="Task 1" text="Some text" />
    </div>
  </div>
</template>

<script lang="ts">
import Card from './components/common/Card/Card.vue';
export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100vh;
}

.task-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  margin: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
