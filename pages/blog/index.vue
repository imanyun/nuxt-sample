<template>
    <div class="container">
        <h1>{{message}}</h1>
        <post :items="items"></post>
    </div>
</template>
<script>
import client from '~/plugins/contentful.js'
import post from '~/components/post.vue'

export default {
    components: {
        post
    },
    data() {
        return {
            message: 'Contentfulのテスト'
        }
    },
    async asyncData() {
        const {items} = await client.getEntries({content_type: process.env.CTF_CONTENT_TYPE})
        return {
            items: items
        }
    }
}
</script>