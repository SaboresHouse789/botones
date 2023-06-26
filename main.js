// Código existente...

// Después de que se haya completado el registro exitosamente
// Puedes agregar esto dentro de la función donde se realiza el registro
// o en el lugar adecuado según tu implementación.

// Aquí se muestra un ejemplo básico usando Firebase Auth
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Registro exitoso
    // Realizar acciones adicionales si es necesario

    // Recargar la página después de 1 segundo
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  })
  .catch((error) => {
    // Manejar errores de registro
    console.log(error);
  });

// Código existente...

let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { setupPosts } from "./app/postList.js";

import './app/signupForm.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'
import './app/logout.js'
import './app/postList.js'

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error)
    }
  } else {
    setupPosts([]);
    loginCheck(user);
  }
});
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();

sgMail.setApiKey(functions.config().sendgrid.api_key);

exports.sendEmail = functions.https.onRequest((req, res) => {
  const { email, name, phone, message } = req.body;

  const msg = {
    to: " ",
    from: "saboreshouse789@gmail.com",
    subject: "Nuevo mensaje de contacto",
    text: `
      Nombre: ${name}
      Email: ${email}
      Teléfono: ${phone}
      
      ${message}
    `,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.send("¡Mensaje enviado con éxito!");
    })
    .catch((error) => {
      console.error("Error al enviar el mensaje:", error);
      res.status(500).send("Ha ocurrido un error al enviar el mensaje.");
    });
});
