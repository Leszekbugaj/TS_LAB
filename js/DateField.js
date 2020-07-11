import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";
export class DateField {
    constructor(name, label = "", value = "") {
        this.Type = FieldType.DateField;
        this.TypeField = document.createElement('input');
        this.LabelField = new FieldLabel("", "");
        this.Name = name;
        this.Label = label;
        this.Value = value;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    Render(div) {
        this.LabelField.Render(div);
        this.TypeField.setAttribute("type", "date");
        this.TypeField.setAttribute('name', this.Name);
        this.TypeField.setAttribute('value', this.Value);
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
    }
    GetValue() {
        return this.TypeField.value;
    }
}
//# sourceMappingURL=DateField.js.map