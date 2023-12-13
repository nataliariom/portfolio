console.log(document.getElementById('titulo'));
let elementoHTMLTitulo = document.getElementById('titulo');

let elementoDeTypewriter = new Typewriter(elementoHTMLTitulo, {
    loop: true
});

elementoDeTypewriter.typeString('Natalia Río')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Front-End Developer Jr.')
    .pauseFor(2500)
    .deleteAll()
    .start();


//Formspree 
        function enviarFormulario() {
        
            document.getElementById("contactForm").submit();
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

       
    }