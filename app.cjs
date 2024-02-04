// დავაყენოთ ფექიჯი moment npm_დან.  
// დავბეჭდოთ სხვაობა 2 თარიღს შორის დღეებში moment_ის დახმარებით.


const moment = require("moment");

function getDifference(date1, date2){
    return moment(date1, "DD.MM.YYYY").diff(moment(date2, "DD.MM.YYYY"), "days")
}
console.log(getDifference("20.02.2000", "10.02.2000"));


// დავწეროთ პროგრამა რომელიც შეამოწმებს მითითებული დირექტორია 
// არის თუ არა ფაილურ სისტემაში.

const fs=require("fs");

function directoryExists(path){
    try{
        fs.statSync(path)
        return true;
    }catch(error){
        if(error.code==='ENOENT'){
            return false;
        }else{
            throw error;
        }
    }
}

const directoryPath="./start.txt";

if(directoryExists(directoryPath)){
    console.log(`directory ${directoryPath} exists`)
}else{

    console.log(`directory ${directoryPath} is not exists`)
}

//  გავაკეთოთ მარტივი http სერვერი რომელიც უპასუხებს რამდენიმე http რექვესთს.
    // 1. შევქმნათ html ფაილი რომელშიც იქნება მარტივი html კოდი 
    //   რამდენიმე html ელემენტით.
    //   url_ზე მოთხოვნის გაკეთებისას წავიკითხოთ და დავაბრუნოთ html
    
    // 2. შევქმნათ json ფაილი სადაც სურვილისსამებრ ჩაწერთ რამე json მონაცემებს.
    // api მისამართზე მოთხოვნის გაკეთებისას სერვერმა უნდა დაგვიბრუნოს 
    //    json ფაილში ჩაწერილი მონაცემები.

    // 3. იგივე პროგრამაში დავამატოთ 404 (არ მოიძებნა) გვერდი (html), 
    //    რომელსაც დავაბრუნებთ ყველა სხვა შემთხვევაში თუ 
    //    url არ არის / ან /api.


const http=require("http");
const { error } = require("console");

    const server=http.createServer((req,res)=>{
        if(req.url==="/api"){
            const user={
                id:1,
                name:"name",
                lastName:"Lastname"
            }
            res.setHeader("Content-Type","application/json");
            res.write(JSON.stringify(user))
            return res.end()
        }else if(req.url==="/hello"){
            const htmlString=`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Hellooooo </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati ipsam vitae perspiciatis 
                    repellendus quis nisi quos nostrum tenetur
                     quas perferendis, maxime, laboriosam qui soluta atque minus 
                     quae magni accusantium ducimus.</p>
            </body>
            </html>
            `;
            res.setHeader("Content-Type","text/html");
            res.write(htmlString);
            res.end()
        }else{
            res.writeHead(404)
            res.end()
        }
    })
    server.listen(3008,"localhost")