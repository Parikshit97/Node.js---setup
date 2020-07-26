module.exports.homecontroller = function(req, res){
    return res.render('../views/home.ejs', {
        title: 'Home',
    })
}