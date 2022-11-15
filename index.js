          // Task-1
          let categories = ['health ', 'Fashion ', 'Toys ', 'Electronics ', 'TV ', 'Sports ', 'Watches ', 'Motorbike ', 'HomeandLifeStyle ', 'Devices '];
          var categories_firsthalf = categories.slice(0, categories.length/2 );
          document.getElementById("task1").innerHTML = "First half of Categories are: "+ categories_firsthalf;
          // console.log("First half of Categories are: ", categories_firsthalf );
  
          // Task-2
          var combine = [];
          const str1 = [' Apples', ' Bananas', ' Orange', ' Grapes'];
          const str2 = [' abc', ' def', ' ghi', ' jkl'];
         combine = str1.slice(1,4).concat(str2.slice(1,4));
         document.getElementById('task2').innerHTML = "The Combination of arrays except the first elements: " + combine;
      //    console.log(combine);
  
      // Task-3
      const NumericArray = ['80', ' 9', ' 700', 40, 1, 5, 200]
      NumericArray.sort();
      document.getElementById('asc').innerHTML = "Ascending Order: "+ NumericArray;
  // console.log(NumericArray);
  
      NumericArray.reverse();
      document.getElementById('dsc').innerHTML = "Descending Order: "+ NumericArray;
      // console.log(NumericArray);
  
      // Task - 4
      const months = [' jan', ' March', ' April', ' Dec'];
      months.splice(1,0, " Feb");
      months.splice(4,1, " May", " June");
      document.getElementById('arrang').innerHTML = "Rearranging Months: "+ months;
      // console.log(months);
  
      // Task - 5
      let joinarr = ['Me',' myfamily'];
      joinarr.splice(1, 0, " and");
      document.getElementById('task5').innerHTML = "Completing the phrase: "+ joinarr;
      // console.log(joinarr);
  
      // Task - 6
      var num = prompt();
      if(num > 2 && num < 10) {
          document.getElementById('task61').innerHTML = "The number is between 2 and 10: "+num;
          // console.log("The number is between 2 and 10")
      }
      else if (num > 10 && num < 19) {
          document.getElementById('task62').innerHTML = "The number is between 10 and 19: "+num;
  
          // console.log("The number is between 10 and 19")
      }
      else if (num > 19 && num < 30) {
          document.getElementById('task63').innerHTML = "The number is between 19 and 30: "+num;
  
          // console.log("The number is between 19 and 30");
      }
      else {
          document.getElementById('task64').innerHTML = " Sorry Not found, Try again. "+num;
  
          // console.log("Sorry, Try again");
      }
  