import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";

export class DateField implements Field {

    Name: string;
    Label: string;
    Type: FieldType = FieldType.DateField;
    Value: string;
    TypeField: HTMLInputElement = document.createElement('input');
    LabelField: FieldLabel = new FieldLabel("","");

    constructor(name: string, label: string = "", value: string = "") {
        this.Name = name;
        this.Label = label;
        this.Value = value; 
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    
    
    Render(div: HTMLDivElement): void {
        this.LabelField.Render(div);
        this.TypeField.setAttribute("type", "date")
        this.TypeField.setAttribute('name',this.Name);
        this.TypeField.setAttribute('value',this.Value);
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
        }
        
        GetValue(): string {
            return this.TypeField.value;
        }
}