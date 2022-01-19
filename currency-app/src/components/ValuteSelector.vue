<template>
    <div>
        <select v-model="selected">
            <option 
                v-for="valute in items"
                :key="valute.CharCode"
                :value="valute.CharCode"
                v-text="valute.Name"
            />
        </select>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        items: {
            type: Array,
            default: () => []
        },
        value: {
            type: String,
            default: 'RUB'
        },
    },
    data() {
        return {
            selected: this.value
        }
    },
    watch: {
        selected: {
            handler(value) {
                this.$emit('change', value)
            }
        }
    },
}
</script>

<style scoped>

select {
    padding: .5rem 2rem;
    margin-bottom: 1rem;
    border-radius: 10px;
}

</style>