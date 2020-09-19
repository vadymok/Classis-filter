setTimeout( function(){
$(".param-filter-single.otevreny").closest("#category-filter-hover").addClass("vyfiltrovano");
$("#category-filter-hover:not(.vyfiltrovano) .param-filter-single:first-child").addClass("otevreny");
/*
$('#category-filter-hover').each(function(){
   $(this).css('min-height', $('.filter-section.otevreny form', this).outerHeight(true));
});
*/
}, 1000);

function mbTabfiltr(){
if ( $('body.type-category').length ) {

$(".filter-section > h4").click( function() {
$(".filter-section").removeClass("otevreny");
$(this).closest('.filter-section').addClass('otevreny');

$('#category-filter-hover').each(function(){
   $(this).css('min-height', $('.filter-section.otevreny form', this).outerHeight(true));
});

});
$('#category-filter-hover .filter-section').click(function () {
        $("#category-filter-hover .filter-section").removeClass('otevreny');
        $(this).addClass('otevreny');
        var activeIndex = $(this).index() + 1;
        localStorage.setItem('mySelectValue', activeIndex);
    });
var activeIndex = localStorage.getItem('mySelectValue');
    if (isNaN(activeIndex)) {} else {
        $('#category-filter-hover .filter-section:nth-child('+activeIndex+')').addClass('otevreny');
    }

$("#stock-filter label").prependTo(".boolean-filter .parametric-filter").addClass("sklad");




if($('#clear-filters .filter-section-cell.active').length == 0) {
$(".filter-section-cell.active").parent().closest(".filter-section").clone().prependTo("#clear-filters");
}

/*

Aktivní filtry

*/

if ($(".filter-label").hasClass("active")) {

if($('.vybrane-filtry').length == 0) {
$('#clear-filters').closest('.filter-section').appendTo('#filters > .filter-sections');
$('<div class="vybrane-filtry"></div>').prependTo("#clear-filters");
$(".filter-label.active").closest(".filter-section").clone().appendTo(".vybrane-filtry");
$(".vybrane-filtry .filter-label.active").closest("div").addClass("aktivni-filtr");
$(".vybrane-filtry .filter-section fieldset div:not(.aktivni-filtr):not(.advanced-filters-wrapper)").remove();
}

}


$("#clear-filters .parametric-filter").parent().closest("#param-filter-bottom").addClass("aktivni-filtr-ano");
if($(window).width() >= 768){
$('#category-filter-hover').each(function(){
   $(this).css('min-height', $('.parametric-filter', this).outerHeight());
});
$('#category-filter-hover').each(function(){
   $(this).css('min-height', $('.filter-section.otevreny .parametric-filter', this).outerHeight());
});
$(".filter-section > h4").click( function() {
$('#category-filter-hover').each(function(){
   $(this).css('min-height', $('.filter-section.otevreny .parametric-filter', this).outerHeight());
});
});
}
if($(window).width() <= 767){
$(".filter-section:first-child").removeClass("otevreny");
}
}

}



$(document).ready(function() {
mbTabfiltr();
});
$(document).ajaxSuccess(function(){
mbTabfiltr();
});