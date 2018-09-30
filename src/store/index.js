import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var defaultCity = '成都'

// try {
// 	if (localStorage.city) {
// 		defaultCity = localStorage.city
// 	}
// } catch (e) {
// 	//
// }

export default new Vuex.Store({
	state: {
		city: defaultCity 
	},
	// mutations: {
	// 	changeCityName : function (state, city) {
	// 		state.city = city
	// 		console.log(state.city)
	// 		localStorage.city = city
	// 	}
	// }
})

