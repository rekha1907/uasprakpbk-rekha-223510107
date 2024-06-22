<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bgf text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" class="text-white" />
        <q-toolbar-title>
          <q-icon name="cloud" alt="Logo" class="logo" size="30px" />
          Weather App
        </q-toolbar-title>
        <q-avatar icon="person"  text-color="white" size="50px" />
        Rekha Widya Andini
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg2">
      <q-list>
        <q-item to="/" tag="router-link" exact clickable>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item to="/weather" tag="router-link" clickable>
          <q-item-section avatar>
            <q-icon name="cloud" />
          </q-item-section>
          <q-item-section>Weather</q-item-section>
        </q-item>
        <q-item to="/tugas" tag="router-link" clickable>
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>Tugas</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bgf text-black text-center">
      <q-toolbar>
        <q-toolbar-title>
          © Rekha Widya Andini 223510107
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
  }
}
</script>

<style>
.logo {
  border-radius: 50%;
}

.bgf {
  background-color: rgba(138, 108, 53, 0);
}
</style>
