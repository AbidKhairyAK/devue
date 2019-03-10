<template>
  <v-app class="grey lighten-3">
    <navbar>
      <v-toolbar-side-icon @click="switchSidebar"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-lg-and-up">Pondok Al-Madinah</v-toolbar-title>
    </navbar>
    <sidebar :drawer="drawer"></sidebar>
    <v-content>
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Sidebar from './components/layouts/Sidebar';
  import Navbar from './components/layouts/Navbar';

  export default {
    name: 'App',
    components: {
      'sidebar': Sidebar,
      'navbar': Navbar,
    },
    data: () => ({
      drawer: true,
    }),
    methods: {
      switchSidebar() {
        this.drawer = !this.drawer;
      }
    },
    created() {
      this.drawer = window.innerWidth > 1024;
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(10%);
  }
</style>