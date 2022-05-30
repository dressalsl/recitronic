const router = require("express").Router();
const CollectionPointService = require("../services/collectionPointService");
var collectionPointService = new CollectionPointService();

router.post("/create", async (req, res) => {
  const { email, name, rua, bairro, numero, nomeEmpresa } = req.body;

  var teste = await collectionPointService.getByEmail(email);
  if (teste) {
    res.status(422).json({ error: "Email já cadastrado." });
    return;
  }
  const collectionPoint = {
    name,
    email,
    active: true,
    rua,
    bairro,
    numero,
    nomeEmpresa,
  };

  if (!email || !name) {
    res.status(422).json({ error: "Nome e email obrigatório " });
    return;
  }
  try {
    var result = await collectionPointService.create(collectionPoint);
    res.status(201).json({ result: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    var collectionPoints = await collectionPointService.getAllActive();
    res.status(200).json({ collectionPoints });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/getById/:id", async (req, res) => {
  var id = req.params["id"];
  console.log(req);

  if (!id) {
    res.status(422).json({ error: "Id não informado" });

    return;
  }

  try {
    var result = await collectionPointService.getById(id);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/delete/:id", async (req, res) => {
  var id = req.params["id"];
  if (!id) {
    res.status(422).json({ error: "Id não informado" });
    return;
  }

  var collectionPoint = await collectionPointService.getById(id);
  if (!collectionPoint) {
    res.status(422).json({ error: "Ponto de coleta não encontrado." });
    return;
  }

  try {
    var result = await collectionPointService.delete(id);
    if (result) {
      res.status(200).json({ result: "Ponto de coleta deletado" });
    } else {
      res.status(500).json({ error: error });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/getByDistrict/:district", async function (request, response) {
  const district = request.params.district;

  const collectionPoint = await collectionPointService.getByDistrict(district);

  response.json({ pontos: collectionPoint });
});

module.exports = router;
