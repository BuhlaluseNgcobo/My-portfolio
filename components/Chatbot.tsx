
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';
import { ChatIcon } from './icons/SocialIcons';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chat) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        
        const context = `
          You are GuideBot, a friendly and professional AI assistant for ${PERSONAL_INFO.name}'s portfolio website.
          Your goal is to answer visitor questions about ${PERSONAL_INFO.name}, their skills, and their projects.
          Be concise and helpful. Use the following information to answer questions. Do not make up information.

          ABOUT ${PERSONAL_INFO.name.toUpperCase()}:
          - Name: ${PERSONAL_INFO.name}
          - Title: ${PERSONAL_INFO.title}
          - Bio: ${PERSONAL_INFO.bio}
          - Location: ${PERSONAL_INFO.location} (Willing to relocate)
          - Career Objectives: ${PERSONAL_INFO.careerObjectives}
          - Contact: Email at ${PERSONAL_INFO.email}, GitHub: ${PERSONAL_INFO.github}, LinkedIn: ${PERSONAL_INFO.linkedin}

          EXPERIENCE:
          ${EXPERIENCE.map(job => `- Role: ${job.role} at ${job.company} (${job.duration})\n  Accomplishments: ${job.description.join('; ')}`).join('\n\n')}

          EDUCATION:
          ${EDUCATION.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.duration})`).join('\n')}

          CERTIFICATIONS:
          ${CERTIFICATIONS.map(cert => `- ${cert.name} from ${cert.issuer}`).join('\n')}

          SKILLS:
          ${SKILL_CATEGORIES.map(cat => `- ${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

          PROJECTS:
          ${PROJECTS.map(p => `- Title: ${p.title}\n  Description: ${p.description}\n  Technologies: ${p.tags.join(', ')}\n  Documentation URL: ${p.documentationUrl}\n  Live Demo: ${p.liveDemoUrl}\n  Repo: ${p.githubRepoUrl}`).join('\n\n')}
        `;

        const newChat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: context,
            },
        });
        setChat(newChat);
        setMessages([
          { role: 'model', text: `Hello! I'm GuideBot, an AI assistant for ${PERSONAL_INFO.name}. How can I help you? You can ask me about projects, skills, or career goals.` }
        ]);
      } catch (error) {
        console.error("Failed to initialize Gemini AI:", error);
        setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
      }
    }
  }, [isOpen, chat]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: userMessage.text });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMessage: Message = { role: 'model', text: "I'm sorry, but I encountered an error. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-accent hover:brightness-95 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110 z-50"
        aria-label="Open GuideBot"
      >
        <ChatIcon className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={() => setIsOpen(false)}>
          <div
            className={`bg-chat-bg w-full max-w-lg h-[80vh] max-h-[700px] rounded-2xl shadow-2xl flex flex-col transform ${isOpen ? 'animate-slide-in' : 'animate-slide-out'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-secondary">
              <h3 className="text-lg font-bold text-highlight">GuideBot</h3>
              <button onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary">&times;</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-accent text-white rounded-br-none' 
                        : 'bg-secondary text-text-primary rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="max-w-xs md:max-w-md px-4 py-2 rounded-2xl bg-secondary text-text-primary rounded-bl-none flex items-center space-x-2">
                        <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse"></span>
                        <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-200"></span>
                        <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-400"></span>
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-secondary">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my projects..."
                  className="flex-1 bg-primary border border-secondary rounded-full px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="bg-accent hover:brightness-95 text-white font-bold rounded-full px-4 py-2 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                  disabled={isLoading}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
