<<<<<<< HEAD
import { FieldType } from "./FieldType.js";
export class FieldLabel {
    constructor(name, label) {
        this.Type = FieldType.FieldLabel;
        this.Value = "";
        this.Name = name;
        this.Label = label;
    }
    Render() {
        return `<label for="${this.Name}">${this.Label}</label><br />`;
    }
}
=======
import { FieldType } from "./FieldType.js";
export class FieldLabel {
    constructor(name, label) {
        this.Type = FieldType.FieldLabel;
        this.Value = "";
        this.Name = name;
        this.Label = label;
    }
    render() {
        return `<label for="${this.Name}">${this.Label}</label><br />`;
    }
}
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
//# sourceMappingURL=FieldLabel.js.map