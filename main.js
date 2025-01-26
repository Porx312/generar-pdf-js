function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título
    doc.setFontSize(22);
    doc.text("Informe de Ejemplo", 10, 20);

    // Texto
    doc.setFontSize(16);
    doc.text("Este es un ejemplo básico de cómo generar un PDF usando jsPDF.", 10, 40);

    // Guardar el PDF
    doc.save("informe-basico.pdf");
}
async function generatePDFLib() {
    const { PDFDocument, rgb } = PDFLib;

    // Crear un nuevo documento PDF
    const pdfDoc = await PDFDocument.create();

    // Añadir una nueva página al documento
    const page = pdfDoc.addPage([350, 400]);

    // Obtener la fuente
    const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);

    // Dibujar texto en la página
    page.drawText('¡Hola, PDF-LIB!', {
        x: 50,
        y: 350,
        size: 30,
        font: font,
        color: rgb(0, 0.53, 0.71),
    });

    // Dibujar un rectángulo
    page.drawRectangle({
        x: 50,
        y: 75,
        width: 250,
        height: 75,
        borderColor: rgb(1, 0, 0),
        borderWidth: 2,
    });

    // Serializar el documento PDF a bytes (un Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Crear un Blob a partir de los bytes
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Crear un elemento de enlace y activar la descarga
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'pdf-lib-ejemplo.pdf';
    link.click();

    // Limpiar revocando la URL del objeto
    URL.revokeObjectURL(link.href);
}