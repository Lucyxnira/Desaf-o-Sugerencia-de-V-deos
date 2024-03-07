//Mostrar videos
var video = (function() {
    function insertarVideo(url, id) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", url);
        iframe.setAttribute("id", id);
        document.getElementById(id) .appendChild(iframe);
    }

    function mostrarVideo(url, id) {
        insertarVideo(url, id);
    }

    return {
        mostrarVideo: mostrarVideo
    };

})();

//Clase Padre Multimedia
class multimedia {
    constructor(url) {
        let _url = url;

        this.getUrl = function(){
            return _url;
        };

        this.setUrl = function(nuevaUrl){
            _url = nuevaUrl;
        };
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}

//Clase hija Reproductor
class Reproductor extends multimedia {
    constructor(url, id) {
        super(url);
        this.id = id
    }

    playMultimedia() {
        video.mostrarVideo(this.getUrl(), this.id);
    }
    
    setInicio(tiempo) {
        const url = this.getUrl() + `?start=${tiempo}`;
        this.setUrl(url);
    }
}
//Instancias con URL
const reproducirMusica = new Reproductor("https://www.youtube.com/watch?v=sVTy_wmn5SU", "musica");
const reproducirPelicula = new Reproductor("https://www.youtube.com/watch?v=eyDdwMoCZ2A", "peliculas");
const reproducirSerie = new Reproductor("https://www.youtube.com/watch?v=26fBRrCdiWU", "series");

//Invocación de multimedia
reproducirMusica.playMultimedia();
reproducirPelicula.playMultimedia();
reproducirSerie.playMultimedia();

//Tiempo de Inicio modificado
reproducirMusica.setInicio(30);


