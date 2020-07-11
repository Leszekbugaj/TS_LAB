import { Field } from "./Field.js";

export interface DataStorage {
    SaveDocument(document: Field[]): string;
    LoadDocument(Id: string): any;
    GetDocuments(): string[];
}