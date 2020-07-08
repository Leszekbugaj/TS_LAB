<<<<<<< HEAD
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
=======
import { FieldType } from "./FieldType.js";
export class DateField {
    constructor(name, label, value) {
        this.Type = FieldType.DateField;
        this.Name = name;
        this.Label = label;
        this.Value = value;
    }
    render() {
        return `<input type="date" id="${this.Name}" name="${this.Name}" value="${this.Value}">`;
    }
}
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
//# sourceMappingURL=DateField.js.map