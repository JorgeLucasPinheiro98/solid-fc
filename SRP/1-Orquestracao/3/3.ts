class FileUploadServices {
  constructor(
    private compressFile: compressFile,
    private sendFile: sendFile,
  ) {

  }
  uploadFile(file: Buffer, destination: string) {
    // Compressão do arquivo
    const compressedFile = this.compressFile.execute(file);

    // Envio do arquivo
    this.sendFile.execute(destination);
  }
}

class compressFile{
  execute(file: Buffer): Buffer {
    console.log('comprimindo arquivo...');
    return file.slice(0, file.length / 2);
  }
}

class sendFile{
  execute(destination: string) {
    console.log(`Enviando arquivo para ${destination}`);
  }
}