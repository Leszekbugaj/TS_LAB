import { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { CheckboxField } from "./CheckboxField.js";
import { LocStorage } from "./LocStorage.js";

export class Form {
    Fields: Field[] = [];

    GetValue(): [string, string][] {

        const result: [string, string][] = [];
        this.Fields.forEach(field => {
            result.push([field.Name,field.GetValue()]);
        })
        console.table(result);
        return result;
        
    }

    Render(): void {
        const div = document.createElement('div');
        document.body.appendChild(div);
        

        this.Fields.forEach((field: Field) => {            
            field.Render(div);                    
        })
        
        div.appendChild(document.createElement('br'));
        const saveButton = document.createElement('button');
        saveButton.innerText = "Zapisz";
        saveButton.addEventListener('click',() => (new LocStorage()).SaveDocument(this.Fields));
        saveButton.addEventListener('click', ()=>
        window.location.assign("/index.html"));
        
        
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Anuluj';
        cancelButton.addEventListener('click', ()=>
        window.location.assign("/index.html"));

        div.appendChild(saveButton);
        div.appendChild(cancelButton);
    }

}