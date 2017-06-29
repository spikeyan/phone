/**
 * KOA static resources servers listening on PORT 1026
 */
const mangaNews = require('./server/dmzj');
    const sessionConfig = require('./server/sessionConfig');
var commonRes={
    success:false,
    message:'contents not found',
    response:{}
}

const Koa = require('koa');
const session = require('koa-session');
const koaBody = require('koa-body');
const Router = require('koa-router');
const serve = require('koa-static');
const app = new Koa();
const router = new Router();

/**
 *   maxage Browser cache max-age in milliseconds. defaults to 0
 *   hidden Allow transfer of hidden files. defaults to false
 *   index Default file name, defaults to 'index.html'
 *   defer If true, serves after return next(), allowing any downstream middleware to respond first.
 *   gzip Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. defaults to true.
 *   extensions Try to match extensions from passed array to search for file when no extension is sufficed in URL. First found is served. (defaults to false)
 */


// app.use(serve('www',{maxage:259200000}));
app.use(session(sessionConfig, app))
    // .use(async function(ctx,next){
    //     console.log(ctx.session);
    //     await next()
    // })
    .use(koaBody())
    .use(serve('www'))
    .use(router.routes())
    .use(router.allowedMethods());


router
    .get('/get-manga-news',function(ctx,next){

    let list=mangaNews(ctx.query.page);
    if(!list){
        ctx.body=commonRes;
    }else{
            let trueRes=JSON.parse(JSON.stringify(commonRes));
            trueRes.response=list;
            trueRes.success=true;
            trueRes.message='fine baby';
            ctx.body=JSON.stringify(trueRes);
        }
    })
    .post('/login',(ctx,next)=>{
        var res = ctx.request.body
        if(res.username=='tacumi'&&res.password=='rainforest'){
            ctx.session.status='logged';
            ctx.body=JSON.stringify({
                success:true
            })
        }else{
            ctx.session.status='logout';
            ctx.body=JSON.stringify({
                success:false
            })
        }
    })
    .get('/login-check',(ctx)=>{
        if(ctx.session.status=='logged'){
            ctx.body=JSON.stringify({logged:true})
        }else{
            ctx.body=JSON.stringify({logged:false})
        }
    })


app.listen(1026);
console.log('listening on port 1026');

