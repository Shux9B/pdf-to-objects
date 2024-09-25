import pdfjs, { PDFDocumentProxy } from 'pdfjs-dist'
import { PDFOperatorList } from 'pdfjs-dist/types/src/display/api';
import runner from './state'
let doc:PDFDocumentProxy;

async function makeObjects(opsList:PDFOperatorList) {
    for (let index = 0;index< opsList.fnArray.length;index++) {
        runner.send({type: '' + opsList.fnArray[index], value: opsList.argsArray[index]})
    }
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