# React + TypeScript + Vite
# ReviewComp

ReviewComp is a web application that allows users to post public feedback about corporate companies, similar to how discussions happen on Reddit, but focused specifically on companies and products.

Users can submit comments, browse existing feedback, and filter posts by company using hashtags.

---

## Overview

The app provides a simple interface where users can:
- Write feedback about a company
- Tag companies using hashtags (for example `#Netflix`, `#Amazon`)
- View all feedback in a public feed
- Filter feedback by company name

All feedback is displayed publicly, encouraging open discussion and transparency.

---

## Features

- Public feedback posting
- Company tagging using hashtags
- Automatic company extraction from feedback text
- Filter feedback by selected company
- Real-time UI updates
- Persistent data using an external API
- Clean and minimal user interface

---

## Tech Stack

- React
- TypeScript
- Context API
- Custom React Hooks
- Vite
- Fetch API
- CSS

---

## How It Works

1. Users enter feedback text and include a company hashtag.
2. The app extracts the company name from the hashtag.
3. Feedback is instantly added to the public feed.
4. A list of companies is generated from submitted feedback.
5. Users can filter feedback by selecting a company.

---



> The interface shows a public feedback feed with company badges, timestamps, and upvote counts.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/vanshikapariharr/ReviewComp.git
cd ReviewComp

