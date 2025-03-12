export const fetchNews = async (startDate) => {
    const API_KEY = "a8a03c38430945e9a7ab0ede1ad208e5";
    const BASE_URL = "https://newsapi.org/v2/everything";
    
    const url = `${BASE_URL}?q=(Google OR Amazon) AND Cloud&from=${startDate}T00:00:00&to=${startDate}T23:59:59&sortBy=relevancy&pageSize=5&apiKey=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Ensure the response contains articles
        return data.articles || [];
    } catch (error) {
        console.error("ニュースを取得できませんでした", error);
        return [];
    }
};
