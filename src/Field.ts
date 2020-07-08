<<<<<<< HEAD
import type { FieldType } from "./FieldType.js";

export interface Field {
    Name:String,
    Label:String,
    Type: FieldType,
    Value:String;
    Render():String;
=======
import type { FieldType } from "./FieldType.js";

export interface Field {
    Name:String,
    Label:String,
    Type: FieldType,
    Value:String;
    render():String;
>>>>>>> 81c1e8b7dad46ca580f2f566df871b9916e660a6
}