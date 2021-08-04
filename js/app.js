const session = require('express-session');
let has = bcrypt.hashSync('minhaSenha!');

bcrypt.compareSync("minhaSenha", hash);
bcrypt.compareSync("outraSenha", hash);

app.use(cookieParser())
app.use(session({
    secret: 'OdontoCare',
    resave: false,
    saveUninitialized: true,
}));

