<template lang="fr">
  <navbar></navbar>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{{ astre.name }}</h2>

        <div class="row">
          <div class="col">
            <p class="card-text fw-bold">Nom anglais : {{ astre.englishName }}</p>
            <p class="card-text fw-bold">Est une planète : {{ astre.isPlanet }}</p>
            <p class="card-text fw-bold">Semimajor Axis: {{ astre.semimajorAxis }}</p>
            <p class="card-text fw-bold">Perihelion: {{ astre.perihelion }}</p>
            <p class="card-text fw-bold">Aphelion: {{ astre.aphelion }}</p>
            <p class="card-text fw-bold">Eccentricity: {{ astre.eccentricity }}</p>
            <p class="card-text fw-bold">Inclination: {{ astre.inclination }}</p>
            <p class="card-text fw-bold">Densité : {{ astre.density }}</p>
            <p class="card-text fw-bold">Gravity: {{ astre.gravity }}</p>
            <p class="card-text fw-bold">Escape : {{ astre.escape }}</p>
            <p class="card-text fw-bold">MeanRadius: {{ astre.meanRadius }}</p>
          </div>

          <div class="col">
            <p class="card-text fw-bold">EquaRadius: {{ astre.equaRadius }}</p>
            <p class="card-text fw-bold">PolarRadius: {{ astre.polarRadius }}</p>
            <p class="card-text fw-bold">Flattening: {{ astre.flattening }}</p>
            <p class="card-text fw-bold">Dimension: {{ astre.dimension }}</p>
            <p class="card-text fw-bold">SideralOrbit: {{ astre.sideralOrbit }}</p>
            <p class="card-text fw-bold">SideralRotation: {{ astre.sideralRotation }}</p>
            <p class="card-text fw-bold">DiscoveredBy: {{ astre.discoveredBy }}</p>
            <p class="card-text fw-bold">DiscoveryDate: {{ astre.discoveryDate }}</p>
            <p class="card-text fw-bold">AlternativeName: {{ astre.alternativeName }}</p>
            <p class="card-text fw-bold">AxialTilt: {{ astre.axialTilt }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <h2>Moons</h2>
      <div v-if="astre.moons !== null">
        <div class="listMoons">
          <div class="card" v-for="moon in moons" :key="moon.id" :moon="moon">
            <div class="card-body">
              <h5 class="card-title">{{ moon.id }}</h5>
              <router-link @click="refresh" tag="button" :to="{ name: 'Astre', params: { id: moon.id }}">
                <a class="btn">Voir détails</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <p v-else>{{ astre.name }} n'a pas de lune.</p>
    </div>
</template>

<script>
import AxiosAPI from "./../serviceAxios/serviceAxios";
import Navbar from "./../components/Navbar";

export default {
  name: "Astre",
  components: {
    Navbar,
  },
  data() {
    return {
      astre: {},
      moons: [],
    }
  },
  props: {
    id: String
  },
  watch: {
    refresh() {
      if(this.$route.path === '/listeAstres/${id}') {

        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  },
  methods: {
    async getAstre() {
      this.astre = await AxiosAPI.findById(this.id);
      if (this.astre.moons !== null) {
        this.astre.moons.forEach(({ rel }) => {
          this.getMoon(rel);
        });
      }
    },
    async getMoon(moon) {
      const response = await AxiosAPI.findMoons(moon);
      this.moons.push(response);
    },
  },
  mounted() {
    this.getAstre();
  },
};
</script>

<style scoped>

.card {
  width: 550px; 
  margin: auto;
  margin-bottom: 15px;
}

.listMoons {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 1.2rem;
  margin: auto;
}
</style>
