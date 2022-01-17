<template>
    <div>
        <Header title="Конвертер валют"/>
        <NavigationBar />
        <Converter />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import Converter from '@/components/Converter.vue'

export default {
    components: {
        Header,
        NavigationBar,
        Converter
    }
}
</script>