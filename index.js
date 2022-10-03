$(document).ready(function () {

       $("h1").css("color", "purple");
       var a = $(".btn , .submit").css("background-color", "purple");

       //mouse events:
       $("#box").click(function () {
              $(this).css("background-color", "green");
       });

       $(".box1").dblclick(function () {
              $(this).css("background-color", "purple");
       });

       $(".form").mouseenter(function () {
              $(this).css("background-color", "blue");
       });

       $(".form").mouseleave(function () {
              $(this).css("background-color", "yellow");
       });

       //form events
       $("input").focus(function () {
              $(this).css("background-color", "yellow");
       });

       $("input").blur(function () {
              $(this).css("background-color", "green");
       });


       //by using on() method
       //  $("h1").on("click", function(){
       // $(this).hide();
       //  });

       //hide content of any element by using click.
       $("h1").click(function () {
              $(this).hide(); //same as one is show method.
       });

       //change method using for after select any option via selectbox
       $("#cars").change(function () {
              $(this).css("background-color", "orange");

       });

       //width and height of an div width()/height() methods
       $(".btn").click(function () {
              var txt = "";
              txt += "Width of div: " + $("#box").width() + "</br>";
              txt += "Height of div: " + $("#box").height();
              $("#box").html(txt);
       });

       //jQuery Traversing - Filtering
       //Ancestors / Decendants / Siblings / filtering methods also provided.

       // The most basic filtering methods are first(), last() and eq(),
       // which allow you to select a specific element based on its position in a group of elements.

       // Other filtering methods, like filter() and not() allow you to select elements that match,
       // or do not match, a certain criteria. 
       //-----------------------------------------------------------------------
       // The eq() method returns an element with
       // a specific index number of the selected elements.
       // The index numbers start at 0, so the first element will
       // have the index number 0 and not 1.
       //---------------------------------------------------------------
       // The filter() method lets you specify a criteria. Elements that
       //  do not match the criteria are removed from the selection, and
       //   those that match will be returned.
       //------------------------------------------


       //-----------------Jquery AJAX -------------------------
       // The jQuery load() method is a simple, but powerful AJAX method.
       // The load() method loads data from a server and puts the returned data
       // into the selected element.

       // <script>
       // $(document).ready(function(){
       // $("button").click(function(){
       // $("#div1").load("demo_test.txt"); //load method call
       // });
       // });
       // </script>

       // <body>
       // <div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>
       // <button>Get External Content</button
       // </body>

       /*
      -->>> check status of external data load or not
The optional callback parameter specifies a callback function to run when the load() method is completed. 
The callback function can have different parameters:
-->responseTxt - contains the resulting content if the call succeeds
-->statusTxt - contains the status of the call
-->xhr - contains the XMLHttpRequest object
The following example displays an alert box after the load() method completes.
If the load() method has succeeded, it displays "External content loaded successfully!", and if it fails it displays an error message:

       $("button").click(function(){
  $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr)
  {
    if(statusTxt == "success")
      alert("External content loaded successfully!");
    if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});

 */

//-------------------------Get and set method in Jquery--------------------------------------------

/*
The $.get() method requests data from the server with an HTTP GET request.
       $("button").click(function(){
       $.get("demo_test.asp", function(data, status){
       alert("Data: " + data + "\nStatus: " + status);
       });
       });


The first parameter of $.get() is the URL we wish to request ("demo_test.asp").
The second parameter is a callback function. The first callback parameter holds the content of the page requested, 
and the second callback parameter holds the status of the request.

-->>> Tip: Here is how the ASP file looks like ("demo_test.asp"):
       <%
       response.write("This is some text from an external ASP file.")
       %>


--->> The $.post() method requests data from the server using an HTTP POST request.
     
The required URL parameter specifies the URL you wish to request.
The optional data parameter specifies some data to send along with the request.
The optional callback parameter is the name of a function to be executed if the request succeeds.

       $("button").click(function(){
  $.post("demo_test_post.asp",
  {
    name: "Donald Duck",
    city: "Duckburg"
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
  
});

-->The first parameter of $.post() is the URL we wish to request ("demo_test_post.asp").
-->Then we pass in some data to send along with the request (name and city).
-->The ASP script in "demo_test_post.asp" reads the parameters, processes them, and returns a result.
-->The third parameter is a callback function. The first callback parameter holds the content of the page requested,
 and the second callback parameter holds the status of the request.


 Tip: Here is how the ASP file looks like ("demo_test_post.asp"):
       <%
       dim fname,city
       fname=Request.Form("name")
       city=Request.Form("city")
       Response.Write("Dear " & fname & ". ")
       Response.Write("Hope you live well in " & city & ".")
       %>

*/















});