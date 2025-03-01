import type { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { FieldLabel } from "./FieldLabel.js";

export class SelectField implements Field {

    Name: string;
    Label: string;
    Type: FieldType = FieldType.SelectField;
    Value: string;
    Options: SelectOptionField[] = [];
    TypeField: HTMLSelectElement = document.createElement('select');
    LabelField: FieldLabel = new FieldLabel("","");
    JsonOption: string = "";

    constructor(name: string, label: string ="",  value: string = "") {
        this.Name = name;
        this.Label = label;
        this.Value = value; 
        
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    
    
    Render(div: HTMLDivElement): void {
        this.LabelField.Render(div);
        div.appendChild(document.createElement('br'));
        this.TypeField.setAttribute('name',this.Name);
        this.TypeField.setAttribute('value',this.Value);
        this.Options.forEach(option => option.AddOption(this.TypeField))
        
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
        }
        
    GetValue(): string {
        return this.TypeField.options.item(this.TypeField.selectedIndex)?.innerText as string;
    }

    AddOption(option: SelectOptionField) {
        this.Options.push(option);
    }

}