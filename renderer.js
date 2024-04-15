/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window.
 */

var worker = new Worker('./worker.js');
worker.onmessage = function(event)
{ 
    // print result on console
    console.log("worker : ", event.data);
    // replace the contents of the html document at the h1 tag
    // document.querySelector('h2').innerHTML = "native addon add function(3, 4): " + event.data;
    
    // MRB: replace the contents of the h2 tag
    document.querySelector('h2').innerHTML = "native addon add function(3, 4): " + event.data;


    // terminate webworker
    worker.terminate();
    
    // set it to undefined
    worker = undefined;
}


worker.onerror = function (event)
{
    console.log(event.message, event);
};