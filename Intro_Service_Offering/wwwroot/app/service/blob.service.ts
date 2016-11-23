import {Injectable} from "angular2/core";

@Injectable()
export class BlobService {
    private blobUrl = "https://mscspemsprovoketestblob.blob.core.windows.net/csp";

    constructor() { }

    setValue(val) {
        this.blobUrl = val;
    }

    getValue() {
        return this.blobUrl;
    }
}