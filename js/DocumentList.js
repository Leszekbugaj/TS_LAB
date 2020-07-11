import { LocStorage } from "./LocStorage.js";
export class DocumentList {
    constructor() {
        this.locStorage = new LocStorage();
        this.documentList = [];
    }
    GetDocumentList() {
        let locStor = new LocStorage();
        const documentList = locStor.GetDocuments().filter(x => x.match(/Document.*/gm));
        console.table(documentList);
        return documentList;
    }
    Render() {
        const div = document.createElement('div');
        const table = document.createElement('table');
        this.GetDocumentList().forEach((key) => {
            console.log(key);
            const tr = document.createElement('tr');
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(key));
            tr.appendChild(td);
            td = document.createElement('td');
            const editDocument = document.createElement('a');
            editDocument.href = `./edit-document.html?id=${key}`;
            editDocument.innerText = `Edytuj`;
            td.appendChild(editDocument);
            tr.appendChild(td);
            let removeDocument = document.createElement("a");
            removeDocument.addEventListener('click', () => { this.RemoveDocument(key); });
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
        cancelButton.addEventListener('click', () => window.location.assign("/index.html"));
        div.appendChild(cancelButton);
    }
    RemoveDocument(key) {
        localStorage.removeItem(key);
    }
    GetDocumentId(key) {
        return this.locStorage.LoadDocument(key);
    }
}
//# sourceMappingURL=DocumentList.js.map