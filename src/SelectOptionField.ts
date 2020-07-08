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

}