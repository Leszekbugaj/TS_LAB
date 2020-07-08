<<<<<<< HEAD
import { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class SelectOptionField implements Field {

    constructor(name: String, label: String) {
        this.Name = name;
        this.Label = label;
    }

    Name: String;
    Label: String;
    Type: FieldType = FieldType.SelectOptionField;
    Value: String = "";
    Render(): String {
        return `<option value="${this.Value}">${this.Label}</option>`
    }

=======
import { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class SelectOptionField implements Field {

    constructor(name: String, label: String) {
        this.Name = name;
        this.Label = label;
    }

    Name: String;
    Label: String;
    Type: FieldType = FieldType.SelectOptionField;
    Value: String = "";
    render(): String {
        return `<option value="${this.Value}">${this.Label}</option>`
    }

>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
}