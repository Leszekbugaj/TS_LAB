import { LocStorage } from "./LocStorage.js";
export class Form {
    constructor() {
        this.Fields = [];
    }
    GetValue() {
        const result = [];
        this.Fields.forEach(field => {
            result.push([field.Name, field.GetValue()]);
        });
        console.table(result);
        return result;
    }
    Render() {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.appendChild(document.createElement('br'));
        this.Fields.forEach((field) => {
            field.Render(div);
        });
        div.appendChild(document.createElement('br'));
        const saveButton = document.createElement('button');
        saveButton.innerText = "Zapisz";
        saveButton.addEventListener('click', () => (new LocStorage()).SaveDocument(this.Fields));
        saveButton.addEventListener('click', () => window.location.assign("/index.html"));
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Anuluj';
        cancelButton.addEventListener('click', () => window.location.assign("/index.html"));
        div.appendChild(saveButton);
        div.appendChild(cancelButton);
    }
}
//# sourceMappingURL=Form.js.map