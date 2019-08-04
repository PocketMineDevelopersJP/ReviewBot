import dotenv from 'dotenv'
import { Client } from 'klasa'

dotenv.config()

const client = new Client({
  prefix: 're!!',
  typing: true,
  language: 'ja-JP',
  disabledCorePieces: ['commands']
})

client.login()
