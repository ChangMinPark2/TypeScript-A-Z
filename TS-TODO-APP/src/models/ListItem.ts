export interface IListItem {
    id: string;
    item: string;
    checked: boolean;
}

export default class ListItem implements IListItem {
    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false
    ) {}

    get id(): string {
        return this._id;
    }

    get item(): string {
        return this._item;
    }

    get checked(): boolean {
        return this._checked;
    }

    set id(value: string) {
        this._id = value;
    }

    set item(value: string) {
        this._item = value;
    }

    set checked(value: boolean) {
        this._checked = value;
    }
}