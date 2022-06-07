// 需要封装方法
const mongoose = require('mongoose')
const Mongo = { 
    connect (){
        mongoose.connect('mongodb://localhost:27017/GP30',err => {
            if(err) return console.log('连接失败，请检查你的数据哭是否开启')
            console.log('连接到mongodb数据库成功')
        })
    }
}

module.exports = Mongo