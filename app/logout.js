import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    console.log("signup out");
  } catch (error) {
    console.log(error)
  }
});
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import Swal from "sweetalert2";

// Obtén una referencia al formulario de registro
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Obtén los valores del formulario
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  try {
    // Registra al usuario utilizando Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Muestra la ventana emergente de registro exitoso
    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: "¡Tu cuenta ha sido creada con éxito!",
    });

    // Restablece el formulario
    signupForm.reset();
  } catch (error) {
    // Muestra la ventana emergente de error en caso de fallo en el registro
    Swal.fire({
      icon: "error",
      title: "Error de registro",
      text: error.message,
    });
  }
});
