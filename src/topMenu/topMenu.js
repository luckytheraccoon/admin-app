import $ from 'jquery';
import menuItems from './menuItems';
import './topMenu.scss';
export default () => {
    const cssPrefix = "topMenu_";
    const menuItemsArr = menuItems();
    const menuItemsAmt = menuItemsArr.length;
    
    const wrapper = document.createElement("div");
    wrapper.id = cssPrefix+"wrapper";

    const root = document.createElement("div");
    root.className = cssPrefix+"root";
    
    const main = document.createElement("div");
    main.className = cssPrefix+"main";
    
    const closer = document.createElement("div");
    closer.className = cssPrefix+"closer";
    
    for (var i = 0; i < menuItemsAmt; i++) {
        const item = document.createElement("div");
        item.className = cssPrefix+"item";
        const itemIcon = document.createElement("div");
        itemIcon.className = cssPrefix+"icon " + menuItemsArr[i].icon;
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
    
        itemContent.className = cssPrefix+"content";
        item.append(itemIcon);
        item.append(itemContent);
        main.append(item);
    }
    
    root.append(main);
    wrapper.append(root);
    root.after(closer);
    
    document.body.append(wrapper);
    
    
    const mainC = "."+cssPrefix+"main";
    const rootC = "."+cssPrefix+"root";
    const closerC = "."+cssPrefix+"closer";
    const itemC = "."+cssPrefix+"item";
    const contentC = "."+cssPrefix+"content";
    
    $(rootC).mouseenter(function () {
        $(this)
            .next(closerC)
            .addClass("visible");
        $(this)
            .find(mainC)
            .addClass("visible");
    });
    
    $(closerC).mouseenter(function () {
        $(this)
            .removeClass("visible")
            .prev()
            .find(mainC)
            .removeClass("visible");
    });
    
    $(itemC).click(function () {
        $(this)
            .removeClass("hovered")
            .addClass("activated")
            .animate({
                 height: $(this).find(contentC).outerHeight() + "px"
            },100);
    }).mouseenter(function () {
        $(this)
            .addClass("hovered");
    }).mouseleave(function () {
        $(this)
            .removeClass("hovered activated")
            .removeAttr("style");
    });
}
