const express = require('express');

const server = express();

const PORT = 8000;
const helmet = require('helmet')
const cors = require('cors')
const db = require('./dbConfig')


server.use(cors())
server.use(helmet())
server.use(express.json())

server.get('/' ,(req,res)=>{

    res.send('Landing page for default server')
})

server.get('/getCat', async (req,res) =>{
         // Get all categories
         try{
            const cats = await db('categories')
    
            for(var i = 0; i < cats.length;i++){
                cats[i]['products'] = []
                const products = await db('products').where({'prodCat' : cats[i].catName})
                for (var z = 0; z < products.length; z++){
                    cats[i]['products'].push(products[z].id)
                }
                
            }    
            res.json(cats)
        }catch(err){
            console.log(err)
        }
} )

server.get('/getProd/:id', async (req,res) =>{
         // Get product by id
         const {id} = req.params
         try{
             const singleProd = await db('products').where({id})
             if(singleProd.length === 0) {
                res.status(404).json({server: 'Product with id: ' + id +  ' not found'}) 
             }else{
                res.status(200).json(singleProd)
             }  

         }catch(err){
             console.log(err)
         }
} )

server.get('/getProd', async (req,res) =>{
    // Get all products
    const {id} = req.params
    try{
        const products = await db('products')
        if(products.length === 0) {
           res.status(404).json({server: 'Product with id: ' + id +  ' not found'}) 
        }else{
           res.status(200).json(products)
        }  

    }catch(err){
        console.log(err)
    }
} )

server.get('/getProdCat/:catName', async (req,res) =>{
    // Get all products in a cat
    const {catName} = req.params
    try{
        const PordforCat = await db('products').where({'prodCat':catName})
        if(PordforCat.length === 0) {
           res.status(404).json({server: 'Product with id: ' + catName +  ' not found'}) 
        }else{
           res.status(200).json(PordforCat)
        }  

    }catch(err){
        console.log(err)
    }
} )

server.post('/postCat', async (req,res) =>{
         // Post categories
         const {catName, catDesc, color}  = req.body;
          try{
            
            const addCat ={
                catName : catName,
                catDesc : catDesc,
                color : color
            }
            await db('categories').insert(addCat)
            res.json({server :'Category successfully stored'})
          }catch(err){
              console.log(err)
          }
} )

server.post('/postProd', async(req,res) =>{
         // Post product
         const {prodName, prodDesc, price, prodImg, prodCat}  = req.body;
         try{
           
           const addProd ={
                prodName : prodName,
                prodDesc : prodDesc,
                price : price,
                prodImg : prodImg,
                prodCat : prodCat
           }
           await db('products').insert(addProd)
           res.json({server :'Product successfully stored'})
         }catch(err){
             console.log(err)
         }

} )

server.put('/updateCat/:id', async (req,res) =>{
         // Update a categorie
         const id = req.params
         const {catName, catDesc, color}  = req.body;
         try{
            const updateCat ={
                catName : catName,
                catDesc : catDesc,
                color : color
            }
             const specificCat = await db('categories').where({id}).update(updateCat)
             specificCat === 0 ? res.status(404).json({server: 'Category not found'}) : res.status(200).json({server: 'Category successfully updated'})
         }catch(err){
             console.log(err)
         }
} )

server.put('/updateProd',async (req,res) =>{
         // Update a product 
         const {id} = req.params
         const {prodName, prodDesc, price, prodImg, prodCat}  = req.body;
         try{
            const updateProd ={
                prodName : prodName,
                prodDesc : prodDesc,
                price : price,
                prodImg : prodImg,
                prodCat : prodCat
           }
             const specificProd = await db('products').where({id}).update(updateProd)
             specificProd === 0 ? res.status(404).json({server: 'Category not found'}) : res.status(200).json({server: 'Product successfully updated'})
         }catch(err){
             console.log(err)
         } 
} )


server.delete('/deleteCat/:id', async(req,res) =>{
         // Delete a category
         const {id} = req.params
         try{

             await db('categories').where({id}).del()
            res.status(200).json({server: 'Category successfully deleted'})
         }catch(err){
             console.log(err)
         }
} )

server.delete('/deleteProd/:id',async (req,res) =>{
         // Delete a products
         const {id} = req.params
         try{

             await db('products').where({id}).del()
            res.status(200).json({server: 'Product successfully deleted'})
         }catch(err){
             console.log(err)
         }   
} )





server.listen(PORT, ()=> console.log('server is running at port: ' + PORT))