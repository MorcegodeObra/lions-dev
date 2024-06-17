import {createServer} from 'node:http'
import {once} from 'node:events'
async function HttpHandler(request,response){
try{
const data = await once (request,'data')
response.writeHead(200)
} catch(e){
response.writeHead(500)
}
}
const app = createServer(HttpHandler)
.listen(3333)
.on('listening',()=>console.log('http server ready'))