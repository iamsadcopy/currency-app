import Vue from 'vue'
import Router from 'vue-router'
import CurrencyPage from '@/views/CurrencyPage'
import ConverterPage from '@/views/ConverterPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: CurrencyPage,
            meta: {
                title: 'Курс валют',
            }
        },
        {
            path: '/converter',
            component: ConverterPage,
            meta: {
                title: 'Конвертер',
            }
        }
    ]
})