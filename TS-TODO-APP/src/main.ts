import List from "./models/List.ts";
import ListTemplate from "./templates/ListTemplate.ts";
import ListItem from "./models/ListItem.ts";

const initApp = () : void => {
    console.log('init');

    const listInstance = List.instance;
    const listTemplateInstance = ListTemplate.instance;
    const itemForm = document.getElementById('form') as HTMLFormElement;

    itemForm.addEventListener('submit', (event: SubmitEvent): void => {
        event.preventDefault();

        const inputEL = document.getElementById('item-input') as HTMLInputElement;
        const newText = inputEL.value.trim();
        if (!newText.length) return;
        inputEL.value = "";

        const itemId = listInstance.list.length
            ? parseInt(listInstance.list[listInstance.list.length - 1].id) + 1
            : 1
        //new item 생성하기
        const newItem = new ListItem(itemId.toString(), newText)


        listInstance.addItem(newItem);
    })

    const clearItemsEl = document.getElementById('clear-items-btn') as HTMLButtonElement;

    clearItemsEl.addEventListener('click', () => {
        listInstance.clearList();
        listTemplateInstance.clear();
    })
    //초기 데이터를 load하기
    listInstance.load();
    //생성된 데이터를 이용해서 화면에서 보여주기
    listTemplateInstance.render(listInstance);


}
initApp();