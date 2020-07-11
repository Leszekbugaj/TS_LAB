import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";

export class FieldLabel implements Field{

    Name: string;
    Label: string;
    Type = FieldType.FieldLabel;
    TypeField: HTMLLabelElement = document.createElement('label');
    Value: string;
    

    constructor(name: string, label: string = "", setBR: boolean = false, value: string = "") {
        this.Name = name;
        this.Label = label;
        this.Value = value;
        
    }

    

    Render(div: HTMLDivElement): void {
        this.TypeField.setAttribute('name',this.Name);
        this.TypeField.innerText = this.Label;
        div.appendChild(this.TypeField);
        
    }
    GetValue(): string {
        return this.TypeField.innerText;
    }
    

    
}