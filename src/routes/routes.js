import { createWebHistory, createRouter } from "vue-router";
import Accueil from './../pages/Accueil.vue'
import ListeAstres from './../pages/ListeAstres.vue'
import Astre from './../pages/Astres.vue'
import Favoris from './../pages/Favoris.vue'

const routes = [
  { path: "/", name: "Accueil", component: Accueil },
  { path: "/listeAstres", name: "ListeAstres", component: ListeAstres },
  { path: "/listeAstres/:id", name: "Astre", component: Astre, props: true },
  { path: "/favoris", name: "Favoris", component: Favoris }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;