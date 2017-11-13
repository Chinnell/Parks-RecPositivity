$(document).ready(function(){

  var compliment = [", you have everything you need to make today a great day!", ", you are a great person. Treat yourself to something special", ", move out of your comfort zone, today. It's the best way to see significant change", ", make today even better than yesterday"];


  var pic = ["http://media1.giphy.com/media/2AilMg2L8rTAA/giphy.gif", "https://img.buzzfeed.com/buzzfeed-static/static/2013-10/enhanced/webdr01/17/1/anigif_enhanced-buzz-8140-1381986438-6.gif?downsize=715:*&output-format=auto&output-quality=auto", "https://m.popkey.co/d8fe77/8MX7l.gif", "https://media.giphy.com/media/zyin7TYoGmLAs/giphy.gif"];


  var random = null;
  var num = null;
  var picNum = null;

  var resetRandom = function (){
    random = Math.floor(Math.random() * compliment.length);
    num = compliment[random];
    picNum = pic[random];
    console.log(random);
    console.log(num + " is the phrase that will be included");
    console.log(picNum + " is the picture that will be included");
  }
  resetRandom();

  $("button").click(function(){
      $("#result").html($("#name").val() + num);
      $("#result").append('<img src="' + picNum + '"/>');

  });
  $("#button2").click(function(){
      $("#result").html("Content has been erased");
  });
});
