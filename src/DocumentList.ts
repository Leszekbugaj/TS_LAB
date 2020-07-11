import { LocStorage } from "./LocStorage.js";

export class DocumentList {

    locStorage: LocStorage = new LocStorage();
    documentList: string[] = [];
    
    GetDocumentList(): string[] {
        this.documentList = this.locStorage.GetDocuments().filter(x => x.match(/document*/gm))
        return this.documentList;
    }

    Render(): string {
        let table: string = `<table class ="documentList">`;

        this.GetDocumentList();
        this.documentList.forEach((key) => {
            table += `<tr><th>${key}</th></tr>`
        });

        table += `</table>`;
        return table;
    }
}