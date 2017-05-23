// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready (function(){

    $(".js-butt").on("click", function(event){
        event.preventDefault()
        var id = $(this).data("id")

        $.get("/products/" + id + "/body", function(data){
            $("#d"+id).text(data)
        })

        $.get("/products/" + id + "/inventory", function(data){
            if (data === "true"){
                $("#d"+id).append("Available")
            } else {
                $("#d"+id).append("Sold Out")
            }
        })

    })

console.log("yes")
})

// function addButtonListener(event){
//     event.preventDefault()
//     var buttons =
//
// }
