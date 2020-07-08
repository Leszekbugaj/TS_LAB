<<<<<<< HEAD
import { FieldType } from "./FieldType.js";
export class CheckboxField {
    constructor(name, value, label = "") {
        this.Type = FieldType.CheckboxField;
        this.Name = name;
        this.Value = value;
        this.Label = label;
    }
    Render() {
        return `<input type="checkbox" id="${this.Name}" name="${this.Name}" value="${this.Value}">`;
    }
}
CheckboxField.Id = 1;
=======
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
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
//# sourceMappingURL=CheckboxField.js.map