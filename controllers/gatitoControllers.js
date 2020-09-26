const Gatito = require('../models/gatitos');

exports.getGatitos = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Ruta aun no implementada GET GatitoS',
  });
};

exports.getGatito = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Ruta aun no implementada GET Gatito',
  });
};

// exports.postGatito = (req, res) => {
//   const gatito = new Gatito(req.body)
  
//   gatito.save()
//   .then(doc => {
//     return res.status(200).json({
//     status: 'success',
//     data: doc  
//   })
// })
//   .catch(err => {
//     return res.status(500).json({
//       status: 'fail',
//       err: err
//     })
//   })
// };

exports.postGatito = async (req, res) => {
  try {
    // una manera de hacerlo:
    // const gatito = new Gatito(req.body)
    // await gatito.save()

    // otra, mas breve:
    const gatito = await Gatito.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        gatito
      }
    })

  } catch(err) {
    res.status(400).json({
      status: 'fail',
      err: err
    })
  }
};


  

exports.deleteGatito = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Ruta aun no implementada DELETE Gatito',
  });
};

exports.putGatito = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Ruta aun no implementada PUT Gatito',
  });
};
