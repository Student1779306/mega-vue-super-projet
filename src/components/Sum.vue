<template>
  <h1>Let's sum some numbers</h1>

  <label for="nb1">Number 1 </label>
  <input placeholder="Number to add" v-model="nb1" id="nb1" type="number"/>
  <br />
  <label for="nb2">Number 2 </label>
  <input placeholder="Number to add" v-model="nb2" id="nb2" type="number"/>
  <h3>The Sum of {{ nb1 }} and {{ nb2 }} is:
    <div class="resultOfSum">
      {{ parseFloat(nb1) + parseFloat(nb2) }}
    </div>
  </h3>
</template>

<script>
export default {
  name: "Sum",
    data: () => ({
      nb1:1,
      nb2:1,
    })
}
</script>

<style scoped>

</style>