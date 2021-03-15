<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ moon.id }}</h5>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    moon: {
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
