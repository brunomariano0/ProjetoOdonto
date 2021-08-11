const expression = require('expression');
const ProdutoController = require('../controllers/ProdutoController');

const router = express.Router();

router.get('/criar',ProdutoController.criarProduto);
router.get('/deletar', (req, res)=>res.send("Deletando um produto"));

module.exports = router;