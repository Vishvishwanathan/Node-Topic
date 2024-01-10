// console.log("Hello Backend") 
// const os= require('os')
// console.log(os.version())
// console.log(os.platform)


// // console.log(os.hostname())
// const userData =[{
//     name: "Vishwanathan",
//     Email:"Vishwa@gmail.com",
//     Adress:{
//         no:"175/73",
//         Street:"maduranthangam",
//         City: "maduranthagam ",
//     }
// },

// {
//     name: "Vishwanathan",
//     Email:"Vishwa@gmail.com",
//     Adress:{
//         no:"175/73",
//         Street:"maduranthangam",
//         City: "maduranthagam ",
//     }
// },
// {
//     name: "Vishwanathan",
//     Email:"Vishwa@gmail.com",
//     Adress:{
//         no:"175/73",
//         Street:"maduranthangam",
//         City: "maduranthagam ",
//     }
// },
// {
//     name: "Vishwanathan",
//     Email:"Vishwa@gmail.com",
//     Adress:{
//         no:"175/73",
//         Street:"maduranthangam",
//         City: "maduranthagam ",
//     }
// },
// {
//     name: "Vishwanathan",
//     Email:"Vishwa@gmail.com",
//     Adress:{
//         no:"175/73",
//         Street:"maduranthangam",
//         City: "maduranthagam ",
//     }
// },
// {
//     name: "Vishwanathan",
//     Email:"Vishwa@gmail.com",
//     Adress:{
//         no:"175/73",
//         Street:"maduranthangam",
//         City: "maduranthagam ",
//     }
// },
// {
//     name: "Vishwanathan",
//     Email:"Vishwa@gmail.com",
//     Adress:{
//         no:"175/73",
//         Street:"maduranthangam",
//         City: "maduranthagam ",
//     }
// },
// {
//     name: "Vishwanathan",
//     Email:"Vishwa@gmail.com",
//     Adress:{
//         no:"175/73",
//         Street:"maduranthangam",
//         City: "maduranthagam ",
//     }
// }
// ]

// const http =require('http')
// const PORT =8000

// let server = new http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type':'application/json'})
//   res.end(JSON.stringify(userData))
// })

// server.listen(PORT,()=>console.log("server connected to"+ PORT));

// // const userData=[
// //     {
// //             name: "Vishwanathan",
// //             Email:"Vishwa@gmail.com",
// //             Adress:{
// //                 no:"175/73",
// //                 Street:"maduranthangam",
// //                 City: "maduranthagam ",
// //             }
// //         },
        
// //         {
// //             name: "Vishwanathan",
// //             Email:"Vishwa@gmail.com",
// //             Adress:{
// //                 no:"175/73",
// //                 Street:"maduranthangam",
// //                 City: "maduranthagam ",
// //             }
// //         },
// // ]
// // const PORT =8000
// // const http = require('http')

// // let server = new http.createServer((req,res)=>{
// //   res.writeHead(200,{'Content-type':'application/json'})
// //   res.end(JSON.stringify(userData))

// //   server.listen(PORT,()=>console.log("server connected to"+PORT))

// // })

const http = require('http')
const fs = require('fs')
const PORT = 8000
let server = new http.createServer((req,res)=>{
    try {

        // fs.writeFileSync('assets/sample.txt','What is the fav food','utf-8')
        fs.appendFileSync('assets/sample.txt',' My Fav is Curd rice','utf-8')
        let data = fs.readFileSync('assets/sample.txt','utf-8')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
        
    } catch (error) {
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.end(`Error Occoured: ${error.message} Try Again Later!`)
    }
})

server.listen(PORT,()=>console.log("Server connected to "+PORT))
