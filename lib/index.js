$(function () { 
    $('#dowebok').fullpage({
        navigation:true,
        sectionsColor:['#00bfff','#9acd32','#ffa500','#008000','#87ceeb'],
        afterLoad:function (a,index) { 
            // console.log(index);
            
            $('.section').removeClass('animation');
            $('.section').eq(index-1).addClass('animation');
         }
    });
 })