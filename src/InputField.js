<<<<<<< HEAD
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
=======
import { FieldType } from "./FieldType.js";
export class InputField {
    constructor(name, value) {
        this.Label = "";
        this.Type = FieldType.InputField;
        this.Name = name;
        this.Value = value;
    }
    render() {
        return `<input type="text" id="${this.Name}" name="${this.Name}" value="${this.Value}"><br>`;
    }
}
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
//# sourceMappingURL=InputField.js.map