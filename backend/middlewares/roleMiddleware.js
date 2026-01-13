export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: 'Admins only' });
  }

  next();
}

// export const adminOnly = (req, res, next) => {
//   console.log("REQ.USER:", req.user);

//   if (!req.user || req.user.role !== "admin") {
//     return res.status(403).json({ message: "Admins only" });
//   }
//   next();
// };