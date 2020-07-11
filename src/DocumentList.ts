// import { LocStorage } from "./LocStorage.js";

// export class DocumentList {

//     locStorage: LocStorage = new LocStorage();
//     documentList: string[] = [];
    
//     GetDocumentList(): string[] {
//         this.documentList = this.locStorage.GetDocuments().filter(x => x.match(/document*/gm))
//         return this.documentList;
//     }

//     Render(): string {
//         let table: string = `<table class ="documentList">`;

//         this.GetDocumentList();
//         this.documentList.forEach((key) => {
//             table += `<tr><th>${key}</th></tr>`
//         });

//         table += `</table>`;
//         return table;
//     }
// }

import { LocStorage } from "./LocStorage.js";
import { Field } from "./Field.js";


export class DocumentList {

    locStorage: LocStorage = new LocStorage();
    documentList: string[] = [];
    
    GetDocumentList(): string[] {
        let locStor = new LocStorage();
        const documentList: string[] = locStor.GetDocuments().filter(x => x.match(/Document.*/gm));
        console.table(documentList);
        return documentList;
    }

    Render(): void {
        const div: HTMLDivElement = document.createElement('div');
        const table: HTMLTableElement = document.createElement('table');
        
        this.GetDocumentList().forEach((key) => {
            console.log(key);
           const tr: HTMLTableRowElement  =  document.createElement('tr');
           
           let td: HTMLTableCellElement =  document.createElement('td');
           td.appendChild(document.createTextNode(key));
           tr.appendChild(td);

           td = document.createElement('td');
           const editDocument: HTMLAnchorElement = document.createElement('a');
           editDocument.href = `./edit-document.html?id=${key}`;
           editDocument.innerText = `Edytuj`;
           td.appendChild(editDocument);
           tr.appendChild(td);

        //    td = document.createElement('td');
        //    const removeDocument: HTMLButtonElement = document.createElement('button');
        //    removeDocument.innerText = `Usuń`;
        //    removeDocument.addEventListener('click',() => { 
        //        this.RemoveDocument(key);
        //        tr.remove();
        //     });
        //     td.appendChild(removeDocument);
        //     tr.appendChild(td);

        
            let removeDocument = document.createElement("a");
            removeDocument.addEventListener('click',()=> {this.RemoveDocument(key)});
            removeDocument.setAttribute("href", 'document-list.html');
            removeDocument.innerText = `Usuń`;
            tr.remove();
            
            tr.appendChild(removeDocument);
            
            table.appendChild(tr);
            console.table(this.GetDocumentId(key));
        });
        
        div.appendChild(table);
        document.body.appendChild(div);

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Anuluj';
        cancelButton.addEventListener('click', ()=>
        window.location.assign("/index.html"));

        
        div.appendChild(cancelButton);
    }

    RemoveDocument(key: string): void {
        localStorage.removeItem(key);
    }

    GetDocumentId(key: string) : Field[] {
        return this.locStorage.LoadDocument(key);
    }
}
