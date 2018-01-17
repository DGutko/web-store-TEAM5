let tabsControls = $('[data-tab-controls]');

let tabPane = $('[data-tab-pane]');

tabsControls.on('click', function(e){
    e.preventDefault(); //отменяем станд действие

    let target = $(e.target).attr('data-tabs'); //переменная, в которой хранится то, что записано в data-tabs
    tabPane.removeClass('active'); //удаляем класс active
    tabsControls.removeClass('active'); //удаляем класс active

    $(target).addClass('active'); //добавляем класс active

    $(e.target).addClass('active'); //добавляем класс active

});