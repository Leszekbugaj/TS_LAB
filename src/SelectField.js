<<<<<<< HEAD
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
=======
import { FieldType } from "./FieldType.js";
export class SelectField {
    constructor(name, options) {
        this.Label = "";
        this.Type = FieldType.SelectField;
        this.Value = "";
        this.Name = name;
        this.Options = options;
    }
    render() {
        return `<select name="${this.Name}" id="${this.Name}">${this.Options.map(function (el) { return el.render(); }).join()}</select><br />`;
    }
}
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
//# sourceMappingURL=SelectField.js.map