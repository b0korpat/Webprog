<script setup>
import { RouterView } from 'vue-router'

</script>


<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Számnégyesk</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink to="/" class="nav-link">Kezdőlap</RouterLink>
        </li>
        <li class="nav-item">
          <router-link to="/uj-szam" class="nav-link">Új számnégyes</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
