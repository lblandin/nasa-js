<template>
  <div>
    <input  type="checkbox" v-bind:checked="checked" :name="id" :id="id" @change="$emit('update', $event)">
    <label :for="id">
      {{ text }}
    </label>
  </div>
</template>

<script>
export default {
  name: "filter",
  props: {
    id: String, 
    text: String, 
    checked: Boolean
  }
};
</script>
