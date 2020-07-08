import { FieldType } from "./FieldType.js";
export class SelectOptionField {
    constructor(name, label) {
        this.Type = FieldType.SelectOptionField;
        this.Value = "";
        this.Name = name;
        this.Label = label;
    }
    render() {
        return `<option value="${this.Value}">${this.Label}</option>`;
    }
}
//# sourceMappingURL=SelectOptionField.js.map