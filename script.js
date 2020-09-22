/*
setTimeout( function(){
$(".param-filter-single.otevreny").closest("#category-filter-hover").addClass("vyfiltrovano");
$("#category-filter-hover:not(.vyfiltrovano) .param-filter-single:first-child").addClass("otevreny");

}, 1000);
*/

function mbTabfiltr(){
if ( $('body.type-category').length ) {

$(".filter-section > h4").click( function() {
$(".filter-section").removeClass("otevreny");
$(this).closest('.filter-section').addClass('otevreny');
  
  
   
   $("#filters > .slider-wrapper.filter-section-default").wrap('<div class="top-filters">');
   $(".param-filter-top").prependTo(".top-filters");
   //$(".top-filters").append('<button id="showFiltersData" class="ShowData"><span>Zobrazit značky a parametry</span></button>');
   $('.param-filter-top .filter-label[for="stock"]').text('Na Skladě');

$('#category-filter-hover').each(function(){
   $(this).css('min-height', $('.filter-section.otevreny form fieldset', this).outerHeight() + 70);
});

});
$('#category-filter-hover .filter-section:not(:last-child)').click(function () {
        $("#category-filter-hover .filter-section").removeClass('otevreny');
        $(this).addClass('otevreny');
        var activeIndex = $(this).index() + 1;
        localStorage.setItem('mySelectValue', activeIndex);
    });
var activeIndex = localStorage.getItem('mySelectValue');
    if (isNaN(activeIndex) || localStorage.getItem('activeIndex') === null ) {
      
        localStorage.setItem('mySelectValue', '1');
        $('#category-filter-hover .filter-section:nth-child(1)').addClass('otevreny');
        //$('#category-filter-hover .filter-section:nth-child('+activeIndex+')').addClass('otevreny');
        $("#filters > .slider-wrapper.filter-section-default").wrap('<div class="top-filters">');
        $(".param-filter-top").prependTo(".top-filters");
        $(".top-filters").append('<button id="showFiltersData" class="ShowData"><span>Zobrazit značky a parametry</span></button>');
        $('.param-filter-top .filter-label[for="stock"]').text('Na Skladě');

    } else {
        $('#category-filter-hover .filter-section:nth-child('+activeIndex+')').addClass('otevreny'); /*ZDE Hazí chybu při spuštění scriptu pokud Tab ve filtru nebyl prokliknutý*/
        //$('#showFiltersData').toggleClass('active');
        //$('#filters > .filter-sections').toggle();
        $('#category-filter-hover').each(function(){
          $(this).css('min-height', $('.filter-section.otevreny form fieldset', this).outerHeight() + 70);
        });
    }




$('#showFiltersData').click(function () {

  $(this).toggleClass('active');
  $('#filters > .filter-sections').toggle();
  
  $('#category-filter-hover').each(function(){
   $(this).css('min-height', $('.filter-section.otevreny form fieldset', this).outerHeight() + 70);
  });
   
});


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


/*
Chyba, která byla na řádku 45 byla vyřešená tím, že se po načtení scriptu kontroluje jestli Localstorage obsahuje hodnotu, 
pokud ne tak přidá defaultně hodnota do localstorage "1" 

  * Přidat funnkci, která bude kontrolovat jestli byl filtr po AJAX Complete otevřený nebo zařený.
    (Z důvodu, pokud si někdo při zavřeném filtru vybere jen - Filtrování dle ceny. V opačném případě je vadí to, 
    že po Ajax dotazu se filtr vždy skryje)

  * Řádek 39 - vzniká chyba pokud LoiscalStorage is empty (nepomáhá přidání hodnoty do LocalStorage na řádku 37)


*/




