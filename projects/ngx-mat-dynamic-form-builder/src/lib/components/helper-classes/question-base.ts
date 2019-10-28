export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    hint: string
    placeholder: string
    objectDisplayString: string
    objectFilterString: string
    validators: any

    // TODO: Is it necessary to extend from here?

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
        hint?: string
        placeholder?: string
        objectDisplayString?: string
        objectFilterString?: string
        validators?: any

    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.hint = options.hint || '';
        this.placeholder = options.placeholder || '';
        this.objectDisplayString = options.objectDisplayString || '';
        this.objectFilterString = options.objectFilterString || '';
        this.validators = options.validators || null;
    }
}