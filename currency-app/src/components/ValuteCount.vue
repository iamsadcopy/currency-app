<template>
    <div class="content">
        <input type="number" v-model="count" v-text="valCount" min="1">
        <button v-on:click="$emit('change-valute-count', count)">Конвертировать</button>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        valCount: {
            type: String,
            default: "1"
        }
    },
    data() {
        return {
            count: this.valCount
        }
    },
    watch: {
        count: {
            handler(value) {
                this.$emit('change', value)
            }
        }
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
  padding: .5em 2em;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-color: #FDBE33 #000 #D77206;
  border-radius: 6px;
  background: linear-gradient(#F3AE0F, #E38916) #E38916;
  transition: 0.2s;
}

button:hover { background: linear-gradient(#f5ae00, #f59500) #f5ae00; }
button:active { background: linear-gradient(#f59500, #f5ae00) #f59500; }
</style>