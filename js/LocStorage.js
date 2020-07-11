export class LocStorage {
    SaveDocumentInList(newDocumentId) {
        let docsIds = localStorage.GetItem('DocumentsIds');
        if (docsIds === null) {
            let docsIds = new Array();
            docsIds.push(newDocumentId);
            localStorage.SetItem('DocumentsIds', JSON.stringify(docsIds));
        }
        else {
            let docsIds = JSON.parse(localStorage.getItem('DocumentsIds'));
            docsIds.push(newDocumentId);
            localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
        }
    }
    SaveDocument(doc) {
        const newDocumentId = 'Document-'.concat(Date.now().toString());
        console.log(doc);
        localStorage.setItem(newDocumentId, JSON.stringify(doc));
        this.SaveDocumentInList(newDocumentId);
        return newDocumentId;
    }
    LoadDocument(Id) {
        let documentFromStorage = localStorage.getItem(Id);
        if (documentFromStorage != null) {
            return JSON.parse(documentFromStorage);
        }
    }
    RemoveDocument(Id) {
        localStorage.removeItem(Id);
        let docsList = this.GetDocuments();
        let docIndex = docsList.indexOf(Id);
        docsList.splice(docIndex, 1);
        localStorage.setItem('DocumentsIds', JSON.stringify(docsList));
    }
    GetDocuments() {
        const result = [];
        for (let i = 0; i < localStorage.length; i++) {
            result.push(localStorage.key(i));
        }
        return result;
    }
}
//# sourceMappingURL=LocStorage.js.map