<template>
    <nav class="navbar navbar-expand-lg navbar-nav mx-auto">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link tag="div" to="/">
                        <a class="nav-link" >Accueil</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link tag="div" to="/listeAstres">
                        <a class="nav-link" >Liste des astres</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link tag="div" to="/favoris">
                        <a class="nav-link" >Favoris</a>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script>
  export default {
    name: 'Navbar',
  }
</script>

<style>
.nav-link {
    color: #6f42c1;
    font-weight: 500;
}

.nav-link:hover {
    color: black;
}
</style>