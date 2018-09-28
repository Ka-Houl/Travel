<template>
  <div>
    <city-header></city-header>
    <city-list></city-list> 	
  </div>

</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
export default{
  name: 'City',
	components: {
		'city-header': CityHeader,
		'city-list': CityList,
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
