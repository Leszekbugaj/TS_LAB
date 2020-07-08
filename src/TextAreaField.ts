<<<<<<< HEAD
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

    
=======
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
    render(): String {
        return `<textarea id="${this.Name}" name="${this.Name}" rows="4" cols="50">${this.Value}</textarea>`
    }

    
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
}