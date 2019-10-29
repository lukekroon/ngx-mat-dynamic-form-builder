export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    order: number;
    controlType: string;
    hint: string
    placeholder: string
    objectDisplayString: string
    objectFilterString: string
    validators: any
    flex: number;

    // TODO: Is it necessary to extend from here?

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        hint?: string,
        placeholder?: string,
        objectDisplayString?: string,
        objectFilterString?: string,
        validators?: any,
        flex?: number
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.hint = options.hint || '';
        this.placeholder = options.placeholder || '';
        this.objectDisplayString = options.objectDisplayString || '';
        this.objectFilterString = options.objectFilterString || '';
        this.validators = options.validators || null;
        this.flex = options.flex || 100;
    }
}