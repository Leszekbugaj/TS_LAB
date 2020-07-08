import { FieldType } from "./FieldType.js";
export class EmailField {
    constructor(name, value = "") {
        this.Label = "";
        this.Type = FieldType.EmailField;
        this.Name = name;
        this.Value = value;
    }
    Render() {
        return `<input type="email" id="${this.Name}" size="30" required><br />`;
    }
}
//# sourceMappingURL=EmailField.js.map