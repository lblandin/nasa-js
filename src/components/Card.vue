<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ astre.name }}</h5>
      <p class="card-text">Nom anglais : {{ astre.englishName }}</p>
      <p class="card-text">Densité : {{ astre.density }}</p>

      <Favoris :id="astre.id" :name="astre.englishName" :favoris="favoris" @update="updateFavoris"></Favoris>

      <router-link tag="button" :to="{ name: 'Astre', params: { id: astre.id }}">
        <a class="btn">Voir détails</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import Favoris from '../components/Favoris'

export default {
  name: "Card",
  components: {
    Favoris
  },
  data() {
    return {
      favoris: false,
    }
  },
  props: {
    astre: {
      type: Object,
      required: true
    },
  },
  methods: {
    updateFavoris(value) {
      this.favoris = value;
    },
  },
  mounted() {
    const favoris = this.$store.state.favorisTable;
    console.log("Store initial", favoris);
    favoris.map((f) => {
      if (f === this.astre.id) {
        this.favoris = true;
      }
    });
  },
};
</script>


<style scoped>

.card {
  width: 368px; 
  margin: auto;
  margin-bottom: 15px;
}
</style>
