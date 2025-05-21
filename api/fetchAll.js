import g2b from './g2b.js';
import kepco from './kepco.js';

export default async function handler(req, res) {
  const [g2bData, kepcoData] = await Promise.all([g2b(), kepco()]);
  res.status(200).json([...g2bData, ...kepcoData]);
}