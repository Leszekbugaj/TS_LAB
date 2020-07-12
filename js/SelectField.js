import { FieldType } from "./FieldType.js";
import { FieldLabel } from "./FieldLabel.js";
export class SelectField {
    constructor(name, label = "", value = "") {
        this.Type = FieldType.SelectField;
        this.Options = [];
        this.TypeField = document.createElement('select');
        this.LabelField = new FieldLabel("", "");
        this.JsonOption = "";
        this.Name = name;
        this.Label = label;
        this.Value = value;
        this.LabelField.Label = this.Label;
        this.LabelField.Name = this.Name;
    }
    Render(div) {
        this.LabelField.Render(div);
        div.appendChild(document.createElement('br'));
        this.TypeField.setAttribute('name', this.Name);
        this.TypeField.setAttribute('value', this.Value);
        this.Options.forEach(option => option.AddOption(this.TypeField));
        div.appendChild(this.TypeField);
        div.appendChild(document.createElement('br'));
    }
    GetValue() {
        var _a;
        return (_a = this.TypeField.options.item(this.TypeField.selectedIndex)) === null || _a === void 0 ? void 0 : _a.innerText;
    }
    AddOption(option) {
        this.Options.push(option);
    }
}
//# sourceMappingURL=SelectField.js.map