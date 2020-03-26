<template>
        <div>
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">title</th>
                        <th scope="col">body</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in items" :key="i">
                        <th scope="row">{{item.fields.title}}</th>
                        <td>
                            <nuxt-link :to="{name: 'blog-id', params: {id: item.sys.id}}">
                                リンク
                            </nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>
<script>
export default {
    props: ['items']
}
</script>