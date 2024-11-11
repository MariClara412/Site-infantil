document.getElementById('editButton').addEventListener('click', function() {
    // Conteúdo HTML a ser exibido na nova aba
    const newTabContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nova Aba</title>
        </head>
        <body>
            <h1>Conteúdo Editável</h1>
            <textarea id="editor" rows="10" cols="50">Você pode editar este texto.</textarea>
        </body>
        </html>
    `;

    // Abre uma nova aba e insere o conteúdo HTML
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(newTabContent);
    newTab.document.close();
});
