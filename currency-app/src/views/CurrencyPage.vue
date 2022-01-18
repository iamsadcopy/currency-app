<template>
    <div>
        <Header title="Курс валют"/>
        <h2>На {{convertDate(valutes["Date"])}}</h2>
        <NavigationBar />
        <CurrencyList v-bind:valutes="valutes"/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import Currency from '@/components/Currency.vue'
import CurrencyList from '@/components/CurrencyList.vue'

export default {
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
        Header,
        NavigationBar,
        Currency,
        CurrencyList
    },
    methods: {
        convertDate(date) {
            return date.split("T")[0]
        }
    }
}
</script>