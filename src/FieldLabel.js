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
//# sourceMappingURL=FieldLabel.js.map