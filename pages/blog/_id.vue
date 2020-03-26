<template>
    <div class="container">
        <h1>{{item.fields.title}}</h1>
        <p v-for="(content, i) in item.fields.body.content" :key="i">
            {{content.content[0].value}}
        </p>
    </div>
</template>

<script>
import client from '~/plugins/contentful.js'

export default {
    async asyncData({params}) {
        const item = await client.getEntry(params.id)
        return {
            item: item
        }
    }
}
</script>