import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { destinations } from '@/data/destinations';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

const chatbotData = {
  greetings: ["hello", "hi", "hey", "greetings"],
  about: ["about", "tawa", "what is", "who"],
  destinations: ["destination", "park", "reserve", "visit", "where"],
  tours: ["tour", "safari", "trip", "book", "price"],
  contact: ["contact", "phone", "email", "address", "reach"],
};

function getBotResponse(input: string): string {
  const lowerInput = input.toLowerCase();

  if (chatbotData.greetings.some(g => lowerInput.includes(g))) {
    return "Karibu! Welcome to TAWA. I'm here to help you explore Tanzania's magnificent wildlife. Ask me about our destinations, tours, or conservation efforts!";
  }

  if (chatbotData.about.some(g => lowerInput.includes(g))) {
    return "TAWA (Tanzania Wildlife Management Authority) is responsible for managing wildlife resources in Tanzania's Game Reserves and Game Controlled Areas. We protect over 170,000 km² of pristine wilderness!";
  }

  if (chatbotData.destinations.some(g => lowerInput.includes(g))) {
    const destList = destinations.map(d => d.name).join(', ');
    return `We manage several spectacular destinations: ${destList}. Each offers unique wildlife experiences. Which one interests you?`;
  }

  if (chatbotData.tours.some(g => lowerInput.includes(g))) {
    return "We offer various safari experiences from 2-6 days, including game drives, walking safaris, boat safaris, and photography tours. Prices range from $450-$1500 depending on duration and activities. Check our Destinations page for specific packages!";
  }

  if (chatbotData.contact.some(g => lowerInput.includes(g))) {
    return "You can reach us at:\n📍 Morogoro Road, Dodoma, Tanzania\n📞 +255 26 232 1222\n📧 info@tawa.go.tz\n\nOur team is happy to assist with bookings and inquiries!";
  }

  // Check for specific destination names
  for (const dest of destinations) {
    if (lowerInput.includes(dest.slug) || lowerInput.includes(dest.name.toLowerCase())) {
      return `${dest.name}: ${dest.description}\n\nArea: ${dest.stats.area}\nSpecies: ${dest.stats.species}+\nKey Wildlife: ${dest.wildlife.slice(0, 3).join(', ')}\n\nWould you like to know about tours here?`;
    }
  }

  return "I'd be happy to help! You can ask me about:\n• TAWA and our mission\n• Wildlife destinations\n• Safari tours and prices\n• How to contact us\n\nWhat would you like to know?";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Jambo! Welcome to TAWA. How can I help you explore Tanzania's wildlife today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        isBot: true,
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-elevated"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-elevated overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/20 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">TAWA Assistant</h3>
                  <p className="text-xs text-primary-foreground/80">Here to help you explore</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                      message.isBot
                        ? 'bg-muted text-foreground rounded-bl-none'
                        : 'bg-primary text-primary-foreground rounded-br-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about wildlife..."
                  className="flex-1 px-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-jungle-yellow"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2 rounded-full bg-jungle-yellow text-jungle-dark disabled:opacity-50 disabled:cursor-not-allowed hover:bg-jungle-yellow-light transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
