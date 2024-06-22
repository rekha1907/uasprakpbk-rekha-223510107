<template>
    <q-page>
      <q-toolbar class="bg1 text-white">
        <q-toolbar-title>
          Weather Page
        </q-toolbar-title>
      </q-toolbar>
      <q-page-container>
        <WeatherWidget />
      </q-page-container>
    </q-page>
  </template>
  
  <script>
  import WeatherWidget from '../components/WeatherWidget.vue'
  
  export default {
    name: 'WeatherPage',
    components: {
      WeatherWidget
    }
  }
  </script>
  
  <style scoped>
  .bg1 {
background-color: rgba(138, 108, 53, 0);
}
</style>