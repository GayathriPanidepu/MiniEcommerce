const fs=require('fs')
const http=require('http')
const url=require('url')
const slugify=require('slugify')

const replaceTemplate=require('./modules/replaceTemplate.js')

const data=fs.readFileSync('./data/data.json','utf-8')
const jsonData=JSON.parse(data)

const home=fs.readFileSync('./templates/home.html','utf-8')
const overviewPage=fs.readFileSync('./templates/overview.html','utf-8')
const productDetail=fs.readFileSync('./templates/product.html','utf-8')
const card=fs.readFileSync('./templates/card.html','utf-8')

const server=http.createServer((req,res)=>{
    const {query,pathname}=url.parse(req.url,true);
    if (pathname==='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(home)
    }
    else if (pathname==='/overview'){
        res.writeHead(200,{'Content-Type':'text/html'})
        const cardsHtml=jsonData.map(el=>replaceTemplate(card,el)).join('')
        const finalHtml=overviewPage.replace(/{%PRODUCTCARD%}/g,cardsHtml)
        res.end(finalHtml)
    }
    else if(pathname==='/product'){
        const product = jsonData[query.id]
        res.writeHead(200,{'Content-Type':'text/html'})
        const productdetails=replaceTemplate(productDetail,product)
        res.end(productdetails)
        }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end('Page Not Found')
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening on 127.0.0.1:8000');
});

