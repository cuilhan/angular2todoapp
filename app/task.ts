export class Task {
    private _name: string;
    private _completed: boolean;

    constructor(name: string, completed: boolean) {
        this._name = name;
        this._completed = completed;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get completed(): boolean {
        return this._completed;
    }

    set completed(value: boolean) {
        this._completed = value;
    }
}