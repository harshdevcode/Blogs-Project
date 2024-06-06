export default async function handler(req, res) {
  const { term, start = "0" } = req.query;

  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.SEARCH_CONTEXT_KEY}&q=${term}&start=${start}`
    );
    const data = await response.json();
    res.status(200).json({data});
    if (!response || !response.error) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (response.error.code === 429) {
      res.status(429).json({ error: "Quota exceeded. Please try again later." });
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch search results" });
  }
}
