export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    controlType: string;
    hint: string
    placeholder: string
    objectDisplayString: string
    objectFilterString: string
    validators: any
    flex: number;
    appearance: string;
    prefix: string;
    suffix: string;
    prefixIcon: string;
    suffixIcon: string;
    conditional: {
        controlKey: string;
        value: any
    }
    show: boolean;
    // TODO: Is it necessary to extend from here?

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        controlType?: string,
        hint?: string,
        placeholder?: string,
        objectDisplayString?: string,
        objectFilterString?: string,
        appearance?: string,
        validators?: any,
        prefix?: string,
        suffix?: string,
        prefixIcon?: string,
        suffixIcon?: string,
        flex?: number,
        conditional?: {
            controlKey: string;
            value: any
        }
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.controlType = options.controlType || '';
        this.hint = options.hint || '';
        this.placeholder = options.placeholder || '';
        this.objectDisplayString = options.objectDisplayString || '';
        this.objectFilterString = options.objectFilterString || '';
        this.appearance = options.appearance || 'standard';
        this.validators = options.validators || null;
        this.prefix = options.prefix;
        this.suffix = options.suffix;
        this.prefixIcon = options.prefixIcon;
        this.suffixIcon = options.suffixIcon;
        this.flex = options.flex || 100;
        this.conditional = options.conditional;
        this.conditional ? this.show = false : this.show = true;
    }
}