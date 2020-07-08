import { FieldType } from "./FieldType.js";
export class InputField {
    constructor(name, value) {
        this.Label = "";
        this.Type = FieldType.InputField;
        this.Name = name;
        this.Value = value;
    }
    Render() {
        return `<input type="text" id="${this.Name}" name="${this.Name}" value="${this.Value}"><br>`;
    }
}
//# sourceMappingURL=InputField.js.map