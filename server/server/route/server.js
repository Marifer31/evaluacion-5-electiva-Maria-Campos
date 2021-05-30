const express = require('express');
const app = express();

app.get ('/', (req,res) =>{
 res.send('El servidor esta funcionando en el puerto: 5000');
});

app.get('/acercade', (req,res)=> {
 res.send('Informacion referente a la pagina');
});

app.get('/bienvenida', (req,res)=> {
    res.send('¡Bienvenidos!');
   });

app.listen(5000, () => {
 console.log('El servidor esta funcionando en el puerto: 5000');
});
