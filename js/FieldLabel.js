import { FieldType } from "./FieldType.js";
export class FieldLabel {
    constructor(name, label = "", setBR = false, value = "") {
        this.Type = FieldType.FieldLabel;
        this.TypeField = document.createElement('label');
        this.Name = name;
        this.Label = label;
        this.Value = value;
    }
    Render(div) {
        this.TypeField.setAttribute('name', this.Name);
        this.TypeField.innerText = this.Label;
        div.appendChild(this.TypeField);
    }
    GetValue() {
        return this.TypeField.innerText;
    }
}
//# sourceMappingURL=FieldLabel.js.map