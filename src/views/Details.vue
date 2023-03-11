<template>
  <div class="tall-component">
    <router-link to="/" class="routerlink">Go home</router-link>
    <div v-for="character in characters" :key="character.id">
      <div v-if="character.id == $route.params.id" class="big_card_inside">
        <div class="big_card_image">
          <img :src="character.image" :alt="character.name" />
        </div>
        <div class="big_card_details">
          <h1>{{ character.mainname }}</h1>
         <ul>
            <li><strong>gênero:</strong> {{ character.gender }}</li>
            <li><strong>Status:</strong> {{ character.status }}</li>
            <li><strong>Species:</strong> {{ character.species }}</li>
            <li><strong>Planet:</strong> {{ character.originName }}</li>
            <li><strong>Location:</strong> {{ character.locationName }}</li>
            <li>
              <strong>Episodes:</strong>
              <ul class="episodes-list">
                <div v-for="episodeUrl in character.episode" :key="episodeUrl">
                  <li v-if="episodeMap[episodeUrl]">
                    Episode: {{ episodeMap[episodeUrl].number }}, Name:
                    {{ episodeMap[episodeUrl].name }}
                  </li>
                </div>
              </ul>
            </li>
          </ul> 
        </div>
      </div>
    </div>
    <div class="tall-component2"></div>
  </div>
</template>

<script>
  export default {
    name: "Details",
    props: {
      id: String,
      characters: Object,
      episodes: Object,
    },
    computed: {
      episodeMap() {
        return this.episodes.reduce((map, episode) => {
          map[episode.url] = {
            number: episode.episode,
            name: episode.name,
          };
          return map;
        }, {});
      },
    },
  };
</script>
