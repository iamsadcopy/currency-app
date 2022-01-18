<template>
    <div>
        <h2>На {{valutes["Date"] | convertDate}}</h2>
        <CurrencyList v-bind:valutes="valutes"/>
    </div>
</template>

<script>
import CurrencyList from '@/components/CurrencyList.vue'

export default {
    filters: {
        convertDate(date) {
            return date.split("T")[0]
        }
    },
    data() {
        return {
            valutes: []
        }
    },
    mounted() {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.json())
            .then(json => {
                this.valutes = json
            })
    },
    components: {
        CurrencyList
    },
    methods: {
        convertDate(date) {
            return date.split("T")[0]
        }
    }
}
</script>