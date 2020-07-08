<<<<<<< HEAD
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
=======
import { FieldType } from "./FieldType.js";
export class EmailField {
    constructor(name, value = "") {
        this.Label = "";
        this.Type = FieldType.EmailField;
        this.Name = name;
        this.Value = value;
    }
    render() {
        return `<input type="email" id="${this.Name}" size="30" required><br />`;
    }
}
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
//# sourceMappingURL=EmailField.js.map