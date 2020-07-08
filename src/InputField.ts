import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class InputField implements Field {

    constructor(name: String, value: String ) {
        this.Name = name;
        this.Value = value; 
    }

    Name: String;
    Label: String = "";
    Type: FieldType = FieldType.InputField;
    Value: String;
    render(): string {
        return `<input type="text" id="${this.Name}" name="${this.Name}" value="${this.Value}"><br>`
    }
    
}