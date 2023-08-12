export function GET(req, res) {
  console.log(req);
  return res.status(200).json({ message: "ok" });
}
