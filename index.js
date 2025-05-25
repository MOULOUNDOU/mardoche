
//transation des deux boutons rouges et blues
{
function afficherbtn1(){
    document.getElementById("btn2").style.backgroundColor ="red"
    document.getElementById("btn1").style.backgroundColor ="#09b1f9"
   
    
}
function afficherbtn2(){
     document.getElementById("btn1").style.backgroundColor ="red"
     document.getElementById("btn2").style.backgroundColor ="#09b1f9"
      document.getElementById("btn2").style.transition = "2s background"
      document.getElementById("btn1").style.transition = "2s background"
}
}






   


    gsap.from(".element-cascade", {
        x: -100, // Départ hors écran (à gauche)
        opacity: 0,
        duration: 1,
        stagger: 0.3, // Délai entre chaque élément (0.3s)
        ease: "power2.out" // Effet de ralentissement
    });
