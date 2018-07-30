const fs = require('fs');
const https = require('https');
const http = require('http');
const cheerio = require('cheerio');
const request = require('request');
const he = require('he');
const url = require('url');
const querystring = reuire('querystring');

var requestUrl = "http://www.ireader.com/index.php?ca=booksort.index&pca=channel.index&pid=92&cid=93&order=download&status=1&page=1"; 
//初始url 

function fetchPage(x) {     //封装了一层函数
    startRequest(x); 
}


function startRequest(x) {
     //采用http模块向服务器发起一次get请求      
    http.get(x, function (res) {     
        var html = '';        //用来存储请求网页的整个html内容   
        //res.setEncoding('utf-8'); //防止中文乱码
        //监听data事件，每次取一块数据
        res.on('data', function (chunk) {   
            html += chunk;
        });
     //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
        res.on('end', function () {
            //console.log(html);
            var $ = cheerio.load(html); //采用cheerio模块解析html
            var $lis = $('.show .newShow li');
            let book = [];

            for(let i=0; i<$lis.length; i++) {
                book[i] = {};
                book[i].name = $lis[i].children[3].children[1].children[0].children[0].data;
                book[i].writter = $lis[i].children[3].children[3].children[0].data;
                book[i].img1 = $('.show .newShow li a img')[i]['attribs']['src'];
                let bookDetails = $lis[i].children[1]['attribs']['href'];
                let readUrl = $('.content .newShow li .tryread a')[i]['attribs']['href'];
                console.log('********************************************');
                //console.log(readUrl);
                
                let chapterIndex = 0;
                http.get(readUrl, (res) => {
                    nextUrl = url.parse(readUrl);
                    console.log(nextUrl);
                    //while()

                    let html = '';
                    book[i].contents = [];
                    res.on('data', (chunk) => {
                        html += chunk;
                    });
                    res.on('end', () => {
                        let $ = cheerio.load(html);
                        book[i].content[chapterIndex] = he.decode($('.content .article').html());

                        /*
                        if() {

                        }*/

                        //console.log('*******************************************');
                        //console.log(he.decode($('.content .article').html()));

                    });
                });

/*
                http.get(bookDetails, (res) => {
                    var html = '';        //用来存储请求网页的整个html内容
                    //res.setEncoding('utf-8'); //防止中文乱码
                    //监听data事件，每次取一块数据
                    res.on('data', function (chunk) {
                        html += chunk;
                    });
                    //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
                    res.on('end', function () {
                        let $ = cheerio.load(html);
                        book[i].img2 = $('.content .bookInfor .bookL img')[0]['attribs']['src'];
                        let ratingUrl = $('.sqCon .loadMore a')[0]['attribs']['href'];
                        http.get(ratingUrl, (src) => {
                            book[i].ratings = [];
                            let html = '';
                            src.on('data', (chunk) => {
                                html += chunk;
                            });
                            src.on('end', () => {
                                let $ = cheerio.load(html);

                                let lis =$('.bookCir .allCom ul li .disTxt .view i a');
                                if(lis) {
                                    let len = lis.length;
                                    for(let j=0; j<len; j++) {
                                        let ratings = lis[j].children[0].data;
                                        book[i].ratings[j] = {};
                                        book[i].ratings[j].rating = ratings ? ratings : '';
                                        book[i].ratings[j].img = $('.bookCir .allCom ul li .headImg img')[j]['attribs']['src'];
                                        book[i].ratings[j].username = $('.bookCir .allCom ul li .allCom .ComMan p')[j].children[0].data;
                                    }
                                    // console.log(book[i].ratings.length);
                                    // console.log('*********************************************************');
                                    
                                }
                            });
                        });
                        
                    });
                });
*/
                

            }
            //console.log(book.img1);
            //console.log(he.decode(data));
            //var news_title = $('div.article-title a').text().trim();

            //savedContent($,news_title);  //存储每篇文章的内容及文章标题

            //savedImg($,news_title);    //存储每篇文章的图片及图片标题
        });

    }).on('error', function (err) {
        console.log(err);
    });

}
       //该函数的作用：在本地存储所爬取的新闻内容资源
function savedContent($, news_title) {
    $('.article-content p').each(function (index, item) {
        var x = $(this).text();       

       var y = x.substring(0, 2).trim();

        if (y == '') {
        x = x + '\n';   
    //将新闻文本内容一段一段添加到/data文件夹下，并用新闻的标题来命名文件
        fs.appendFile('./data/' + news_title + '.txt', x, 'utf-8', function (err) {
            if (err) {
                console.log(err);
            }
        });
    }
    })
}

//该函数的作用：在本地存储所爬取到的图片资源
function savedImg($,news_title) {
    $('.article-content img').each(function (index, item) {
        var img_title = $(this).parent().next().text().trim();  //获取图片的标题
        if(img_title.length>35||img_title==""){
         img_title="Null";}
        var img_filename = img_title + '.jpg';

        var img_src = 'http://www.ss.pku.edu.cn' + $(this).attr('src'); //获取图片的url

    //采用request模块，向服务器发起一次请求，获取图片资源
        request.head(img_src,function(err,res,body){
            if(err){
                console.log(err);
            }
        });
        request(img_src).pipe(fs.createWriteStream('./image/'+news_title + '---' + img_filename));     //通过流的方式，把图片写到本地/image目录下，并用新闻的标题和图片的标题作为图片的名称。
    })
}

fetchPage(requestUrl);      //主程序开始运行