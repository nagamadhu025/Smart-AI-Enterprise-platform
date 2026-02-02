import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
// res.setHeader("Authorization, Bearer <Token>")

  const token = process.env.TOKEN
  if (!token) return res.status(401).json({ message: "Access denied: No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecretkey");
    req.user = decoded; // add user info to request
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
