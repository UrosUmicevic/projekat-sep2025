<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

const movies = ref<MovieModel[]>()
axios.get('https://movie.pequla.com/api/movie')
.then(rsp=>movies.value = rsp.data)
.catch(e => {})

</script>

<template>
 <div v-if="movies">
    <p>Filmovi</p>
    <ul>
        <li v-for="m of movies">
            <RouterLink :to="`/movies/$(m.shortUrl)`">
                {{ m.title }} (reziser:{{ m.director.name }})
            </RouterLink>
            <p>Glumci:</p>
            <ul v-for="a of m.movieActors">
                <li>{{ a.actor.name }}</li>
            </ul>
            <p>Zanrovi:</p>
            <ul v-for="g of m.movieGenres">
                <li>{{ g.genre.name }}</li>
            </ul>
        </li>
    </ul>
  <pre>{{ movies }}</pre>
</div>
<div v-else>Podaci se ucitavaju</div>
</template>