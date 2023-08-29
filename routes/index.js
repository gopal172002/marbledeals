const router = require('express').Router();
const User = require('../models/userModel')
router.get('/',(req,res)=>{
    res.render('websit',{  
       title:'Makrana Marbles Manufacturer-Best Prices, Use Application'
    });
});
router.get('/about',(req,res)=>{
   res.render('about',{   
       title:'About Marbles-Importance,Quality and Our Contacts'
    });
});
router.get('/albeta',(req,res)=>{
   res.render('albeta',{   
       title:'Albeta Marble'
    });
});
router.get("/contact", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.render("contact1", {
      title: "Contact to Marble Store",
    });
    return;
  });
  
router.get('/cutsize',(req,res)=>{
   res.render('cutsize',{   
       title:'CutSize Marble'
    });
});
router.get('/dungari',(req,res)=>{
   res.render('dungari',{   
       title:'Dungari Marble-More Old more Shine'
    });
});
router.get('/getAquote',(req,res)=>{
   res.render('getAquote',{   
       title:'getAquote Makrana Marbles'
    });
});
router.get('/kumari',(req,res)=>{
   res.render('kumari',{   
       title:'Kumari Marble-Constant shine for life time'
    });
});
router.get('/services',(req,res)=>{
   res.render('services1',{   
       title:'Makrana Marble Services'
    });
});
router.get('/specialdesign',(req,res)=>{
   res.render('specialdesign',{   
       title:'SpecialDesign Marble-Naturally special designs printings'
    });
});

router.post("/signup", async (req, res) => {
    try {
      console.log(req.body);
      var name = req.body.name;
      var email = req.body.email;
      var mobileno = req.body.mobileno;
      var message = req.body.message;
  
      var data = {
        name: name,
        email: email,
        mobileno: mobileno,
        message: message,
      };
  
      const user = await User.create(data);
      console.log(user);
      res.redirect('contact');
    } catch (error) {
      console.log(error);
    }
  }); 

module.exports = router;