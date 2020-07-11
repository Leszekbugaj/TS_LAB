import { Field } from "./Field.js";

export interface DataStorage {
    SaveDocument(document: Field[], key: string): string;
    GetDocuments(): string[];
    LoadDocument(Id: string): any;
    
}