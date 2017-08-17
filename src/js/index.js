import $ from 'jquery';
require('../../src/css/main.scss');

let iconsArray = [
    "fa fa-address-card-o",
    "fa fa-calendar",
    "fa fa-cloud",
    "fa fa-comments-o",
    "fa fa-cog",
    "fa fa-exchange",
    "fa fa-question-circle",
    "fa fa-search",
    "fa fa-tasks",
    "fa fa-sign-out",
];

for(let x=1;x<=1;x++) {
    let wrapper = document.createElement("div");
    wrapper.id = "wrapper"+x;

    let root = document.createElement("div");
    root.className = "root";

    let main = document.createElement("div");
    main.className = "main";

    let closer = document.createElement("div");
    closer.className = "closer";

    for(let i=0;i<10;i++) {
        let item = document.createElement("div");
        item.className = "item";
        let itemIcon = document.createElement("div");
        itemIcon.className = "icon " + iconsArray[i];
        let itemContent = document.createElement("div");

        let contentUl = document.createElement("ul");
        let contentLi1 = document.createElement("li");
        contentLi1.append(document.createTextNode(iconsArray[i]+"FAQ"));
        let contentLi2 = document.createElement("li");
        contentLi2.append(document.createTextNode(iconsArray[i]+"For ums"));
        let contentLi3 = document.createElement("li");
        contentLi3.append(document.createTextNode(iconsArray[i]+"Help & S"));
        let contentLi4 = document.createElement("li");
        contentLi4.append(document.createTextNode(iconsArray[i]+"Contact Us"));
        let contentLi5 = document.createElement("li");
        contentLi5.append(document.createTextNode(iconsArray[i]+"Contact Us"));

        contentUl.append(contentLi1);
        contentUl.append(contentLi2);
        contentUl.append(contentLi3);
        contentUl.append(contentLi4);
        contentUl.append(contentLi5);

        itemContent.append(contentUl);

        itemContent.className = "content";
        item.append(itemIcon);
        item.append(itemContent);
        main.append(item);
    }

    root.append(main);
    wrapper.append(root);
    root.after(closer);

    document.body.append(wrapper);
}

$( document ).ready(function() {

    $(".main").css({"min-height":45*10+"px"});

    $(".root").mouseenter(function() {
        $(this).next(".closer").addClass("visible");
        $(this).find(".main").addClass("visible");
    });
    $(".closer").mouseenter(function() {
        $(this).removeClass("visible");
        $(this).prev().find(".main").removeClass("visible");
    });
    $(".item").click(function() {
        $(this).removeClass("hovered");
        $(this).addClass("activated");
        $(this).css({
            width: $(this).find(".content").outerWidth() + "px",
            height: $(this).find(".content").outerHeight() + "px"
        });
    });
    $(".item").mouseenter(function() {
        $(this).addClass("hovered");
    });
    $(".item").mouseleave(function() {
        $(this).removeClass("hovered");
        $(this).removeClass("activated");
        $(this).removeAttr("style");
    });
});