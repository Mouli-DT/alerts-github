const express = require("express")
const axios = require("axios")

const app = express()
app.use(express.json())

const TEAMS_WEBHOOK = "https://digitaltrack.webhook.office.com/webhookb2/5d17f7ba-6d18-4947-a65d-25fd82b148b0@4f4c9b7c-def4-4bd2-972c-5184172db054/IncomingWebhook/6c666c7f3dec4a2abfb95fe2895e1d08/68a389fa-ec64-45c3-8f9e-ea7837599493/V2nwCsgttGdopksGx1gUVnK8R9f19vocCRa4-Lqs78A9Q1"

app.post("/github", async (req, res) => {

    const repo = req.body.repository.name
    const branch = req.body.ref
    const user = req.body.pusher.name

    const message = {
        text: `🚀 GitHub Push\nRepo: ${repo}\nBranch: ${branch}\nBy: ${user}`
    }

    await axios.post(TEAMS_WEBHOOK, message)

    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log("Webhook server running")
})