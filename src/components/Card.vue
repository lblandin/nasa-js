<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ astre.name }}</h5>
      <p class="card-text">Nom anglais : {{ astre.englishName }}</p>
      <p class="card-text">Densité : {{ astre.density }}</p>

      <router-link tag="button" :to="{ name: 'Astre', params: { id: astre.id }}">
        <a class="btn">Voir détails</a>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    astre: {
      type: Object,
      required: true
    },
  }
};
</script>


<style scoped>

.card {
  width: 368px; 
  margin: auto;
  margin-bottom: 15px;
}
</style>
