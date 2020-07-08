<<<<<<< HEAD
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
=======
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
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
//# sourceMappingURL=SelectOptionField.js.map