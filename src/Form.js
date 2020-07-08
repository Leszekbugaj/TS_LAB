import { FieldType } from "./FieldType.js";
export class Form {
    constructor() {
        this.Fields = [];
    }
    getValue() {
        this.Fields.forEach(field => {
            var _a;
            const element = document.querySelector(`#${field.Name}`);
            switch (field.Type) {
                case FieldType.CheckboxField:
                    console.log(`${element.id} => ${element.checked}`);
                    break;
                case FieldType.DateField:
                case FieldType.EmailField:
                case FieldType.InputField:
                case FieldType.TextAreaField:
                    console.log(element.id + '=>' + element.value);
                    break;
                case FieldType.SelectField:
                    console.log(element.id + '=>' + ((_a = element.options.item(element.options.selectedIndex)) === null || _a === void 0 ? void 0 : _a.innerText));
                    break;
                default:
                    break;
            }
        });
    }
    render() {
        let result = ``;
        this.Fields.forEach(field => {
            result += field.render();
        });
        result += `<br /><button onclick="Form.getValue()">Click</button><br />`;
        return result;
    }
}
//# sourceMappingURL=Form.js.map