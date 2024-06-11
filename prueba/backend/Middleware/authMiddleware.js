const authMiddleware = (req, res, next) => {
    if (req.session.policiaId) {
      next();
    } else {
      res.status(401).json({ message: 'No autorizado' });
    }
  };
  
  module.exports = authMiddleware;
  