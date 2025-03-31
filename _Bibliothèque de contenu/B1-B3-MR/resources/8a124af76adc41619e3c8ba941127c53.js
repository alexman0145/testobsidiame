// méthode qui teste la quantité demandée
// si elle est inférieure à 10 , on affiche "Stay fit you will"
// si elle est supérieure ou égale à 10 , on affiche "pay attention to your diet you must"



function checkQuantity()    {
       

    //document.querySelector("#monID").innerHTML = "Coucou"
    //ce code ppermet de changer la valeur de l'élément monID
}



// version 2 
// optimisée si le temps le permet 

function changeOpacity(selector, opacity, width) {


    //pour chaque image de votre page vous devez faire cela 
    // Le code est à copier coller dans la fonction 

    // image => {
            
    //     image.style.opacity = opacity;
    //     image.style.width = width;
    // }

}


// méthode qui permet d'ajouter des écouteurs 
// aux événements => click
function addEvents() {

    //ajouter cet événement sur le bouton valider
    //.addEventListener(
    //     'click',
    //     checkQuantity

    // )


    //commenter le code
    document.querySelectorAll("#unGame .imageAccueil img").forEach(
        image =>
        image.addEventListener (
                   'click',
                    () => 
                     {
                        changeOpacity("#divGame img", 0.5, "10%");
                        changeOpacity("#unGame  ."+image.id, 1, "10%");
                     }  
    )
    )

}

// let's get started
