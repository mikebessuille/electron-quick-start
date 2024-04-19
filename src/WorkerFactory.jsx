// src/WorkerFactory.jsx
export default class WorkerFactory {
    constructor(workerFunction)
    {
        console.log('WorkerFactory called');
        const workerCode = workerFunction.toString();
        const workerBlob = new Blob([`(${workerCode})()`]);
        return new Worker(URL.createObjectURL(workerBlob));
    }
  }