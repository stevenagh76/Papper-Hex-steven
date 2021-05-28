const express = require('express')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const connection = require('./database/db.js');
const multer = require('multer');
const fs = require('fs');
const app = express()
const PDFDocument = require('pdfkit');
var Tesseract = require('tesseract.js');

const { query, connect } = require('./database/db.js');
const { loadRules } = require('tslint');
///////////////////////////////////////



app.use(express.json())
app.use(bodyParser.json());



//agular access control
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



//get function for testing only

app.post('/users/info', (req, res) => {
 connection.query("SELECT * from")
 const user={
  member_email: req.body.member_email, 
 }
})

//userinfo
app.get('/users/info', (req, res) => {
  console.log(usinguser);
  res.json(usinguser)
  let index = 1;
 
 })
usinguser=[];
if(usinguser.length===0){
  console.log("erro")
}
//sign in
app.post('/users', async(req,res)=>{
  try {
    
    const hachedPaswword = await bcrypt.hash(req.body.member_password, 10)
  const user={
    member_name: req.body.member_name, 
    member_email: req.body.member_email, 
    member_password: hachedPaswword, 
   }
 
  connection.query("SELECT member_email FROM member WHERE member_email = ? ",[user.member_email],function(error,result){
    if(error){
      console.log(error);
    }
    if(result.length > 0){
      return res.status(201).json({message:"User already existes"});
    }else

  connection.query("INSERT INTO  member(member_name,member_email,member_password) VALUES (?,?,?)",[user.member_name, user.member_email, user.member_password], function(err, result){
    if (err) throw err;
    res.status(201).json({message:"User registerd"});
    usinguser.pop();
    usinguser.push(user.member_email);

    
  });
     })


  }catch {
    res.status(500).send();
  }
})
// LOGIN
app.post('/users/login', async (req,res ) => {
  
 try{
   const { member_email, member_password }=req.body
   connection.query("SELECT * FROM member WHERE member_email = ? ",[member_email],async(error,result) =>{
    if(result.length===0 ){
     
      res.status(200).json({message:"Wrong user email or password."});
    }else{
      bcrypt.compare(member_password,result[0].member_password, function(err, result) {
        if (!result==true) { 
         
          res.status(200).json({message:"Wrong user email or password."});
         }
       else{
      
          console.log("user mawjoud");
            usinguser.pop();
          usinguser.push(member_email);
        
          res.status(201).json({message:"Login fine"});
       }
    });
  }
   })
  } 
catch{
  console.log(error);
}
})
//change password
app.post('/users/changepass',async(req,res)=>{
  try{
     const hachedPaswword =await bcrypt.hash(req.body.newpass, 10)
    const user={
      currentpasword:req.body.currentpas,
      newpass:hachedPaswword,
     }
    connection.query("SELECT * FROM member WHERE member_email = ? ",[usinguser],async(error,result) =>{
      
       bcrypt.compare(user.currentpasword,result[0].member_password, function(err, result) {
         console.log(result);
         if (!result==true) { 
          
          res.status(201).json({message:"Wrong password"});
          }
        else{
       
   
        connection.query("UPDATE member set member_password = ? WHERE Member_email = ?",[user.newpass,usinguser],async(err,result)=>{


res.json({message:"Password updated sucesfully"})
        })
        }

     });
   
    })
   } 
 catch{
   console.log(error);
 }



})
//Add dashboard
app.post('/users/dashboard', async(req ,res)=>{

try{
  var created = new Date();
  const hachedPaswword = await bcrypt.hash(req.body.dash_psw,10)
  const dashboard={
    dash_member_email:usinguser,
    dash_name: req.body.dash_name, 
   dash_description: req.body.dash_description, 
  dash_psw: hachedPaswword, 
  dash_created:created,
   }
if(usinguser.length===0){
 res.status(401);
 
}else{
  connection.query("SELECT Board_name FROM board WHERE Board_name= ?",[dashboard.dash_name],async(err,result)=>{
    if(result.length>0){
      return res.status(201).json({message:"Dashboard name already in use."});
  }else{
     connection.query("INSERT INTO board(Member_email,Board_name,Board_password,Board_discription,Board_online_time) VALUES (?,?,?,?,?)",[dashboard.dash_member_email,dashboard.dash_name,dashboard.dash_psw,dashboard.dash_description,dashboard.dash_created],async(err,result)=>{
 
    if (err) throw err;
    fs.mkdirSync( dashboard.dash_name);
    res.status(201).json({message:"Dashboard created"});

})
  }
   })

 
}


}catch{

  console.log(error);

}
})
//select dashboards
app.get('/users/dashboardinfo',async(req,res)=>{
 
  connection.query('SELECT Board_name, Board_discription FROM board WHERE Member_email = ? ',[usinguser],async(err,result)=>{
  
res.status(201).send(result);


  })

})
//ADD user information
app.post('/users/userinformation',async(req,res)=>{
  const userinfo={
   
    Member_dob: req.body.dateofbirth, 
    Member_addresse: req.body.Adress, 
    Member_postal_number: req.body.postalnumber,
    Member_description:req.body.description,
    Member_position:req.body.position
   }
   console.log(usinguser);
connection.query("INSERT INTO member_info(Member_email, Member_dob, Member_addresse, Member_postal_number, Member_description,	Member_position) VALUES(?,?,?,?,?,?)",
[usinguser,userinfo.Member_dob,userinfo.Member_addresse,userinfo.Member_postal_number,userinfo.Member_description,userinfo.Member_position],async(err,result)=>{
if (err) throw err;
  
  res.status(201).json({message:"You have sucssesfuly updated your profiel"});

})
})
app.get('/users/userinformation',async(req,res)=>{
connection.query("SELECT * FROM member_info  WHERE Member_email = ?",[usinguser],async(err,result)=>{
console.log(result);
  if(result.length>0){
    res.status(201).json({message:"true"})

  }

})

})

//join own dash

 value=[]
app.post('/users/joinowndash', async(req, res)=>{
value = req.body;

 console.log(value);
  
 
})
app.get('/users/joinowndash', async(req, res)=>{ 
  res.json(value);

  })
  del=[]
  //delet dash
  app.post('/users/deletdash', async(req,res)=>{
    del = req.body
    console.log(del[0]);
    connection.query("DELETE FROM board WHERE Board_name = ?",[del[0]],async(err)=>{})
    fs.rmdir(del[0],function(err){
      if(err) throw err;
    });
   
  })
//delet file
app.get('/users/deleteFile', async(req,res)=>{

fs.unlink("./"+value+"/PapperHex"+usingfile,(err=>{
if (err) throw err;



}))
connection.query("DELET FROM documetns WHERE ")
res.json({message:"File was delete succesfully."})


})




//connect to existing dash
app.post('/addexistingdash', async(req,res)=>{
const{boardname,boardpass }=req.body
connection.query('UPDATE board SET Board_members_count = Board_members_count + 1 WHERE Board_name= ?',[boardname],async(err)=>{})
connection.query('SELECT * FROM board WHERE Board_name= ?',[boardname],async(err,result)=>{

  if(result.length>0)
  {
    bcrypt.compare(boardpass,result[0].Board_password, function(err, result) {
      if (!result==true) { 
       
        res.status(200).json({message:"Dashboard name or password Invalid."});
       }
     else{
      connection.query('SELECT * FROM board Where Board_name= ?',[boardname],async(err,result)=>{

    
        res.send(result)
      })
    
     }
  });
  }else{
    res.status(201).json({message:"Dashboard name or password Invalid."})
  }
})



})

//file uploader
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, value[0]+"")
  },
  filename: (req, file, callBack) => {
      callBack(null, `PapperHex${file.originalname}`)
  }
})

const upload = multer({ storage: storage })
 
// let upload = multer({ dest: 'uploads/' })

app.post('/file', upload.single('file'), (req, res, next) => {
  const file = req.file;
  console.log(file.originalname);
connection.query("SELECT Originalname FROM documents WHERE Originalname= ?",[file.originalname],function(err,result){

  if(result.length > 0){
 return res.json({message:"file already existes"})
  }
})
 
  console.log(file.filename);
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  connection.query("INSERT INTO documents(Board_name,Destination,Encoding,Fieldname,Filename,Mimetype,Originalname,Path,Size) VALUES (?,?,?,?,?,?,?,?,?)",
  [value,file.destination,file.encoding,file.fieldname,file.filename,file.mimetype,file.originalname,file.path,file.size],function(err,result){
    if(err) throw err;
    console.log("registerted");

  })
    res.send(file);
})



//add multeple files
app.post('/multipleFiles', upload.array('files'), (req, res, next) => {
  const files = req.files;
  console.log(files);
  if (!files) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send({sttus:  'ok'});
})



//display files on init
app.get('/getfiles',(req, res)=>{
  if(value.length==0){
    return res.json({message:"Please Join board in Dashboards"})
  }
connection.query("SELECT  * FROM documents WHERE Board_name = ?",[value],function(err,result){
  if(err) throw err;
  res.send(result);
})

})
 usingfile=[]
 //open file
app.post('/openfile', async(req,res)=>{
const using=req.body;

connection.query("SELECT Originalname FROM documents WHERE Originalname =?",[using],function(err,result){
 
  var resultArray = Object.values(JSON.parse(JSON.stringify(result)))
 usingfile=resultArray[0].Originalname

console.log(value+"/"+usingfile);

})
})


//creat FOLDER
app.post('/createFolder', async (req,res)=>{
  const g = req.body.foldername
 var intial = value[0]

  fs.access(intial+"", function(error) {
    if (error) {
 
    } else {

  
 fs.mkdirSync("./"+intial+"/"+g) 
connection.query("INSERT INTO folders(board_name,folder_name) VALUES (?,?)",[value,req.body.foldername],function(err,result){
  if (err) throw err;
})
    }
})
})
//get folders on init

app.get('/getfolders',(req, res)=>{
connection.query("SELECT  * FROM folders WHERE Board_name = ?",[value],function(err,result){
  if(err) throw err;
  res.send(result);
})

})




// log out
app.get('/logout', async(req,res)=>{
usinguser.pop();

value.length=0;
res.json({message:"log out"})
})

//ocr
app.get('/preformocr', async(req,res)=>{

var image = fs.readFileSync("./"+value+"/PapperHex"+usingfile,{
  encoding: null
});
if(usingfile.includes("png")){
Tesseract.recognize(
  image,
 
  


  'eng',
  { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
  res.json({message:text})
  })
}
else{
  res.json({message:"File must be of type png."})
}




})



//pdfconverter

app.post("/pdf", async(req,res)=>{
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("./"+value+"/PapperHexOCR"+usingfile,))
doc.fontSize(25).text()



})


//file static
app.get("/filesstat",async(req,res)=>{
var count =0;
connection.query("SELECT Originalname FROM  documents WHERE Board_name= ?",[value+""],async(err,result)=>{
if (err) throw err;
for (var i=0; i<result.length ; i++){
count = count +1;
}
res.send(count+"");
})
})
//hover file size
app.get("/filesize",async(req,res)=>{
  var size =0;
  connection.query(" SELECT Size FROM  documents WHERE Board_name= ?",[value+""],async(err,result)=>{
  if (err) throw err;
  for (var i=0; i<result.length ; i++){
 size = size +result[0].Size
  }
var lastsize = size/1000;

  res.send(lastsize+"")
  })
  })
//online time
  app.get("/fileonlinetime",async(req,res)=>{
    var date = new Date();
    var difference;
    connection.query(" SELECT Board_online_time FROM  board WHERE Board_name= ?",[value+""],async(err,result)=>{
    if (err) throw err;
       difference= Math.abs(date - result[0].Board_online_time);
     
       const diffDays = Math.ceil(difference/ (1000 * 60 * 60 * 24)); 
    res.send(diffDays+"")
    })
    })

//report error
app.post("/report",async(req,res)=>{
  report={
    content:req.value
  }

  console.log(report.content);

// connection.query("INSERT INTO report(report) VALUES (?)")


})


 app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
 