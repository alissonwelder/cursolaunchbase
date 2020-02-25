const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/", function(req, res){

    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/49004112?s=400&u=4a50ac2b7bd4c455544ecd397fd109103c2583f5&v=4",
        name: "Alisson Welder",
        role: "Instrutor Web Senior",
        description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Acompanhe meu <a href="http://www.github.com/alissonwelder" target="_blank">GitHub</a>',
        links: [
            { name: "Facebook", url: "http://facebook.com/alissonwelder"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/alisson-welder-288327169/"}
        ]
    }
    return res.render("about", { about })
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", {items: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
            return video.id == id
    
    })

    if (!video) {
        return res.send("Video not found!")
    }
    
    return res.render("video", { item: video })
})

server.listen(5000, function(){
    console.log("Server is running")
})