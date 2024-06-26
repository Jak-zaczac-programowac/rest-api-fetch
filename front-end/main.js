import { renderApp } from "./app";
import "./style.css";

const rootNode = document.querySelector("#app");

const { renderShoppingList } = renderApp(
    rootNode,
    onDeleteItem,
    onAddItem,
    onEditItem
);

let list = [];
renderShoppingList(list);

function onDeleteItem(item) {
    list = list.filter((i) => i !== item);

    renderShoppingList(list);
}

function onAddItem(item) {
    list = [...list, item];
    renderShoppingList(list);
}

function onEditItem(item) {
    const index = list.lastIndexOf(item);

    list[index] = item;
    renderShoppingList(list);
}
