<template>
  <div id="content">
    <div class="left">
      <div draggable="true" @dragstart="flag = false" @dragend="addDom($event,item)" class="com" v-for="item in leftComponents">
        {{item.name}}
      </div>
    </div>
    <div @dragover="dragover" @mouseup="mouseup" @mousemove="mousemove" @drop="drop" class="right">
    </div>
  </div>
</template>

<script>
  import returnDom from '../util/createNode.js'
  export default {
    name: 'Index',
    data() {
      return {
        leftComponents: [
          {
            type: 'input',
            name: 'input'
          },
          {
            type: 'input',
            name: 'input2'
          },
          {
            type: 'img',
            name: 'img'
          },
          {
            type: 'button',
            name: 'button'
          }
        ],
        flag: false,
        mouse: false,
        e: null
      }
    },
    methods:{
      addDom(e,item) {
        if(!this.flag) return
        const dom = returnDom(item.name)
        const right = document.querySelector('.right')
        let node = dom.$mount().$el
        node.style.top = e.clientY + 'px'
        node.style.left = (e.clientX - 430) + 'px'
        node.onmousedown = this.mousedown
        // node.onmousemove = this.mousemove
        // node.onmouseup = this.mouseup
        right.appendChild(node)
      },
      allowDrop(e) {
        // console.log(e)
      },
      dragover(e) {
        e.preventDefault()
        // console.log(e)
      },
      drop(e) {
        e.preventDefault()
        this.flag = true
      },
      mousedown(e) {
        this.e = this.getNode(e)
        this.mouse = true
      },
      getNode(e) {
        let target = e.target
        while(target.className != 'main') {
          target = target.parentNode
        }
        if(target.className === 'main') {
          return target
        }
      },
      mousemove(e) {
        if(!this.mouse) return
        e.stopPropagation()
        this.e.style.top = e.clientY + 'px'
        this.e.style.left = (e.clientX - 430) + 'px'
      },
      mouseup() {
        this.mouse = false
      }
    }
  }
</script>

<style>
</style>

<style type="text/css">
  .left{
    height: 99vh;
    width: 420px;
    border: 1px solid #42B983;
    float: left;
  }
  .left .com{
    height: 50px;
    width: 80%;
    margin: 0 auto;
    border: 1px solid aqua;
    line-height: 50px;
    text-align: center;
    margin-top: 20px;
    border-radius: 10px;
    cursor: pointer;
  }
  .right{
    height: 99vh;
    width: 1000px;
    float: right;
    border: 1px solid burlywood;
    position: relative;
    overflow: hidden;
  }
</style>
