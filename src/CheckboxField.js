import { FieldType } from "./FieldType.js";
export class CheckboxField {
    constructor(name, value, label = "") {
        this.Type = FieldType.CheckboxField;
        this.Name = name;
        this.Value = value;
        this.Label = label;
    }
    render() {
        return `<input type="checkbox" id="${this.Name}" name="${this.Name}" value="${this.Value}">`;
    }
}
CheckboxField.Id = 1;
//# sourceMappingURL=CheckboxField.js.map