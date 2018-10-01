const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.listen(process.env.PORT || 3000, () => console.log('app started'));

const users = [{
    userName: 'scars',
    password: '1234567',
    name: '姚偉揚',
}, {
    userName: 'charlie',
    password: '7654321',
    name: '查理',
}];

app.post('/login', (req, res) => {
    const {userName, password} = req.body;
    const user = users.find(u => (
        u.userName === userName && u.password === password
    ));
    if (user) {
        res.json({
            success: true,
            name: user.name,
        });
    }
    else {
        res.json({
            success: false,
        });
    }
});

app.get('/exists/:userName', (req, res) => {
    const {userName} = req.params;
    const user = users.find(u => u.userName === userName);
    res.json({
        exists: user !== undefined,
    });
});
