import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";

export class CheckboxField implements Field {

    static Id: number = 1;

    Name: string;
    Label: string;
    TypeField: HTMLInputElement = document.createElement('input');
    Value: string;
    LabelField: FieldLabel = new FieldLabel("","");
    
    constructor(name: string, label: string = "",  value: string = "") {
        this.Name = name;
        this.Value = value; 
        this.Label = label;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
        
    }
    Type: any = "";

    Render(div: HTMLDivElement): void {  
    div.appendChild(document.createElement('br'));      
    this.TypeField.setAttribute("type", "checkbox");    
    this.TypeField.setAttribute('name',this.Name);
    this.TypeField.checked = (this.Value === "true");
    div.appendChild(this.TypeField);
    this.LabelField.Render(div);
    div.appendChild(document.createElement('br'));
    }
    
    GetValue(): string {
        return this.TypeField.checked + "";
    }

}