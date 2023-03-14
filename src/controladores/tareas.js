const Tarea = require('./../modelos/tarea');

class tareasController {
    CrearTarea (req, res) {
        const tarea = new Tarea({
            id: req.body.id,
            titulo: req.body.titulo,
            fecha:req.body.fecha || new Date(),
            descripcion: req.body.descripcion,
            status: req.body.status || 'new'
        });
        tarea.save()
        .then(response => {
            console.log("Tarea creada");
            console.log(response);
            res.send({tarea:response});
        })
        .catch(error => {
            res.status(400).send('Error al crear tarea');
        });
    };
    
    ActualizarTarea (req, res) {
        const idT = req.body.id;
        console.log("Hola desde PUT");

        const parametros = {};

        if(req.body.titulo != "" || undefined)
            parametros.titulo = req.body.titulo;
        if(req.body.descripcion != "" || undefined)
            parametros.descripcion = req.body.descripcion;
        if(req.body.status != "" || undefined)
            parametros.status = req.body.status;

        console.log(parametros);
        Tarea.findOne({id: idT})
        .then(response => {
            if(response) {
                Tarea.updateOne({id: idT}, {$set: parametros})
                .then(response => {
                    res.send({tareas: response});
                    console.log("Tarea actualizada con Exito");
                })
                .catch(err => {
                    res.status(400).send('No se pudo actualizar la tarea correctamente');
                })
            }else{
                res.status(404).send('Ninguna tarea con este id fue encontrada');
                console.log("No se encontro este id en ninguna tarea para actualizar");
            }
        })
        .catch(error => {
            res.status(400).send('Error en la peticion');
        })
    };
    
    listarTarea (req, res) {
        Tarea.find({})  //Esta es la promesa que me darA el valor de la tarea. Los filtros estAn vacIos.
            .then(response => { //Lo datos ya no estAn aquI, los pedimos al modelo.
                console.log('Respuesta: ', response);
                res.send({ tareas: response });
            })
            .catch(error => {
                res.status(400).send('Algo saliO mal');  //Esto Angular mA adelante no lo podrA parsear, porque espera un objeto.
            });
    };
    
    verTarea(req, res) {
        const idT = req.params._id;
        Tarea.findOne({id: idT})
            .then(response=>{
                if(response){
                    res.send(response);
                }else{
                    console.log("Ninguna tarea con este id encontrada");
                    res.status(404).send('Ninguna tarea con este id encontrada');
                }
            })
            .catch(error=>{
                res.status(400).send('Error en la peticion');
            })
      };

      eliminarTarea (req, res) {
        const idT= req.params._id;
        Tarea.deleteOne({id: idT})
            .then(response=>{
                if(response.deletedCount>0){
                    res.send({tareas:response});
                }else{
                    res.status(404).send('Id no valido');
                    console.log("Id no valido");
                }
            })
            .catch(error=>{
                res.status(400).send('Error en la peticion');
            })
       };
}

module.exports = new tareasController;

