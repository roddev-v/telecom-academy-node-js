const express = require("express");
const handlebars = require('express-handlebars');
const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

/**
 * /users/userId -> userId is a number
 *
 * User {}
 * 404
 */

function getData() {
  return [
    { id: 1, name: "User A" },
    { id: 2, name: "User B" },
    { id: 3, name: "User C" },
  ];
}

app.get("/users/:userId", function (req, res) {
  const userId = parseInt(req.params.userId);
  if (userId < 0) {
    res.statusCode = 400;
    res.send(``);
    return;
  }

  if(userId === 100) {
    res.statusCode = 400;
    res.send({ message: "You can't access this user!" });
    return;
  }

  const data = getData();
  const user = data.find(function (item) {
    return item.id === userId;
  });

  if (!user) {
    res.status(404);
    res.json({ message: "User not found" });
    return;
  }

  res.json({ data: user });
});

app.get("/html-content", function(req, res) {
  res.render('home');
});

// ASA NU!
// app.get("/users/:userId", function (req, res) {
//   const userId = parseInt(req.params.userId);
//   if (userId > 0) {
//     if(userId === 100) {
//       res.status(404);
//       res.json({ message: "You can't access this user!" });
//     } else {
//       const data = getData();
//       const user = data.find(function (item) {
//         return item.id === userId;
//       });
  
//       if (user) {
//         res.json({ data: user });
//         return;
//       } else {
//         res.status(404);
//         res.json({ message: "User not found!" });
//         return;
//       }
//     }
//   } else {
//     res.status(400);
//     res.json({ message: "Invalid user id" });
//   }
// });

const PORT = 3000;

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
