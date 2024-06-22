<template>
  <q-card class="q-pa-md my-card">
    <q-card-section>
      <q-input
        v-model="city"
        label="Enter city name"
        outlined
        @keyup.enter="fetchWeather"
        dense
      />
      <q-btn color="primary" @click="fetchWeather" class="q-mt-md">
        Get Weather
      </q-btn>
    </q-card-section>
    <q-card-section v-if="weather">
      <div class="text-h6 q-mb-sm">Weather in {{ weather.name }}</div>
      <q-separator />
      <div class="q-my-md">
        <q-icon name="cloud" size="64px" class="q-mb-md" />
        <div class="text-h5">{{ weather.weather[0]?.description }}</div>
        <div class="text-h4">{{ weather.main.temp }}°C</div>
      </div>
    </q-card-section>
    <q-card-section v-else>
      Loading...
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      weather: null
    }
  },
  methods: {
    async fetchWeather() {
      if (this.city.trim() === '') {
        alert('Please enter a city name');
        return;
      }
      const apiKey = '68fba42e046b9852c0a4534a915e99a9';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
          this.weather = data;
        } else {
          alert('City not found');
          this.weather = null;
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
}
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: auto;
  text-align: center;
  background-color: #e3f2fd;
  border-radius: 8px;
}
</style>
