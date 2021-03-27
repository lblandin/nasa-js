<template>
    <div @click="setFavoris(id, favoris)">
        <img v-if="favoris" src="../assets/heart_full.png" />
        <img v-else src="../assets/heart.png" />
    </div>
</template>


<script>

export default {
    name: "Favoris",
    props: {
        id: String,
        favoris: Boolean,
    },
    methods: {
        setFavoris(id, favoris) {
            if(favoris) {
                this.$emit("update", false);
                this.$store.commit("supprimerFavoris", id);
                this.$toast.error('Astre supprimé des favoris');
                console.log("Store après suppression", this.$store.state.favorisTable);
            } else {
                this.$emit("update", true);
                this.$store.commit("ajouterFavoris", id);
                this.$toast.success(`Astre ajouté aux favoris`);
                console.log("Store après ajout", this.$store.state.favorisTable);
            }
        }
    },
}
</script>
