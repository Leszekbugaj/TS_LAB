import type { FieldType } from "./FieldType.js";

export interface Field {
    Name:string,
    Label:string,
    Type: FieldType,
    Value:string;
    Render(div: HTMLDivElement): void;
    GetValue(): string

}