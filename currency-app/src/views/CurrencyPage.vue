<template>
    <div>
        <Header title="Курс валют"/>
        <NavigationBar />
        <Currency />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import Currency from '@/components/Currency.vue'

export default {
    components: {
        Header,
        NavigationBar,
        Currency
    }
}
</script>