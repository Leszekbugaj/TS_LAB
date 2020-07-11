import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";

export class TextAreaField implements Field {


    Name: string;
    Label: string;
    Type: FieldType = FieldType.DateField;
    Value: string;
    TypeField: HTMLTextAreaElement = document.createElement('textarea');
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
        div.appendChild(document.createElement('br'));        
        div.appendChild(this.TypeField);
        this.TypeField.setAttribute('name',this.Name);
        this.TypeField.innerText = this.Value;
        div.appendChild(document.createElement('br'));
        }
        
        GetValue(): string {
            return this.TypeField.value;
        } 
}