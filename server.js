/**
 * KOA static resources servers listening on PORT 1026
 */

const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

/**
 *   maxage Browser cache max-age in milliseconds. defaults to 0
 *   hidden Allow transfer of hidden files. defaults to false
 *   index Default file name, defaults to 'index.html'
 *   defer If true, serves after return next(), allowing any downstream middleware to respond first.
 *   gzip Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. defaults to true.
 *   extensions Try to match extensions from passed array to search for file when no extension is sufficed in URL. First found is served. (defaults to false)
 */


// app.use((ctx,next)=>{
//     console.log(`${ctx.method} ${ctx.url}`);
// });
app.use(serve('www'));


app.listen(1026);

console.log('listening on port 1026');

