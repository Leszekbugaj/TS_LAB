<<<<<<< HEAD
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

    Render(): String {
        return `<input type="checkbox" id="${this.Name}" name="${this.Name}" value="${this.Value}">`
    }

=======
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

>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
}