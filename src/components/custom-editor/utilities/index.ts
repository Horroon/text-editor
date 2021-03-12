function removeBold(html){
        html = html.replace(/<b>/g, "");
        html = html.replace(/<\/b>/g, "");
        return html;
}

function removeItalic(html){
        html = html.replace(/<i>/g, "");
        html = html.replace(/<\/i>/g, "");
        return html;
    }

function removeLi(html){
        html = html.replace(/<li>/g, "");
        html = html.replace(/<\/li>/g, "");
        return html;
}

function removeSpan(html){
        html = html.replace(/<span>/g, "");
        html = html.replace(/<\/span>/g, "");
        return html;
}

export {removeBold,removeItalic,removeLi,removeSpan}