const users = [];

const intialPage =  (req, res) => {
    res.render('signup', { error: req.session.error });
    req.session.error = null;
}

const preLogin = (req, res) => {
    res.render('login', { error: req.session.error });
    req.session.error = null;
}

const homePage = (req, res) => {
    if (req.session.user) {
        const user_det = users.find(user => user.username === req.session.user.username);
        console.log(user_det)
        if (user_det) {
            res.render('home', { user_det });
        } else {
            res.redirect("/login");
        }
    } else {
        res.redirect("/login");
    }
}

const loginPage = (req, res) => {
    const { username, password } = req.body;
    // console.log(req.body);

    if (username && password) {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            req.session.user = user;
            req.session.error = null;
            res.redirect('/home');
        } else {
            req.session.error = "User not found";
            res.redirect("/login");
        }
    } else {
        req.session.error = "Username or password is missing";
        res.redirect("/login");
    }
}

const signUp = (req, res) => {
    const { username, name, email, password } = req.body;
    // console.log(req.body);

    if (username && password) {
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            req.session.error = "Username already exists";
            res.redirect("/");
        } else {
            const newUser = { username, password, email, name };
            users.push(newUser);
            req.session.user = newUser;
            res.redirect('/home');
        }
    } else {
        req.session.error = "Username or password is missing";
        res.redirect("/signup");
    }
}

const logOut = (req,res)=>{
    req.session.user = null;
    res.redirect("/login");
}

const editView = (req,res)=>{
    if (req.session.user) {
        const user_det = users.find(user => user.username === req.session.user.username);
        console.log(user_det)
        if (user_det) {
            res.render('edit', { user_det });
        } else {
            res.redirect("/login");
        }
    } else {
        res.redirect("/login");
    }
}

const edit_data  = (req, res) => {
    const user_data = data.find(user => user.username === req.session.user.username);
    if(user_data == -1){
        req.session.add = "user not found"
    }
    else{
        req.body.username = req.session.user.username
        data[user_data] = req.body
        req.session.user = req.body;
        res.redirect('/home');
    }
}
module.exports = {
    intialPage,
    preLogin,
    homePage,
    loginPage,
    signUp,
    logOut,
    editView,
    edit_data,
}