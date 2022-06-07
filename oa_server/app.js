const express = require('express')
// 导入 body-parser 第三方 
const body = require('body-parser')
// 导入cors 第三方
const cors = require('cors')
// 导入端口号
const {port} = require('./config')
// 导入路由
const router = require('./routes')

// 导入全局中间件
const { empty,error,info } = require('./middleware')


// 导入mongodb连接操作
const { connect } = require('./db')




// 开启服务
const app = express ()


// 连接数据库
connect()

// 开启跨域
app.use(cors())

// 解析请求体
app.use(body({extented:false}))
app.use(body.json())

// 全局中间件，记录访问信息
app.use(info)

// 挂载路由总表
app.use(router)


// 全局空路由配置

app.use(empty)

// 全局错误中间件
app.use(error)


// 监听端口
app.listen(port, () => {
        console.log(
        `
         启动服务器成功
        开始监听 ${ port }端口号
        我是 oa 的服务器
        `
        ) 
    })