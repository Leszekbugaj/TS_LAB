<<<<<<< HEAD
import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class EmailField implements Field {

    constructor(name: String, value: String = "") {
        this.Name = name;
        this.Value = value; 
    }

    Name: String;
    Label: String = "";
    Type: FieldType = FieldType.EmailField;
    Value: String;
    Render(): String {
        return `<input type="email" id="${this.Name}" size="30" required><br />`
    }

=======
import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class EmailField implements Field {

    constructor(name: String, value: String = "") {
        this.Name = name;
        this.Value = value; 
    }

    Name: String;
    Label: String = "";
    Type: FieldType = FieldType.EmailField;
    Value: String;
    render(): String {
        return `<input type="email" id="${this.Name}" size="30" required><br />`
    }

>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
}