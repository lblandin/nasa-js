<template lang="fr">
  <navbar></navbar>
    <div class="card">
      <!-- <router-link tag="button" to="/listeAstres" class="btn btn-primary">
        Return 
      </router-link> -->
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
            <p class="card-text fw-bold">Masse : {{ astre.mass.massValue }} and {{ astre.mass.massExponent }}</p>
            <p class="card-text fw-bold">Volume : {{ astre.vol.volValue }} and {{ astre.vol.volExponent }}</p>
            <p class="card-text fw-bold">Densité : {{ astre.density }}</p>
            <p class="card-text fw-bold">Gravity: {{ astre.gravity }}</p>
          </div>

          <div class="col">
            <p class="card-text fw-bold">Escape : {{ astre.escape }}</p>
            <p class="card-text fw-bold">MeanRadius: {{ astre.meanRadius }}</p>
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
</template>

<script>
import AxiosAPI from "./../serviceAxios/serviceAxios";
import Navbar from "./../components/Navbar";

export default {
  name: "Astre",
  components: {
    Navbar
  },
  data() {
    return {
      astre: {}
    }
  },
  props: {
    id: String,
  },
  methods: {
    async fetchAstre() {
      this.astre = await AxiosAPI.findById(this.id);
    },
  },
  mounted() {
    this.fetchAstre();
  },
};
</script>

<style scoped>

.card {
  width: 550px; 
  margin: auto;
  margin-bottom: 15px;
}
</style>
