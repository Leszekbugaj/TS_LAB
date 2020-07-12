import { FieldLabel } from "./FieldLabel.js";
import { Form } from "./Form.js";
import { InputField } from "./InputField.js";
import { EmailField } from "./EmailField.js";
import { SelectField } from "./SelectField.js";
import { SelectOptionField } from "./SelectOptionField.js";
import { CheckboxField } from "./CheckboxField.js";
import { TextAreaField } from "./TextAreaField.js";
import { DocumentList } from "./DocumentList.js";
import { LocStorage } from "./LocStorage.js";

export class App {
    form: Form = new Form();
    
    constructor() {

    this.form.Fields.push(new InputField("name",'Imię: '));
    

    this.form.Fields.push(new InputField("surname","Nazwisko: "));

    this.form.Fields.push(new EmailField("email","Podaj adres email: "));
    
    const select = new SelectField("fieldOfStudy", "Jaki kierunek studiów wybierzesz?");
    select.AddOption(new SelectOptionField("iie", "Informatyka i ekonometria","iie"));
    select.AddOption(new SelectOptionField("e", "Ekonometria","e"));

    this.form.Fields.push(select);
    


    this.form.Fields.push(new FieldLabel("choice","Czy Preferujesz e-learning?"));
    this.form.Fields.push(new CheckboxField("yes","Tak"));
    this.form.Fields.push(new CheckboxField("no","Nie"));
    
    this.form.Fields.push(new TextAreaField("comments","Uwagi"));

    

   


    }

    Render(): void {
        this.form.Render();
    }

}