var readlinesyn=require('readline-sync');
var date=require('date-format');
var chalk=require('chalk');


 


 var username=readlinesyn.question(chalk.blue.italic("hey!  may i know ur name  "));
  // var dob=readlinesyn.question(username + " what's ur birth-date ");
  var d=readlinesyn.question("ENTER YOUR BIRTHDATE IN DD/MM/YYYY FORMAT  ");
  var read_date=d.split("/");
  
  if(read_date[0]<=31&&read_date[1]<=12&&read_date[2].length==4)
  {
    var num_date=parseInt(read_date[0],10);
    console.log("correct date entered");
    for(var i=2;i<num_date;i++)
    {
     
      if(num_date%i==0)
      {
         console.log("your birth date is not  a prime number");
         process.exit();
         
     
      }
     
     
     

    }
     
      {
        console.log("your birth date is  a prime number");
      }
      
    
     
         
         
     
    
        
      

  }
  else
  {
    console.log(chalk.red("wrong date entered"));
  }
  
 