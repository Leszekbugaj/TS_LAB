import { FieldType } from "./FieldType.js";
export class SelectOptionField {
    constructor(name, label) {
        this.Type = FieldType.SelectOptionField;
        this.Value = "";
        this.Name = name;
        this.Label = label;
    }
    Render() {
        return `<option value="${this.Value}">${this.Label}</option>`;
    }
}
//# sourceMappingURL=SelectOptionField.js.map