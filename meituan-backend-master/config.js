module.exports = {
    port: 4000, //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan', //数据库地址
    notifyUrl: 'http://192.168.42.188:4000/v1/notify_url', //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12', //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session', //数据库存放session地址
    Bucket: 'tyriona', //七牛云bucket
    AccessKey: 'Oksy_LAc7up3q5Ux42NkINpuLv64tHqQRLqwGD4T', //七牛云accessKey
    SecretKey: 'Oksy_LAc7up3q5Ux42NkINpuLv64tHqQRLqwGD4T', //七牛云secretKey
    tencentkey: '5ZCBZ-5AGKD-GUY43-HSSJU-V5DG3-CUBGU', //腾讯位置secreKey
    tencentkey2: '5ZCBZ-5AGKD-GUY43-HSSJU-V5DG3-CUBGU', //腾讯位置服务secreKey
    wechatAppid: '', // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥

};