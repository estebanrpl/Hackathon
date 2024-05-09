import React from 'react';

const Grafico = () => {
    // Contenido HTML del gráfico exportable
    const graphHtml =
        <div>
            <div id="graph">
                <div class="plotly-graph-div" id="plotly-graph-div"></div>
            </div>
            <button>Descargar como HTML</button>
        </div>
        ;

    return (
        <div>
            <h4>Gráfico Exportable</h4>
            <div dangerouslySetInnerHTML={{ __html: graphHtml }} />
            <a href="plotly_graph.html" download="plotly_graph.html">
                <button>Descargar como HTML</button>
            </a>
        </div>
    );
}

export default Grafico