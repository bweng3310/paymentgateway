const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const config = require('config')
const express = require('express');
const app = express();
const morgan = require('morgan')
const session = require('express-session');
app.use(express.json());;
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

console.log('application name:' + config.get('name'))
console.log('mail server:' + config.get('mail.host'))
console.log('mail password:' + config.get('mail.password'))

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('morgan enabled...')
}

const paytypes = 
    {
        origin: 'web',
        type:['creditcard', 'taiwanpay'],
        
    }
    // {
    //     origin: 'app',
    //     type:['creditcard', 'bankaccount']
    // },
    // {
    //     origin: 'insurance',
    //     type:['creditcard', '7-eleven']
    // },  



const paymentDetails =[]


app.get('/HELLO', (req,res) => {
    console.log(paymentDetails)
    res.send(paytypes);
})

app.get('/HELLO/list', (req,res) => {
    res.send(paymentDetails)
})

app.post('/HELLO/list', (req, res) =>{
    // const type = req.params.type
    // const paytype = paytypes.filter(paytype => paytype.origin == type);
    const paymentDetail = {
        orderId:paymentDetails.length +1,
        name: req.body.name,
        id: req.body.id,
        method:req.body.method,
        amount:req.body.amount,
        product: req.body.product,
        productDetail: req.body.productDetail
    };
    req.session.context = paymentDetails ;
    // res.send(req.session.context)
    res.redirect(200,"http://localhost:30");
    paymentDetails.push(paymentDetail);
    
   
})
// app.get('http://localhost:30', function(req, res) {

//     // So prepare the context
// var context=req.session.context;
//     res.send('home.jade', context);
//     console.log(context)
// });


app.listen(process.env.PORT || 4000);