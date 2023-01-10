$(document).ready(function () {
    console.log('Jquery Started');
    // $('p').click(function () {
    //     console.log('You clicked on p', this)
    // })

    // $('p').dblclick(function () {
    //     console.log('Double Clicked', this)
    // });

    // $('p').mouseenter(function () {
    //     console.log('Mouse Enter', this)
    // });

    // $("p").mouseenter(function () {
    //     alert("You entered p1!");
    // });

    // $("p").mouseleave(function () {
    //     alert("Bye! You now leave p1!");
    // });

    // $("p").mousedown(function(){
    //     alert("Mouse down over p1!");
    // });

    // $("p").hover(function () {
    //     console.log("You entered p!");
    // },
    //     function () {
    //         console.log("Bye! You now leave!");
    //     });


    // Demoing the "ON" method // Multiple events

    // $('p').on({
    //     click: function () {
    //         console.log('Thanks for Clicking ',this);
    //     },
    //     mouseleave: function () {
    //         console.log('You Leave',this)
    //     }
    // })

    // Hide and Show
    // $('#wiki').hide(1000,function () {
    //     console.log('Hidden')
    // })
    // $('#wiki').show(1000,function () {
    //     console.log('Show')
    // })

    // $('#button').click(function (){
    //     $('#wiki').toggle(1000,function () {
    //             console.log('Show')
    //         })
    // })

    // $('#button').click(function (){
    //     $('#wiki').fadeToggle(1000,function(){
    //         console.log('Fade is Working')
    //     })
    // })

    $('#button').click(function (){
        $('#wiki').slideToggle(1000,function(){
            console.log('Fade is Working')
        })
    })

});