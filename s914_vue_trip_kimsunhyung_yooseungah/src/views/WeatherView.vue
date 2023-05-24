<template>
    <div>
        <weather-component-vue></weather-component-vue>
    </div>
  
</template>

<script>
import WeatherComponentVue from '@/components/WeatherComponent.vue'
export default {
    name:'WeatherView',
    components:{
        WeatherComponentVue
    }
}
</script>

<style>

</style>