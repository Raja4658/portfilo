import { NextRequest, NextResponse } from "next/server";
import { aiSystemPrompt } from "@/lib/data";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "Message required" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // Fallback responses when no API key
    const lowerMsg = message.toLowerCase();
    let reply = "";

    if (lowerMsg.includes("who") || lowerMsg.includes("raja") || lowerMsg.includes("about")) {
      reply = "Raja M is an AI Engineer and Full Stack Developer from Coimbatore, India. He specializes in building intelligent AI-powered applications using Next.js, React, Python, Firebase, and Gemini AI. He's currently studying B.Tech in AI & Data Science at Suguna College of Engineering (2023–2027).";
    } else if (lowerMsg.includes("skill") || lowerMsg.includes("tech") || lowerMsg.includes("stack")) {
      reply = "Raja's tech stack includes: Programming (Python, JavaScript, TypeScript, Java), Frontend (React, Next.js, Tailwind CSS, Framer Motion), Backend (Node.js, Firebase, PostgreSQL, Prisma), AI/ML (Machine Learning, OpenAI API, Gemini API, Prompt Engineering, Computer Vision), and DevOps (Git, GitHub, Vercel, Docker).";
    } else if (lowerMsg.includes("project")) {
      reply = "Raja has built 4+ production AI projects: 1) AI-Powered Smart College Management System (Next.js + ML performance prediction), 2) AI Business Ecosystem Platform (multi-agent AI for business intelligence), 3) HealthWorker Bridge (healthcare coordination platform), 4) StreamVault OTT Platform (Netflix-style streaming app).";
    } else if (lowerMsg.includes("contact") || lowerMsg.includes("hire") || lowerMsg.includes("reach")) {
      reply = "You can reach Raja at: Email: rajam4658m@gmail.com | Phone: +91 8610830037 | GitHub: github.com/Raja4658 | LinkedIn: linkedin.com/in/raja-m-0129622a9. He's available for AI engineering roles and collaborations!";
    } else if (lowerMsg.includes("education") || lowerMsg.includes("college") || lowerMsg.includes("study")) {
      reply = "Raja is pursuing B.Tech in Artificial Intelligence and Data Science at Suguna College of Engineering, Coimbatore (2023–2027). He started programming in 2024 and rapidly progressed to building full AI products.";
    } else if (lowerMsg.includes("experience") || lowerMsg.includes("work")) {
      reply = "Raja has built 10+ projects, has 500+ GitHub commits, and has shipped 4 production-quality AI applications. He's self-taught in Full Stack Development and AI Engineering, with expertise spanning frontend, backend, and AI/ML domains.";
    } else {
      reply = "Raja M is an AI Engineer and Full Stack Developer passionate about building intelligent software. He's skilled in Next.js, React, Python, Machine Learning, OpenAI, and Gemini AI. Would you like to know about his projects, skills, education, or how to contact him?";
    }

    return NextResponse.json({ reply });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: aiSystemPrompt }] },
          contents: [{ role: "user", parts: [{ text: message }] }],
          generationConfig: { maxOutputTokens: 300, temperature: 0.7 },
        }),
      }
    );

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that. Please try again!";
    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ reply: "Raja M is an AI Engineer & Full Stack Developer from Coimbatore, India. He builds intelligent software with Next.js, React, Python, Firebase, and Gemini AI. Contact: rajam4658m@gmail.com" });
  }
}
