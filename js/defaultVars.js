/**
 * Archivo para mis variables globales!!! se comparten en todos mis archivos
 * este script se importara antes que todos 
 */

// const defaultDylan = {
//     vida:100,
//     fuerza:90,
//     defensa:80
// }
const canvas = document.getElementById("my-canvas");//** 
const ctx = canvas.getContext("2d"); // ** 
// Letras
ctx.font = "50px serif";
// globlas
// * importante

let frames = 0; // *
const gravity = 0.1; //*

//pipes array = [...array,{...},{...},{....}]
const arrPipes = []; // *
let points = 0;

let levelHard = 1; //dificultad

let requestId; //*  parar mi juego o validar que esta corriendo


 const audio = new Audio() // *
 audio.src = "audio/drama.mp3";
 audio.volume = 0.2; 
 audio.loop = true //
