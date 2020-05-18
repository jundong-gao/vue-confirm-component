const res = {}
import confrim from './confirm.vue'
res.install = function(Vue){
    Vue.component(confrim.name, confrim)
}


export default res
