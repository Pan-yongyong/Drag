import Vue from 'vue'
import input from '../components/input.vue'
import input2 from '../components/input2.vue'
import img from '../components/img.vue'
import button from '../components/button.vue'

const comMap = {
  input,
  input2,
  img,
  button
}

const returnDom = function(props) {
  const newCom = Vue.extend({
    render(createElement) {
      return createElement(comMap[props])
    }
  })
  return new newCom()
}

export default returnDom
