// 全局空路由 
const empty = (req,res) => {
res.status(404).send({
    code: 404,
    message:'你请求的路径地址不存在，有可能是地址错了，有可能是请求方式错了',
    tips: {
        url:req.url,
        method:req.method
    }

})
}
// 全局错误处理
const error = (err,req,res,next) => {

}
// 记录每次访问信息
const info = (req,res,next) => {
    console.log(
        `
        当前服务器接收到了一个请求，
        时间: ${new Date()}
        请求方式:${req.method}
        请求地址:${req.url}
        请求query:${JSON.stringify(req.query)}
        请求params:${JSON.stringify(req.params)}
        请求body:${JSON.stringify(req.body)}
        `
    )


    next()
}


module.exports = {
    empty,
    error,
    info
}
