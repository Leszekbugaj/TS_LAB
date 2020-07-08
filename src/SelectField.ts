<<<<<<< HEAD
import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { SelectOptionField } from "./SelectOptionField.js";

export class SelectField implements Field {

    constructor(name: String, options: SelectOptionField[]) {
        this.Name = name;
        this.Options = options;
    }

    Name: String;
    Label: String = "";
    Type: FieldType = FieldType.SelectField;
    Value: String = "";
    Options: SelectOptionField[];
    Render(): String {
        return `<select name="${this.Name}" id="${this.Name}">${this.Options.map(function(el) { return el.Render()}).join()}</select><br />`
    }

=======
import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { SelectOptionField } from "./SelectOptionField.js";

export class SelectField implements Field {

    constructor(name: String, options: SelectOptionField[]) {
        this.Name = name;
        this.Options = options;
    }

    Name: String;
    Label: String = "";
    Type: FieldType = FieldType.SelectField;
    Value: String = "";
    Options: SelectOptionField[];
    render(): String {
        return `<select name="${this.Name}" id="${this.Name}">${this.Options.map(function(el) { return el.render()}).join()}</select><br />`
    }

>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
}