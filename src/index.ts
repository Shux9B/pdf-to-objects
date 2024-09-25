import pdfjs, { PDFDocumentProxy } from 'pdfjs-dist'
import { PDFOperatorList } from 'pdfjs-dist/types/src/display/api';

let doc:PDFDocumentProxy;

async function makeObjects(opsList:PDFOperatorList) {
    
}
async function getPageInfo(pageNum:number) {
    const page = await doc.getPage(pageNum)
    const ops = await page.getOperatorList()
    return makeObjects(ops)
}
async function main ({url}) {
    doc = await pdfjs.getDocument(url).promise
    const nums = doc.numPages
    for (let num = 0; num < nums; num++) {
        await getPageInfo(num)
    }
}