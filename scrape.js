var scrape2csv = require('scrape2csv');

//let's scrape a very cool website
var url_to_scrape = "https://www.washington.edu/students/timeschd/WIN2017/info.html";

var jquery_selector = "classes";

//each article of the page will go through this
var handler = function($, elem, index){
	var courseNumber = $(elem).find("a").attr("name");
	//var news_url = $(elem).find("p>a").attr("href");

	//returning a new row for the csv
	return [index,courseNumber];
}

//optional CSV header
var header = ["#", "Title of the article"];

scrape2csv.scrape("/data/info2017.csv", url_to_scrape, jquery_selector, handler, header);