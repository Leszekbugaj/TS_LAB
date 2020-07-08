    export interface DataStorage {
        SaveDocument(document:any):any,
        LoadDocument(Id:string):any,
        GetDocuments(): string[];
    }