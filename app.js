const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const { MongoNetworkError } = require('mongodb')
const app=express()
const port=7878

app.use(express.static('public'))
app.use('./css',express.static(__dirname, + 'public/css'))
app.use('./img',express.static(__dirname, + 'public/img'))
app.use('./js',express.static(__dirname, + 'public/js'))
app.use('./lib',express.static(__dirname, + 'public/lib'))
app.use('./scss',express.static(__dirname, + 'public/scss'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

const Contact=require('./contactdb.js')


mongoose.connect("mongodb://127.0.0.1:/database_connect").then(()=>{
    console.log("database connected")
})

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/blog',(req,res)=>{
    res.render('blog')
})
app.get('/products',(req,res)=>{
    res.render('products')
})
app.get('/testimonial',(req,res)=>{
    res.render('testimonial')
})
app.get('/404',(req,res)=>{
    res.render('404')
})
app.get('/feature',(req,res)=>{
    res.render('feature')
})


app.post('/insertdata',  async(req,res)=>{
   const con=new Contact(req.body)
   await con.save()
   res.redirect('/')
})

 
app.listen(port)
console.log("project running on port "+port)