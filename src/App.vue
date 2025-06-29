<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const year = new Date().getFullYear()
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">
      PSEP 2025
      </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/" exact-active-class="active">
            Pocetna
            </RouterLink>
        </li>
      <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/list" exact-active-class="active">
            Lista Filmova
            </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/about" exact-active-class="active">
            O aplikaciji
            </RouterLink>
            </li>
      </ul>
    </div>
  </div>
</nav> 
  <RouterView />
<p class="text-center">&copy: {{ year }} Univerzitet Singidunum - PSEP</p>
  </div>
</template>

