<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Növénybolt</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink to="/" class="nav-link">Kezdőlap</RouterLink>
        </li>
        <li class="nav-item">
          <router-link to="/uj-noveny" class="nav-link">Új Növény</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
