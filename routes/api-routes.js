module.exports = function (router) {

  router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  router.post("/new/ride", function (req, res) {
    //TODO: add logic to add new ride request
    res.redirect("/results");
  });

  router.post("/new/drive", function (req, res) {
    //TODO: add logic to add new drive service
    res.redirect("/results");
  });

}