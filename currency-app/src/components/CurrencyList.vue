<template>
    <div>
        <ul>
            <CurrencyItem 
                v-bind:key="valuteInfo.ID"
                v-for="valuteInfo of Object.values(valutes['Valute'])"
                v-bind:valuteInfo="valuteInfo"
            />
        </ul>
    </div>
</template>

<script>
import CurrencyItem from "@/components/CurrencyItem.vue"



export default {
    props: ['valutes'],
    components: {
        CurrencyItem
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>