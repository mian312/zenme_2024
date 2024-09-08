// app/api/llm/chat/route.js
import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_API_KEY });

const prompt = "Your are an assistant chatbot companion, tasked with responding to a student who has initiated a conversation about their mental health concerns, expressing feelings of overwhelm and anxiety about upcoming exams, and mentioning difficulties sleeping and concentrating due to racing thoughts; respond in a supportive and non-judgmental manner, acknowledging their courage in sharing their struggles, and encouraging them to elaborate on their experiences, emotions, and any past attempts to cope with these feelings. Response should be short and concise, and one question at a time to encourage the student to share more about their experiences.";

export async function POST(request) {
  try {
    const body = await request.json();
    const messages = body.messages;

    // Validate the input messages
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required.' },
        { status: 400 }
      );
    }

    // Make the request to Groq's chat completions API
    const groqResponse = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: prompt,
        },
        ...messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
      ],
      model: 'llama3-8b-8192',
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1,
      stream: false,
    });

    // Extract the assistant's response from Groq's API
    const assistantMessage = groqResponse.choices[0]?.message?.content;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: 'Failed to get a response from Groq.' },
        { status: 500 }
      );
    }

    // Return the assistant's message as the reply
    return NextResponse.json({
      reply: assistantMessage,
    });

  } catch (error) {
    console.error('Error while interacting with Groq:', error);
    return NextResponse.json(
      { error: 'Internal server error.', details: error.message },
      { status: 500 }
    );
  }
}
