import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class CheckboxField implements Field {

    static Id: number = 1;

    Name: String;
    Label: String;
    Type: FieldType = FieldType.CheckboxField;
    Value: String;
    
    constructor(name: string, value: string, label: string = "" ) {
        this.Name = name;
        this.Value = value; 
        this.Label = label; 
    }

    render(): String {
        return `<input type="checkbox" id="${this.Name}" name="${this.Name}" value="${this.Value}">`
    }

}