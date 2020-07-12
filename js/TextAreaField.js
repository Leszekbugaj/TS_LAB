import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";
export class TextAreaField {
    constructor(name, label = "", value = "") {
        this.Type = FieldType.TextAreaField;
        this.TypeField = document.createElement('textarea');
        this.LabelField = new FieldLabel("", "");
        this.Name = name;
        this.Label = label;
        this.Value = value;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    Render(div) {
        this.LabelField.Render(div);
        div.appendChild(document.createElement('br'));
        div.appendChild(this.TypeField);
        this.TypeField.setAttribute('name', this.Name);
        this.TypeField.innerText = this.Value;
        div.appendChild(document.createElement('br'));
    }
    GetValue() {
        return this.TypeField.value;
    }
}
//# sourceMappingURL=TextAreaField.js.map