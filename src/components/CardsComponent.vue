<template>
  <div
    class="card flex borderRound"
    v-for="character in characters"
    :key="character.id"
    @click="onCardClick(character.id)"
  >
    <router-link :to="'/details/' + character.id" class="router">
      <div>
        <img :src="character.image" class="borderRound" alt="..." />
      </div>
    </router-link>
      <div class="card-body borderRound">
        <h4 class="card-title">{{ character.name }}</h4>
        <p class="card-text"><strong>Gender:</strong> {{ character.gender }}</p>
        <p class="card-text">
          <strong>Species:</strong> {{ character.species }}
        </p>
        <p class="card-text"><strong>Status:</strong> {{ character.status }}</p>
      </div>
  </div>
</template>

<script>
  export default {
    name: "CardsComponent",
    props: {
      characters: Object,
    },    
   
  };
</script>


