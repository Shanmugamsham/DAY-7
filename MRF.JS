
//A// Get all the countries from Asia continent /region using Filter function//

// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);


//     var count=result.filter((ele)=>ele.continents=="Asia")
 
//     var final_name=count.map((ele)=>ele.name)
//     var final_region=count.map((ele)=>ele.region)
//     var last_result=final_name.map((ele)=>ele.common)
//     console.log(last_result,final_region)
   

//}
//b// Get all the countries with a population of less than 2 lakhs using Filter function


// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
//         console.log(result);

//      var count=result.filter((ele)=>ele.population<200000);
//      var final_name=count.map((ele)=>ele.name)
//      var last_result=final_name.map((ele)=>ele.common)
//      console.log(last_result);

     
// }

//Print the following details name, capital, flag, using forEach function

// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
//  request.onload=function(){
//     var result=JSON.parse(request.response);
//         console.log(result);
//         result.forEach(ele => {
//             console.log(ele.name["common"],ele.capital,ele.flags["png"]);
            
//         });

//  }



// d /Print the total population of countries using reduce function


// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
//         console.log(result);

//      var count=result.filter((ele)=>ele.population);
//      var final_name=count.map((ele)=>ele.population)
//      var last_result=final_name.reduce((acc,ele)=>acc+ele)
//      console.log(last_result)

     
// }


//e //Print the country that uses US dollars as currency.



// var request= new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
//       console.log(result);

//     var count=result.map((ele)=>ele.currencies);
//     console.log(count);

     
//  }
