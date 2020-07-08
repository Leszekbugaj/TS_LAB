import { FieldType } from "./FieldType.js";
export class SelectField {
    constructor(name, options) {
        this.Label = "";
        this.Type = FieldType.SelectField;
        this.Value = "";
        this.Name = name;
        this.Options = options;
    }
    Render() {
        return `<select name="${this.Name}" id="${this.Name}">${this.Options.map(function (el) { return el.Render(); }).join()}</select><br />`;
    }
}
//# sourceMappingURL=SelectField.js.map