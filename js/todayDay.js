// Date/Time API

//methods to return date, month and year
let nowDate = new Date(); // object date was created
let year = nowDate.getFullYear(); //Returns the year in the specified date according to local time.
let month = nowDate.getMonth() + 1; //Returns the month (0 – 11) in the specified date according to local time for that I sum one to get 12 months in total
let day = nowDate.getDate(); //Returns the day of the month (1 – 31) for the specified date according to local time.

//DOM, accesing the document to write down the Date
document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
