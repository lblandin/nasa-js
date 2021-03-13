<template lang="fr">
  <div>
    <navbar></navbar>
    <h1 class="text-center">Listes des astres</h1>
    <div class="listAstres">
      <card v-for="astre in astres" :key="astre.id" :astre="astre"></card>
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import Card from "./../components/Card.vue";
import AxiosAPI from "./../serviceAxios/serviceAxios";

export default {
  name: "ListeAstres",
  components: {
    Card,
    Navbar,
  },
  data() {
    return {
      astres: {}
    }
  },
  methods: {
    async fetchAstres() {
      this.astres = await AxiosAPI.findAll();
    },
  },
  mounted() {
    this.fetchAstres();
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
</style>