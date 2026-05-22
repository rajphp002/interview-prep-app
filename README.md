# Tech Prep Hub

An interactive technical interview preparation platform designed to help developers systematically review engineering concepts, master framework behaviors, and confidently approach behavioral interviews.

---

## 🚀 Features

- **Comprehensive Question Bank:** Covers 7 distinct technology tracks with 45 curated, high-quality questions and answers per track:
  - **Java:** Object-oriented programming, concurrency, memory management, and modern features.
  - **Node.js:** Event Loop phases, stream pipelines, worker threads, and server-side practices.
  - **React:** Virtual DOM mechanics, custom hooks, state batching, and performance optimization.
  - **Next.js:** App Router layouts, rendering strategies (SSR/SSG/ISR), Server Actions, and routing patterns.
  - **Angular:** Standalone components, RxJS observables, dependency injection, and change detection.
  - **PHP:** Modern OOP, attributes, sessions/cookies, and server architectures (PHP-FPM).
  - **AWS:** Core infrastructure (VPC, IAM), serverless architectures, and relational/NoSQL databases.
- **Progressive Difficulty:** Questions are explicitly tagged as **Beginner**, **Intermediate**, or **Advanced** to support structured, step-by-step learning.
- **Behavioral (HR) Preparation:** Common behavioral questions paired with structured response frameworks (such as **STAR** and **Present-Past-Future**).
- **Pro Tips:** Actionable guidance on communication patterns, thinking out loud during coding rounds, and asking the right questions at the end of an interview.

---

## 🛠️ Tech Stack & Design

This project uses a modular design layout optimized for modern web frontends:
- **Styling:** Styled with dynamic Tailwind CSS color gradients (e.g., `from-amber-600 to-orange-500`).
- **Icons:** Integrated with FontAwesome icons for clean visual cues.
- **Data-Driven Architecture:** Powered entirely by a customizable, centralized `interviewData` schema in JavaScript.

---

## 📦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/tech-prep-hub.git
cd tech-prep-hub
```

### 2. Project Structure
- `interviewData.js` (contains the raw question datasets, behavioral templates, and preparation tips)
- `index.html` (the user interface template)
- `app.js` (handles state, search filtering, and card rendering)

### 3. Running the App
Since the application relies on lightweight client-side rendering, you can open `index.html` directly in your browser or run it using a local development server (such as VS Code Live Server or python's simple HTTP server):
```bash
python3 -m http.server 8000
```

---

## 📝 Customizing the Questions

You can easily expand or modify the questions by editing the `interviewData` object inside `interviewData.js`. Simply append a new question block matching this format inside the desired technology array:

```javascript
{
    id: "tech-qX",
    question: "Your custom question here?",
    answer: "Your structured answer with standard <code>HTML tags</code> for formatting.",
    level: "Intermediate" // "Beginner" | "Intermediate" | "Advanced"
}
```# interview-prep-app
