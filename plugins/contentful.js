import * as dotenv from 'dotenv'
import * as contentful from 'contentful'

dotenv.config()  // 環境変数の読み込み
const config = {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_ACCESS_TOKEN
}

const client = contentful.createClient(config)

export default client