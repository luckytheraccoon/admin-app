import $ from 'jquery';
import menuItems from './menuItems';
import '../css/main.scss';

const menuItemsArr = menuItems();
const menuItemsAmt = menuItemsArr.length;

const wrapper = document.createElement("div");
wrapper.id = "wrapper";

const root = document.createElement("div");
root.className = "root";

const main = document.createElement("div");
main.className = "main";

const closer = document.createElement("div");
closer.className = "closer";

for (var i = 0; i < menuItemsAmt; i++) {
    const item = document.createElement("div");
    item.className = "item";
    const itemIcon = document.createElement("div");
    itemIcon.className = "icon " + menuItemsArr[i].icon;
    const itemContent = document.createElement("div");

    const contentUl = document.createElement("ul");

    for (var x = 0; x < menuItemsArr[i].listItems.length; x++) {
        const contentLi = document.createElement("li");
        const contentA = document.createElement("a");
        contentA.append(document.createTextNode(menuItemsArr[i].listItems[x].label));
        contentA.href = menuItemsArr[i].listItems[x].url;
        contentLi.append(contentA);
        contentUl.append(contentLi);
    }

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


$(document).ready(function () {

    $(".main").css({
        "min-height": (45 * menuItemsAmt) + "px"
    });

    $(".root").mouseenter(function () {
        $(this)
            .next(".closer")
            .addClass("visible");
        $(this)
            .find(".main")
            .addClass("visible");
    });

    $(".closer").mouseenter(function () {
        $(this)
            .removeClass("visible")
            .prev()
            .find(".main")
            .removeClass("visible");
    });

    $(".item").click(function () {
        $(this)
            .removeClass("hovered")
            .addClass("activated")
            .css({
                width: $(this).find(".content").outerWidth() + "px",
                height: $(this).find(".content").outerHeight() + "px"
            });
    }).mouseenter(function () {
        $(this)
            .addClass("hovered");
    }).mouseleave(function () {
        $(this)
            .removeClass("hovered activated")
            .removeAttr("style");
    });
});