// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { buildClient } from '@datocms/cma-client-node'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    // return req.body
    const { name, email, message } = JSON.parse(req.body)

    const client = buildClient({ apiToken: process.env.NEXT_DATOCMS_API_TOKEN })

    await client.items.create({
      item_type: { type: 'item_type', id: '1082616' },
      user_name: name,
      user_email: email,
      user_message: message
    })

    return res.status(200).json({ success: true })
  }
}
