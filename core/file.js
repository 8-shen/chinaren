/**
 * 文件读取写入类
 * @author 巴神
 * 2017/6/23
 */
var fs = require('fs'),
    zlib = require("zlib");

/**
 * 文件写入类，直接写入静态资源
 * 
 * @param {any} req 
 */
function writer(req){
    
}

/**
 * 文件读取类,读取输出静态资源
 * 
 * @param {any} req 
 */
function reader(req,cb){
  var stream=fs.createReadStream(path);
  stream.on('data',function(chunk){
    cb && cb('pedding',chunk);
  });
  stream.on('end',function(chunk){
    cb && cb('resolved',chunk);
  });
}


module.exports=function(type, req){
    type ? reader(req):writer(req);
};