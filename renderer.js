/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window.
 */

var worker = new Worker('./worker.js');
worker.onmessage = function(event)
{ 
    //print result on console and h1 tag
    console.log("worker : ", event.data);
    document.querySelector('h1').innerHTML = "native addon add function(3, 4): " + event.data;
    //terminate webworker
    worker.terminate();
    
    //set it to undefined
    worker = undefined;
}


worker.onerror = function (event)
{
    console.log(event.message, event);
};