const controller = {};

controller.list = (req, res) => {
   req.getConnection((err, conn) => {
      conn.query('select * from customer', (err, customers) => {
         if (err) {
            res.json(err);
         }
         res.render('customers', {
            data: customers
         });
      });
   });
};

controller.save = (req, res) => {
   const data = req.body;
   req.getConnection((err, conn) => {
      if (data.name!=""){
         conn.query('INSERT INTO customer set ?', [data],
         (err, customer) => {
            res.redirect('/');
         });
      } else { 
         console.log('Error');
         res.redirect('/');
       }
   });
}

controller.delete = (req, res) => {
   const { id } = req.params;
   req.getConnection((err, conn) => {
      conn.query('DELETE FROM customer WHERE id = ?', [id], 
      (err, rows) => {
         res.redirect('/');
      })
   });
}


module.exports = controller;