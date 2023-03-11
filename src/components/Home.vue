<template>
  <div class="home-container">
    <div class="search-container flex fullW">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Say his name!, example: Heisenberg"
      />
    </div>

    <div class="container flex">
      <CardsComponent :characters="filteredCharacters" />
    </div>
  </div>
</template>

<script>
  import CardsComponent from "./CardsComponent.vue";

  export default {
    name: "Home",
    components: {
      CardsComponent,
    },
    props: {
      characters: Object,
      episodes: Object,
    },
    data() {
      return {
        searchTerm: "",
      };
    },
    computed: {
      filteredCharacters() {
        if (!this.searchTerm) {
          return this.characters;
        }

        const searchTermLowerCase = this.searchTerm.toLowerCase();
        return this.characters.filter((character) =>
          character.name.toLowerCase().includes(searchTermLowerCase)
        );
      },
    },
  };
</script>
