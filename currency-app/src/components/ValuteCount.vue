<template>
  <div class="content">
    <input type="number" v-model="count" v-text="valCount" min="1" />
    <button v-on:click="$emit('change-valute-count', count)">
      Конвертировать
    </button>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    valCount: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      count: this.valCount,
    }
  },
  watch: {
    count: {
      handler(value) {
        this.$emit("change", value)
      },
    },
  },
}
</script>

<style scoped>
.content {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

input {
  margin-bottom: 10px;
}

button {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 0.5em 2em;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-color: #fdbe33 #000 #d77206;
  border-radius: 6px;
  background: linear-gradient(#f3ae0f, #e38916) #e38916;
  transition: 0.2s;
}

button:hover {
  background: linear-gradient(#f5ae00, #f59500) #f5ae00;
}
button:active {
  background: linear-gradient(#f59500, #f5ae00) #f59500;
}
</style>
