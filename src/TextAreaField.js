import { FieldType } from "./FieldType.js";
export class TextAreaField {
    constructor(name, value) {
        this.Label = "";
        this.Type = FieldType.TextAreaField;
        this.Name = name;
        this.Value = value;
    }
    render() {
        return `<textarea id="${this.Name}" name="${this.Name}" rows="4" cols="50">${this.Value}</textarea>`;
    }
}
//# sourceMappingURL=TextAreaField.js.map