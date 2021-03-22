<template lang="fr">
  <div>
    <navbar></navbar>
    <h1 class="text-center">Listes des astres</h1>
    <div class="filter">
      <div>
        <Filter :id="'IsPlanet'" :text="'Est un astre'" v-model="IsPlanet" @click="onFilter"></Filter>
      </div>
      <div class="filter-hasmoons">
        <Filter :id="'HasMoons'" :text="'Possède des lunes'" v-model="HasMoons" @click="onFilter"></Filter>
      </div>
    </div>
    <div class="listAstres">
      <card v-for="astre in filtreAstres" :key="astre.id" :astre="astre"></card>
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import Card from "../components/Card.vue";
import Filter from "../components/Filter.vue";
import AxiosAPI from "./../serviceAxios/serviceAxios";

export default {
  name: "ListeAstres",
  components: {
    Card,
    Navbar,
    Filter
  },
  data() {
    return {
      astres: {},
      IsPlanet: false,
      HasMoons: false
    }
  },
  computed: {
    filtreAstres() {
      if (this.IsPlanet && this.HasMoons) {
        return this.astres.filter((astre) => astre.isPlanet === true).filter((astre) => astre.moons !== null);
      } 
      if (this.HasMoons) {
        return this.astres.filter((astre) => astre.moons !== null);
      } 
      if (this.IsPlanet) {
        return this.astres.filter((astre) => astre.isPlanet === true);
      } 

      return this.astres;

    }

  },
  methods: {
    async getAstres() {
      this.astres = await AxiosAPI.findAll();
    },
    onFilter({ target }) {

      target.name === "IsPlanet" &&
        (this.IsPlanet = target.checked);

      target.name === "HasMoons" &&
        (this.HasMoons = target.checked);

      
    },
  },
  mounted() {
    this.getAstres();
  },
};
</script>


<style scoped>
.listAstres {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 1.2rem;
  margin: auto;
}

.filter {
  display: flex;
  justify-content: center;
}

.filter-hasmoons {
  margin-left: 20px;;
}
</style>