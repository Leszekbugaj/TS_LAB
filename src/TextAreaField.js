<<<<<<< HEAD
import { FieldType } from "./FieldType.js";
export class TextAreaField {
    constructor(name, value) {
        this.Label = "";
        this.Type = FieldType.TextAreaField;
        this.Name = name;
        this.Value = value;
    }
    Render() {
        return `<textarea id="${this.Name}" name="${this.Name}" rows="4" cols="50">${this.Value}</textarea>`;
    }
}
=======
import { FieldType } from "./FieldType.js";
export class TextAreaField {
    constructor(name, value) {
        this.Label = "";
        this.Type = FieldType.TextAreaField;
        this.Name = name;
        this.Value = value;
    }
    render() {
        return `<textarea id="${this.Name}" name="${this.Name}" rows="4" cols="50">${this.Value}</textarea>`;
    }
}
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
//# sourceMappingURL=TextAreaField.js.map