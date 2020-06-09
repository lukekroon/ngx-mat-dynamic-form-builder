
/**
 * Base question with no mat form field
 */
export class Question<T> {
    value: T; // The value of the form
    key: string; // Identifier for this question and also the key in which the result will be
    label: string; // The label of the form field
    controlType: string; // The type of question, set by extended classes
    validators: any // Angular validators
    flex: number; // angular flex layout, all questions are in flexLayout="row wrap" i.e. flex=100 will be 100% width
    conditional: { // If this question is conditional on the result of another
        controlKey: string; // the identifier of the other question
        value: any // the value the other question must be for this one to appear
    }
    show: boolean; // hide this question with ngIf
    disabled: boolean; // show but disable

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        controlType?: string,
        validators?: any,
        flex?: number,
        disabled?: boolean,
        conditional?: {
            controlKey: string;
            value: any
        }
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.controlType = options.controlType || '';
        this.validators = options.validators || null;
        this.flex = options.flex || 100;
        this.disabled = options.disabled || false;
        this.conditional = options.conditional;
        this.conditional ? this.show = false : this.show = true;
    }
}

/**
 * Base for all mat form field questions:
 * Auto complete
 * Chip Selector
 * Date time
 * Date
 * Dropdown
 * Select
 * Text area
 * Text Box
 */

export class QuestionBase<T> extends Question<T> {

    hint: string // Hint of the mat form field
    placeholder: string // Placeholder of input
    appearance: string; // mat form field appearance
    prefix: string; // mat form field prefix
    suffix: string; // mat form field suffix
    prefixIcon: string; // mat form field icon prefix
    suffixIcon: string; // mat form field icon suffix

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        controlType?: string,
        hint?: string,
        placeholder?: string,
        appearance?: string,
        validators?: any,
        prefix?: string,
        suffix?: string,
        prefixIcon?: string,
        suffixIcon?: string,
        flex?: number,
        disabled?: boolean,
        conditional?: {
            controlKey: string;
            value: any
        }
    } = {}) {
        super(options)
        this.hint = options.hint || '';
        this.placeholder = options.placeholder || '';
        this.appearance = options.appearance || 'standard';
        this.validators = options.validators || null;
        this.prefix = options.prefix;
        this.suffix = options.suffix;
        this.prefixIcon = options.prefixIcon;
        this.suffixIcon = options.suffixIcon;
    }
}