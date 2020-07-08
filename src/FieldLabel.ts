<<<<<<< HEAD
import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class FieldLabel implements Field{

    constructor(name: String, label: String) {
        this.Name = name;
        this.Label = label;
    }

    Name: String;
    Label: String;
    Type: FieldType = FieldType.FieldLabel;
    Value: String = "";
    Render(): String {
       return `<label for="${this.Name}">${this.Label}</label><br />`
    }
    
=======
import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class FieldLabel implements Field{

    constructor(name: String, label: String) {
        this.Name = name;
        this.Label = label;
    }

    Name: String;
    Label: String;
    Type: FieldType = FieldType.FieldLabel;
    Value: String = "";
    render(): String {
       return `<label for="${this.Name}">${this.Label}</label><br />`
    }
    
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
}