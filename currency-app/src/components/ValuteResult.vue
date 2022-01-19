<template>
  <div>
    {{ result }}
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: String,
    },
  },
}
</script>

<style scoped>
div {
  padding: 2rem;
}
</style>
