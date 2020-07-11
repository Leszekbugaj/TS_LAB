import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";
export class EmailField {
    constructor(name, label = "", value = "") {
        this.Type = FieldType.EmailField;
        this.TypeField = document.createElement('input');
        this.LabelField = new FieldLabel("", "");
        this.Name = name;
        this.Label = label;
        this.Value = value;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    GetValue() {
        return this.TypeField.value;
    }
    Render(div) {
        this.LabelField.Render(div);
        this.TypeField.setAttribute('type', 'email');
        this.TypeField.setAttribute('name', this.Name);
        this.TypeField.setAttribute('value', this.Value);
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
    }
}
//# sourceMappingURL=EmailField.js.map