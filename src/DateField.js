import { FieldType } from "./FieldType.js";
export class DateField {
    constructor(name, label, value) {
        this.Type = FieldType.DateField;
        this.Name = name;
        this.Label = label;
        this.Value = value;
    }
    Render() {
        return `<input type="date" id="${this.Name}" name="${this.Name}" value="${this.Value}">`;
    }
}
//# sourceMappingURL=DateField.js.map