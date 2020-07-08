import { Field } from "./Field.js";
import { FieldType } from "./FieldType.js";
import { CheckboxField } from "./CheckboxField.js";

export class Form {
    Fields: Field[] = [];

    getValue() {

        this.Fields.forEach(field => {
            const element: any = document.querySelector(`#${field.Name}`);

            switch(field.Type)
            {
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
                    console.log(element.id + '=>' + element.options.item(element.options.selectedIndex)?.innerText);
                    break;
                default:
                    break;
                
            }
        });

        // const input: NodeListOf<HTMLInputElement> = document.querySelectorAll("input, TextArea");
        // const select: NodeListOf<HTMLSelectElement> = document.querySelectorAll("select");
        // const option: NodeListOf<HTMLElement> = document.querySelectorAll("checkbox");

        // input.forEach(function(element: HTMLInputElement){
        //    console.log(element.id + '=>' + element.value);
        // });

        // select.forEach(function(element: HTMLSelectElement){
        //     console.log(element.id + '=>' + element.options.item(element.options.selectedIndex)?.innerText);
        // });

        // option.forEach(function(element: HTMLElement){
        //     console.log(element.id + '=>' + (element as HTMLInputElement).checked);
        // });
            


        //     values?.push((node as HTMLInputElement).id);
        //    if(node.nodeName === "SELECT") values?.push((node as HTMLSelectElement).options.item((node as HTMLSelectElement).options.selectedIndex)?.innerText);
        //    else values?.push((node as HTMLInputElement).value);
        // });
        // console.table(values.filter(x => !!x));
    }

    render(): string {
        let result: string = ``;
        this.Fields.forEach(field => {
            result += field.render();
        });
        result += `<br /><button onclick="Form.getValue()">Click</button><br />`
        return result;
    }

}