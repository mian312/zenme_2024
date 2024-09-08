// app/api/survey/route.ts
import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_API_KEY });

const prompt = "You are an assistant tasked with analyzing a set of survey questions and answers related to student mental health, and generating a concise summary that accurately reflects the user's mental state, incorporating all provided information to provide a comprehensive overview of their emotional well-being.";

export async function POST(request) {
    try {
        const body = await request.json();
        const query = body.results;

        // Validate the query
        if (!query || !Array.isArray(query)) {
            return NextResponse.json(
                { error: 'Invalid request: query array is required.' },
                { status: 400 }
            );
        }

        // Format the query (convert it to a human-readable string)
        const formattedQuery = query.map((q, index) => {
            return `Q${index + 1}: ${q.question} - Answer: ${q.mainResponse}`;
        }).join('\n');

        // Make the request to Groq's chat completions API
        const groqResponse = await groq.chat.completions.create({
            messages: [
                {
                    "role": "system",
                    "content": prompt
                },
                {
                    "role": "user",
                    "content": formattedQuery
                }
            ],
            model: 'gemma-7b-it',
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
