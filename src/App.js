import { FieldLabel } from "./FieldLabel.js";
import { Form } from "./Form.js";
import { InputField } from "./InputField.js";
import { EmailField } from "./EmailField.js";
import { SelectField } from "./SelectField.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { CheckboxField } from "./CheckboxField.js";
import { TextAreaField } from "./TextAreaField.js";
export class App {
    constructor() {
        this.form = new Form();
        this.form.Fields.push(new FieldLabel("name", "Imie"));
        this.form.Fields.push(new InputField("name", "Lesze"));
        this.form.Fields.push(new FieldLabel("surname", "Nazwisko"));
        this.form.Fields.push(new InputField("surname", "Bugaj"));
        this.form.Fields.push(new FieldLabel("email", "Adres Email"));
        this.form.Fields.push(new EmailField("email", "Leszek.Bugaj21@gmail.com"));
        this.form.Fields.push(new FieldLabel("fieldOfStudy", "Kierunek Studiów"));
        const fieldOfStudy = [
            new SelectOptionField("iie", "Informatyka i ekonometria"),
            new SelectOptionField("e", "Ekonometria")
        ];
        this.form.Fields.push(new SelectField("fieldOfStudy", fieldOfStudy));
        this.form.Fields.push(new FieldLabel("choice", "Czy Preferujesz e-learning?"));
        this.form.Fields.push(new CheckboxField("yes", "Tak"));
        this.form.Fields.push(new FieldLabel("choice", "Tak"));
        this.form.Fields.push(new CheckboxField("no", "Nie"));
        this.form.Fields.push(new FieldLabel("choice", "Nie"));
        this.form.Fields.push(new FieldLabel("comments", "Uwagi"));
        this.form.Fields.push(new TextAreaField("comments", "Uwagi"));
        document.querySelector(".click").addEventListener("click", this.form.getValue);
    }
    Render() {
        return this.form.Render();
    }
}
//# sourceMappingURL=App.js.map