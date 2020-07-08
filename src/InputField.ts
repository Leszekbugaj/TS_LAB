<<<<<<< HEAD
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
    Render(): string {
        return `<input type="text" id="${this.Name}" name="${this.Name}" value="${this.Value}"><br>`
    }
    
=======
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
    
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
}