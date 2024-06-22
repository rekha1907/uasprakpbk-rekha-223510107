<template>
    <q-page>
      <q-toolbar class="bg1 text-white">
        <q-toolbar-title>
          Home Page
        </q-toolbar-title>
      </q-toolbar>
      <q-page-container>
        <div class="row justify-center q-mt-md">
          <q-btn @click="$router.push('/weather')" label="Go to Weather Page" color="primary" />
        </div>
      </q-page-container>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
    .bg1 {
  background-color: rgba(138, 108, 53, 0);
}
  </style>
  