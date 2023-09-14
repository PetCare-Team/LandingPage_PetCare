Feature: Publicar un servicio 
    Given el adiestrador quiere publicar los servicios que ofrece para lograr aumentar su clientela
    
    Scenario: El usuario logra publicar su servicio con exito.
    Given el usuario esta registrado e inicio sesion
    When seleccione el boton "publicar servicio"
    Then se le mostrara un formulario 
    And debera llenarlo para publicar el servicio.

      Example:
      | usuario | publicar servicio | formulario |

    Scenario: El usuario no logra publicar su servicio con éxito
    Given el usuraio esta registrado e inicio sesion
    When seleccione el boton "Publicar servicio"
    And ocurra un problema de conexion o caida del servidor
    Then no se mostrara el formulario
    And se le mostrara el error
    And se volvera a cargar la pagina.

      Example:
      | usuario | publicar servicio | error |

    Scenario: El usuario no entiende cómo publicar su servicio
    Given el usuario esta registrado e inicio sesion 
    When seleccione el boton "Publicar servicio"
    And no sepa como completar el formulario
    Then nosotros le brindaremos ayuda con ejemplos de como deberia completarlo

      Example:
      | usuario | publicar servicio | Examples |
    
    
Feature: Agregar metodo de pago
    Given el adiestrador quiere agregar un metodo de cobro para retirar el dinero que gane gracias a la plataforma
    
    Scenario: El usuario agrega un metodo de cobro exitosamente
    Given que el adiestrador esta registrado e inicio sesion
    When seleccione "Agregar metodo"
    Then se mostrara un apartado con los metodos de pago que puede agregar
    
      Example:
      | usuario Adiestrador | agregar metodo de cobro|
      
    Scenario: El usuario cambia el metodo de cobro
    Given que el adiestrador esta registrado e inicio sesion
    Cuando seleccion "Agregar metodo" 
    And posea un metodo de pago
    Then se mostrara un boton de "Cambiar metodo" dentro del apartado de metodos de pago
    
      Example:
      | usuario Adiestrador | agregar metodo de pago | cambiar metodo |
    
    
Feature:  Agregar metodo de pago
    Given el dueño de mascota quiere agregar un metodo de pago para adquirir servicios para su mascota
    
    Scenario: El usuario agraga un metodo de pago exitosamente
    Given que el dueño de mascota esta registrado e inicio sesion
    When seleccion "Seleccionar metodo"
    Then se mostrar un apartado con los metodos de pago que puede agregar
    
      Example: 
      | usuario Dueño de mascota | seleccionar metodo |
    
    Scenario: El usuario cambia el metodo de pago
    Given que el dueño de mascota esta registrado e inicio sesion 
    When seleccion "Seleccionar metodo" 
    And posea uno o varios metodos de pago
    Then se mostrara un boton de "Cambiar metodo" dentro del apartado de metodos de pago
    
      Example: 
      | usuario Dueño de mascota | seleccionar metodo | Cambiar metodo |
    
    
Feature: Buscar un servicio
  Given el dueño de mascota quiere buscar una publicacion para poder visualizar los servicios
  
  Scenario: El usuario busca un servicio de acuerdo con el tipo de servicio o el nombre del servicio
  Given que el usuario esta regstrado e inicio sesion 
  And se encuentre en el menu principal
  When escriba algo en el buscador
  Then se mostaran las coincidencias de acuerdo con lo que escribio.
  
      Example:
      | usuario Dueño de mascota | Buscador | Introduce lo que desee buscar |
  
  Scenario: El usuario busca una publicacion que haya visitado anteriormente.
  Given que el usuario esta registrado e inicio sesion 
  And se encuentre en el menu principal
  When haga click en la barra de busqueda
  And seleccion alguna busqueda reciente
  Then se le rediccionara a dicha publicacion 
  
      Example:
      | usuario Dueño de mascota | Buscador | Opcion visitada |
  
  
Feature: Visualizar comentarios de un servicio
  Given el dueño de mascota o adiestrador quiero visualizar los cometarios de un servicio para conocer la experiencia de otros usuarios.
  
  Scenario: El usuario visualiza correctamente los comentarios
  Given que el usuario se encuentra en un servicio
  When selecciona el boton de comentarios
  Then se mostrara un listado de comentarios que se realizaron en dicho servicio
  
    Example:
    | Usuario | Comentarios | Visualiza |
  
  Scenario: No existen comentarios
  Given que el usuario se encuentra en un servicio
  When selecciona el boton de comnetarios
  Then se mostrara un cuadro de mensajes donde dice "Aun no se han realizado comentarios a este servicio".
  
    Example:
    | Usuario | Comentarios | Aun no se han realizado comentarios a este servicio |  
  
  
Feature: Visualizar calificacion de un servicio
   Given usuario quiere visualizar la calificacion de un servicio para conocer opinion de otro usuarios
   
   Scenario: El usuario visualiza correctamente la calificacion
   Given que el usuario se encuentra en un servicio
   And el servicio posea calificaciones
   Then se mostrara un resumen de las calificaciones en la parte superior
   
      Example:
      | Usuario | Calificaiones | Visualiza |    
    
    Scenario: El usuario no logra visualizar la calificacion
    Given que el usuario se encuentra en un servicio
    And el servicio no posea calificaciones
    Then se mostraran estrellas blancas 
    y un mensaje de "El servicio aun no recibio calificaciones".

      Example:
      | Usuario | Calificaiones | Visualiza mnesaje |


Feature: Consultar perfil de usuario
    Given que dueño de mascota/adiestrador quiere el perfil de un usuario para obtener informacion sobre este.
    
    Scenario: El usuariologra consultar el perfil
    Given que el usuario esta en el menu principal 
    When ingrese el nombre exacro de un usuario
    And seleccione "buscar"
    Then se mostrara el perfil que coincida con lo ingresado.
    
      Example:
      | Usuario | Perfil | Visualiza |        
    
    Scenario: El usuario consultado no existe
    Given que el usuario esta en el menu principal
    When ingrese el nombre exacto de un usuario
    Y seleccione "buscar"
    Then se mostrara un mensaje donde dira "No se logro encontrar el perfil ingresado".

      Example:
      | Usuario | Calificaiones | Visualiza mensaje |
    
   
    
Feature: Comentar un servicio
  Given el dueño de la mascota quiere comentar servicios para poder dar a conocer su experiencia.
  
  Scenario: El usuario realiza un comnetario
  Given que el usuario se encuentra en un servicio 
  When da click en el boton "Comentar"
  And presiona el boton de "Publicar comentario"
  Then se mostrara un cuadro para realizar su comentario.
  
      Example:
      | Usuario | Comentar | Publicar Comentario |    
    
  Scenario: El usuario no puede realizar el comentario
  Given que el usuario se encuentra en un servicio
  When da click en el "Comentar"
  And presiona el boton de "Publicar Comentario"
  Then se mostrara un cuadro para realizar su comentario.
  
      Example:
      | Usuario | Comentar | Publicar Comentario | No se publica el comentario |
    
    
Feature: Calificar un servicio
  Given el dueño de mascota quiere calificar servicios para poder dar a conocer su experiencia.
  
  Scenario: El usuario realiza una calificacion 
  Given que el usuario se encuentra en un servicio 
  When haga click en el boton de calificar
  Then se mostraran cinci estrellas en blanco para elegir la calificacion.
  
        Example:
        | Usuario | Calificar | Visualiza |
    
  Scenario: El usuario elimina su calificacion
  Given que el usuario se encuentra en un servicio 
  When haga click en el boton calificar 
  And posea una calificacion ya realizada
  Then se mostrara un boton de "Eliminar calificacion"
  And cuando haga click en dicho boton, se mostrara un cuadro que diga "Se elimino la calificacion correctamente".
  
        Example:
        | Usuario | Eliminar calificacion |
    
    
Feature: Visualizar preguntas frecuentes
  Given el usuario quiere tener una seccion de preguntas frecuentes para lograr solucionar mis dudas con el funcionamiento de la aplicacion.
  
    Scenario: El usuario tiene alguna duda
    Given que el usuario esta en el menu principal
    When seleccione la opcion "Preguntas frecuentes"
    Then podra visualizar dudas que han sido frecuentes en otros usuarios.
    And estas tendran solucion a dicha duda o problematica.
    
        Example:
        | Usuario | Preguntas frecuentes |
    
    
Feature: Consultar con el soporte tecnico
  Given el usuario quiere consultar con el soporte tecnico una duda que no se presenta en preguntas frecuentes.
  
    Scenario: El usuario no entiende la solucion dad en las preguntas frecuentes
    Given que el usuario esta en el menu principal
    When termine de recorrer la seccion podra ver a su costado un icono de un bot
    Then al pasar el cursor, este mostrara un cuadro preguntando "¿Necesitas más ayuda?”
    And al hacerle click este de redigira a un chat con soporte.
    
        Example:
        | Usuario | Preguntas frecuentes | Chat |
    
    
Feature: Coordinar con el dueño de mascota    
  Given el veterinario quiere poder comunicarse con la persona que requiere de sus servicios para tener mas informacion de la amscota.
  
    Scenario: El usuario quiere comunicarse con el futuro cliente
    Give que el interesado completo el formulario tambien con sus datos personales
    When seleccione alguna de los casilleros con dichos datos
    Then se mostrara las diferentes opciones de contacto (numero o correo)
    
        Example:
        | Usuario | Contacto | 
    
    Scenario: El usuario no logra comunicarse con el interesado
    Given que existe un sistema de notificaciones
    When seleccion " Ayuda para contactar"
    Then nosotros le enviaremos al interesado a su dicho correo enformando de que esta intersado en contactarse con el.
    
        Example:
        | Usuario | Ayuda para contactar | Contacto
        
    
Features: Agregar mascota a la cuenta
  Given el dueño de mascota queire registrar sus mascotas en la aplicacion
  
    Scenario: El usuario agrega su mascota exitosamente
    Given que el usuario esta en el menu
    When despliegue el menu de usuario
    And seleccione Mis mascotas
    And presiona +
    Then rellena el formulario 
    And al presionar Guardar aparece "Mascota agregada exitosamente"
    
        Example:
        | Usuario | Mis mascotas | + |
        
    Scenario: el usuario no logra agregar su mascota
    Given que el usuario esta en el menu 
    When despliegue el menu de usuario
    And seleccione Mis mascotas
    And presiona +
    Then no rellena el formulario
    And al presionar Guardar aparece "Informacion incorrecta"
    
        Example:
       | Usuario | Mis mascotas | + |
