import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class TextAreaField implements Field {

    constructor(name: String, value: String ) {
        this.Name = name;
        this.Value = value; 
    }

    Name: String;
    Label: String = "";
    Type: FieldType = FieldType.TextAreaField;
    Value: String;
    Render(): String {
        return `<textarea id="${this.Name}" name="${this.Name}" rows="4" cols="50">${this.Value}</textarea>`
    }

    
}