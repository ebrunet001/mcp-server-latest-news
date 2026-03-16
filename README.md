# Latest News MCP Server

**Real-time global news, crypto markets, weather, earthquakes & more for Claude Desktop, Claude Code & MCP-compatible AI assistants.**

[![Apify Actor](https://img.shields.io/badge/Apify-Actor-00C7B7?style=for-the-badge&logo=apify&logoColor=white)](https://apify.com/mrbridge/latest-news-mcp-server?fpr=mrbridge)
[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-5A67D8?style=for-the-badge)](https://modelcontextprotocol.io)
[![Tools](https://img.shields.io/badge/Tools-14-blue?style=flat-square)](#available-tools)
[![APIs](https://img.shields.io/badge/APIs-27-green?style=flat-square)](#available-tools)

## What does it do?

Latest News MCP Server aggregates **27 free APIs** into **14 powerful tools** — giving AI assistants access to real-time news, crypto markets, weather forecasts, earthquake data, prediction markets, trending searches, and more.

**Zero API keys required.** Connect and start asking.

Sources include Reuters, AP, BBC, CNN, Al Jazeera, The New York Times, The Guardian, Bloomberg, Hacker News, Reddit, TechCrunch, and thousands more via GDELT.

## Available Tools

| Tool | Description | Data Sources |
|------|-------------|--------------|
| `get_top_news` | Aggregated top news from multiple sources | HackerNews, Reddit, TechCrunch, Wikinews, GDELT |
| `search_reddit` | Search Reddit posts and discussions | Reddit Public JSON API |
| `get_hackernews` | Hacker News stories (top/new/best/ask/show) | HN Firebase API |
| `get_space_news` | Space & astronomy news + NASA APOD + ISS | Spaceflight News, NASA, Open Notify |
| `get_crypto_market` | Real-time crypto prices and market data | CoinLore, Coinpaprika |
| `get_finance_signals` | WSB trending tickers, SEC filings, forex | Tradestie, SEC EDGAR, ExchangeRate |
| `get_earthquakes` | Real-time global earthquake data | USGS |
| `get_weather` | Current weather and 16-day forecast | Open-Meteo |
| `get_wikipedia_trending` | Wikipedia featured content & trending pages | Wikipedia REST, Wikimedia Pageviews |
| `get_global_events` | Global media monitoring across 100+ countries | GDELT Project (65+ languages) |
| `get_predictions` | Prediction market probabilities | Manifold Markets, Metaculus |
| `get_trending_searches` | Trending searches on Google & YouTube | Google Autocomplete, YouTube |
| `get_health_data` | Global epidemiological data | Disease.sh |
| `get_tech_news` | Technology news (AI, software, hardware, cyber, startups) | TechCrunch, HackerNews, Google News |

## Key Features

- **27 free APIs** aggregated — zero API keys needed
- **Real-time data** with intelligent multi-tier caching (60s–900s TTL)
- **Global coverage** — news from 100+ countries
- **LLM-optimized** — plain text responses minimize token usage
- **Pay-per-event** — only pay for what you use ($0.008–$0.015/call)

## Quick Start

1. Get your [Apify API Token](https://console.apify.com/settings/integrations)
2. Add a custom MCP connector:

```
https://mrbridge--latest-news-mcp-server.apify.actor/mcp?token=YOUR_APIFY_TOKEN
```

3. Ask Claude: *"What's happening in the world right now?"*

## Pricing

Pay-per-event on Apify:
- **Per call**: $0.008–$0.015
- **Free tier**: $5/month Apify credits (~600 queries)

## Links

- **Apify Store**: [Latest News MCP Server](https://apify.com/mrbridge/latest-news-mcp-server?fpr=mrbridge)
- **Full documentation**: See the Apify Store page for detailed README, output examples, and troubleshooting

## License

MIT
