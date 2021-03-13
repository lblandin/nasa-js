<template>
  <div class="container">
    <navbar></navbar>
    <img class="mx-auto d-block" src="../assets/astrology.png" alt="">
    <div class="text-center">
      <h1 class="display-1">Astres - ologie</h1>
      <p>Bienvenue sur notre site d'astres - ologie. 
      Grace à notre site et à l'API <a href="https://www.le-systeme-solaire.net/">du système solaire</a> vous allez pouvoir connaitre tout les astres et leur signification. 
      N'attendez plus, devenez les futurs Christine Haas et épatez votre entourage ! 
      Un repas de famille et vous ne vous sentez pas bien ? Dites que la lune est en froid avec Jupiter et que ça joue sur votre humeur !
      Pour en savoir plus rendez-vous sur le README du projet</p>

        <router-link tag="div" to="/listeAstres">
          <a class="btn">Voir les astres</a>
        </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";


export default {
  name: "Accueil",
  components: {
    Navbar,
  },

};
</script>


<style>

.container {
  margin-bottom: 15px;
}

.btn {
  background-color: #6f42c1;
  color: white;
}

.btn:hover {
  color: white;
}
</style>
