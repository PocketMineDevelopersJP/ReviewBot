import dotenv from 'dotenv'
import { Client } from 'klasa'

dotenv.config()

const client = new Client({
  disabledCorePieces: ['commands'],
  typing: true,
  prefix: 're!!'
})

client.login()
