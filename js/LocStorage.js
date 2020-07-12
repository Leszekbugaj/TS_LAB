import { FieldType } from "./FieldType.js";
import { SelectField } from "./SelectField.js";
import { CheckboxField } from "./CheckboxField.js";
import { DateField } from "./DateField.js";
import { EmailField } from "./EmailField.js";
import { FieldLabel } from "./FieldLabel.js";
import { InputField } from "./InputField.js";
import { TextAreaField } from "./TextAreaField.js";
import { SelectOptionField } from "./SelectOptionField.js";
export class LocStorage {
    SaveDocumentInList(newDocumentId) {
        let docsIds = localStorage.getItem('DocumentsIds');
        if (docsIds === null) {
            let docsIds = new Array();
            docsIds.push(newDocumentId);
            localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
        }
        else {
            let docsIds = JSON.parse(localStorage.getItem('DocumentsIds'));
            docsIds.push(newDocumentId);
            localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
        }
    }
    SaveDocument(document, key = "") {
        const fields = [];
        document.forEach(field => {
            field.Value = field.GetValue();
            if (field.Type == FieldType.SelectField) {
                const options = [];
                field.Options.forEach(option => {
                    options.push([option.Name, option.Label, option.Value]);
                });
                const jsonOption = JSON.stringify(options);
                fields.push([field.Name, field.Label, field.Value, field.Type, jsonOption]);
            }
            else {
                fields.push([field.Name, field.Label, field.Value, field.Type, ""]);
            }
        });
        const jsonDocument = JSON.stringify(fields);
        if (key == "") {
            key = `Document-${Date.now()}`;
        }
        else {
            localStorage.removeItem(key);
        }
        localStorage.setItem(key, jsonDocument);
        return key;
    }
    LoadDocument(key) {
        const fieldArray = [];
        const jsonDocument = localStorage.getItem(key);
        const fields = JSON.parse(jsonDocument);
        fields.forEach(field => {
            switch (field[3]) {
                case FieldType.CheckboxField:
                    const checkbox = new CheckboxField(field[0], field[1], field[2]);
                    fieldArray.push(checkbox);
                    break;
                case FieldType.DateField:
                    const date = new DateField(field[0], field[1], field[2]);
                    fieldArray.push(date);
                    break;
                case FieldType.EmailField:
                    const email = new EmailField(field[0], field[1], field[2]);
                    email.Type = field[3];
                    fieldArray.push(email);
                    break;
                case FieldType.FieldLabel:
                    const label = new FieldLabel(field[0], field[1], field[2]);
                    fieldArray.push(label);
                    break;
                case FieldType.InputField:
                    const text = new InputField(field[0], field[1], field[2]);
                    fieldArray.push(text);
                    break;
                case FieldType.SelectField:
                    const select = new SelectField(field[0], field[1], field[2]);
                    select.Type = field[3];
                    const options = JSON.parse(field[4]);
                    options.forEach(option => {
                        select.AddOption(new SelectOptionField(option[0], option[1], option[2]));
                    });
                    fieldArray.push(select);
                    break;
                case FieldType.TextAreaField:
                    const textarea = new TextAreaField(field[0], field[1], field[2]);
                    textarea.Type = field[3];
                    fieldArray.push(textarea);
                    break;
            }
        });
        return fieldArray;
    }
    RemoveDocument(Id) {
        localStorage.removeItem(Id);
        let docsList = this.GetDocuments();
        let docIndex = docsList.indexOf(Id);
        docsList.splice(docIndex, 1);
        localStorage.setItem('DocumentsIds', JSON.stringify(docsList));
    }
    GetDocuments() {
        const result = [];
        for (let i = 0; i < localStorage.length; i++) {
            result.push(localStorage.key(i));
        }
        return result;
    }
}
//# sourceMappingURL=LocStorage.js.map