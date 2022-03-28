let db = require("../database/models");


async function userLoggedMiddleware(req, res, next) {
	let emailInCookie = req.cookies.userEmail;
	console.log(emailInCookie);
	

	if (emailInCookie) {
		let user = await db.User.findOne({
			where: {
				email: emailInCookie,
			},
		});
		if (user) {
			req.session.userLogged = user;
			res.locals.isLogged = true;
			res.locals.userLogged = req.session.userLogged;
		}	
	}
	const guestPaths = ["/users/login", "/users/register", "/products"] // paths que no requieren autenticación;
	if (guestPaths.includes(req.path)) {
		return next();
	}

	if (/\/products\/\d+/.test(req.path)) {return next ();}
	if (/\/navbar\/\d+/.test(req.path)) {return next ();}
	res.locals.isLogged = false;

	
	
	

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
		return next();
	}
	res.redirect("/users/login");
	
}

module.exports = userLoggedMiddleware;