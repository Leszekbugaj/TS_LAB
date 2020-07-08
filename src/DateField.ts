import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class DateField implements Field {

    constructor(name: String, label: String, value: String ) {
        this.Name = name;
        this.Label = label;
        this.Value = value; 
    }
    
    Name: String;
    Label: String;
    Type: FieldType = FieldType.DateField;
    Value: String;
    Render(): String {
        return `<input type="date" id="${this.Name}" name="${this.Name}" value="${this.Value}">`
    }
    
}