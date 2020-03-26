<template>
  <div class="container">
    <h1>{{message}}</h1>
    <p>{{json_data}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      message: "Axiosのテスト"
    }
  },
  async asyncData() {
    const url = 'https://jsonplaceholder.typicode.com/posts/'
    const perms = {
        'userId': 2,
        'id': 1,
        'title': 'test',
        'body': 'This is a test.'
    }
    const { data } = await axios.post(url, perms)
    return {
        json_data: data
    }
  }
}
</script>
