/**
 * dongmanzhijia news urls
 */

//http://news.dmzj.com/p1.html

const schedule = require('node-schedule');
const agent = require('superagent');
const cheerio = require('cheerio');

var mangaNews='http://news.dmzj.com/p';

var mangaNewsList=[];


// get();
/**
 *    *    *    *    *    *
 ┬    ┬    ┬    ┬    ┬    ┬
 │    │    │    │    │    |
 │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
 │    │    │    │    └───── month (1 - 12)
 │    │    │    └────────── day of month (1 - 31)
 │    │    └─────────────── hour (0 - 23)
 │    └──────────────────── minute (0 - 59)
 └───────────────────────── second (0 - 59, OPTIONAL)
 */

schedule.scheduleJob('30 10 8 * * *',get);

async function get(){
    for(let i = 1;i<=10;i++){
        if(i==1){
            mangaNewsList=[];
        }
        console.log(`getting page ${i} ...`);
        await fillList(i);
        console.log(`get page ${i} success`);
    }
}

function fillList(num){
    return new Promise((resolve)=>{
        agent.get(`${mangaNews}${num}.html`)
            .end((err,res)=>{
                var $=cheerio.load(res.text);
                var page=[]
                $('.briefnews_con_li').each(function(){
                    var node=$(this).children('.li_img_de');
                    var temp={};
                    temp.img=$(this).children('.li_content_img').children('a').children('img').attr('src');
                    temp.type=node.children('span').text();
                    temp.title=node.children('h3').children('a').text();
                    temp.href=node.children('h3').children('a').attr('href');
                    temp.date=node.children('.head_con_p_o').children('span').first().text();
                    temp.content=node.children('.com_about').text();
                    page.push(temp);
                });
                mangaNewsList.push(page);
                setTimeout(resolve,Math.random()*10000+3000);
            })
    })

}



function getMangaList(page){
    return mangaNewsList[page-1];
}

module.exports=getMangaList;


