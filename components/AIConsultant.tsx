
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am Quinti, your virtual loctician. How can I help you with your hair journey today? You can even upload a photo of your locs for a quick health check!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage: ChatMessage = { 
      role: 'user', 
      text: input, 
      image: selectedImage || undefined 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    const currentInput = input;
    const currentImage = selectedImage;
    setSelectedImage(null);

    const response = await geminiService.getAdvice(
      currentInput || "Analyze my locs based on this image.",
      currentImage || undefined
    );

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-stone-800 text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-xl font-bold">Q</div>
        <div>
          <h3 className="font-bold leading-none">Quinti AI</h3>
          <p className="text-xs text-stone-300">Virtual Loc Consultant</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl p-4 ${
              msg.role === 'user' ? 'bg-gold text-white' : 'bg-white text-stone-800 shadow-sm'
            }`}>
              {msg.image && (
                <img src={msg.image} alt="User locs" className="mb-2 rounded-lg max-h-48 object-cover" />
              )}
              <div className="prose prose-sm prose-stone">
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} className="mb-1">{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-2">
              <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        {selectedImage && (
          <div className="relative inline-block mb-2">
            <img src={selectedImage} alt="Selected" className="h-16 w-16 rounded-lg object-cover border-2 border-gold" />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
            >✕</button>
          </div>
        )}
        <div className="flex gap-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            accept="image/*" 
            className="hidden" 
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="p-3 bg-stone-100 rounded-xl hover:bg-stone-200 transition-colors"
            title="Upload photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about loc care..."
            className="flex-1 bg-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || (!input.trim() && !selectedImage)}
            className="bg-stone-800 text-white px-6 rounded-xl hover:bg-stone-700 disabled:opacity-50 transition-all font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
