import type { FieldType } from "./FieldType.js";

export interface Field {
    Name:String,
    Label:String,
    Type: FieldType,
    Value:String;
    Render():String;
}