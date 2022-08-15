class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }


  //Crear  Funcion que  oculte los elementos  del form 
  handleElements() {    
    //referirse al   el mismo titulo del form con posicion Esquina Superior derecha
    //referirse al   el mismo titulo del form formato css "gameTitleAfterEffect"
  }

  play() {
    //manda allamar  la  funcion  creada que oculta los elementos del Form

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      //

      //índice de la matriz
      var index = 0;
      for (var plr in allPlayers) {
        //agrega 1 al índice para cada bucle
        index = index + 1;

        //utilizar datos de la base de datos para mostrar los autos en las direcciones x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);

          // Cambiar la posición de la cámara en la dirección y
          camera.position.x = cars[index - 1].position.x;
          camera.position.y = cars[index - 1].position.y;
        }
      }
      
      //llama funcion  abstracta  para el movimiento del auto
     // this.handlePlayerControls();

      drawSprites();
    }
  }


  // creacion de Funcion  para  para el movimiento del auto  y anexar  funcion que actualiza  datos player (player.update();)
 
}
