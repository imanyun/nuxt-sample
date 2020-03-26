<template>
  <div class="container">
    <h1>{{message}}</h1>
    <button @click="btnClick" class="btn btn-primary">表示/非表示</button>
    <p v-if="show">いまはTrueです</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, kikagaku",
      show: true
    }
  },
  methods: {
    btnClick() {
      this.show = !this.show
    }
  }
}
</script>
