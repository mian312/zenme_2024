// app/api/survey/route.ts
import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_API_KEY });

const prompt = "Your are an assistant bot designed to support students with their mental health, and you've received a summary of their recent mental health survey. Respond with a brief, non-judgmental message that acknowledges their struggles, offers a simple coping mechanism, and invites them to chat with you about their specific concerns, without asking any questions.";

export async function POST(request) {
    try {
        const body = await request.json();
        const query = body.summary;

        // Validate the query
        if (!query) {
            return NextResponse.json(
                { error: 'Invalid request: query is required.' },
                { status: 400 }
            );
        }

        // Make the request to Groq's chat completions API
        const groqResponse = await groq.chat.completions.create({
            messages: [
                {
                    "role": "system",
                    "content": prompt
                },
                {
                    "role": "user",
                    "content": query
                }
            ],
            model: 'gemma2-9b-it',
            temperature: 0.2,
            max_tokens: 256,
            top_p: 1,
            stream: false,
        });

        // Extract the assistant's content from Groq's response
        const assistantMessage = groqResponse.choices[0]?.message?.content;

        if (!assistantMessage) {
            return NextResponse.json(
                { error: 'Failed to get a response from Groq.' },
                { status: 500 }
            );
        }

        // Return the response from Groq to the client
        return NextResponse.json({
            role: 'assistant',
            content: assistantMessage
        });

    } catch (error) {
        console.error('Error while interacting with Groq:', error);
        return NextResponse.json(
            { error: 'Internal server error.', details: error.message },
            { status: 500 }
        );
    }
}
