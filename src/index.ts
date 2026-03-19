import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

// Latest News MCP Server — Tool declarations
// Full implementation runs on Apify Standby: https://apify.com/mrbridge/latest-news-mcp-server

const server = new McpServer({
  name: "latest-news-mcp-server",
  version: "0.1.0",
});

server.tool("get_top_news", "Aggregated top news from multiple sources (HackerNews, Reddit, TechCrunch, Wikinews, GDELT)", {
  limit: z.number().optional().describe("Number of articles to return"),
});

server.tool("search_reddit", "Search Reddit posts and discussions", {
  query: z.string().describe("Search query"),
  subreddit: z.string().optional().describe("Subreddit to search in"),
  sort: z.string().optional().describe("Sort order (relevance, hot, top, new)"),
  limit: z.number().optional().describe("Number of results"),
});

server.tool("get_hackernews", "Hacker News stories (top/new/best/ask/show)", {
  type: z.string().optional().describe("Story type (top, new, best, ask, show)"),
  limit: z.number().optional().describe("Number of stories"),
});

server.tool("get_space_news", "Space & astronomy news + NASA APOD + ISS tracking", {
  limit: z.number().optional().describe("Number of articles"),
});

server.tool("get_crypto_market", "Real-time crypto prices and market data from CoinLore and Coinpaprika", {
  limit: z.number().optional().describe("Number of coins to return"),
});

server.tool("get_finance_signals", "WSB trending tickers, SEC filings, and forex rates", {
  type: z.string().optional().describe("Data type (wsb, sec, forex)"),
});

server.tool("get_earthquakes", "Real-time global earthquake data from USGS", {
  minMagnitude: z.number().optional().describe("Minimum magnitude filter"),
  limit: z.number().optional().describe("Number of results"),
});

server.tool("get_weather", "Current weather and 16-day forecast from Open-Meteo", {
  latitude: z.number().describe("Latitude"),
  longitude: z.number().describe("Longitude"),
  forecastDays: z.number().optional().describe("Number of forecast days (1-16)"),
});

server.tool("get_wikipedia_trending", "Wikipedia featured content & trending pages", {
  limit: z.number().optional().describe("Number of results"),
});

server.tool("get_global_events", "Global media monitoring across 100+ countries via GDELT Project", {
  query: z.string().optional().describe("Search query"),
  country: z.string().optional().describe("Country filter"),
  limit: z.number().optional().describe("Number of results"),
});

server.tool("get_predictions", "Prediction market probabilities from Manifold Markets and Metaculus", {
  query: z.string().optional().describe("Search query"),
  limit: z.number().optional().describe("Number of results"),
});

server.tool("get_trending_searches", "Trending searches on Google & YouTube", {
  source: z.string().optional().describe("Source (google, youtube)"),
});

server.tool("get_health_data", "Global epidemiological data from Disease.sh", {
  country: z.string().optional().describe("Country filter"),
});

server.tool("get_tech_news", "Technology news from AI, software, hardware, cybersecurity, startups", {
  category: z.string().optional().describe("Category filter (ai, software, hardware, cybersecurity, startups)"),
  limit: z.number().optional().describe("Number of articles"),
});
