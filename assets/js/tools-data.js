/* 
   AI ORBIT HUB - TOOLS DATABASE
   A curated list of 40+ AI tools with metadata
*/

export const AI_TOOLS = [
    // --- CHAT & GENERAL ---
    { id: 'chatgpt', name: 'ChatGPT', desc: 'The most popular AI for chatting, coding, and creative writing.', url: 'https://chat.openai.com', cat: 'Chat', color: '#10a37f', popular: true },
    { id: 'claude', name: 'Claude', desc: 'Advanced AI by Anthropic known for long context and safety.', url: 'https://claude.ai', cat: 'Chat', color: '#d97757', popular: true },
    { id: 'gemini', name: 'Gemini', desc: 'Googles highly capable multimodal AI integrated with Google apps.', url: 'https://gemini.google.com', cat: 'Chat', color: '#4285f4', popular: true },
    { id: 'copilot', name: 'Copilot', desc: 'Microsofts AI powered by GPT-4, built into Windows and Edge.', url: 'https://copilot.microsoft.com', cat: 'Chat', color: '#00a4ef', popular: true },
    { id: 'perplexity', name: 'Perplexity', desc: 'AI-powered search engine that provides real-time cited answers.', url: 'https://perplexity.ai', cat: 'Research', color: '#20b2aa', popular: true },
    { id: 'poe', name: 'Poe', desc: 'Access various AI models (GPT-4, Claude, Llama) in one place.', url: 'https://poe.com', cat: 'Chat', color: '#6d28d9', popular: false },
    { id: 'grok', name: 'Grok', desc: 'X (Twitter) conversational AI with real-time news access.', url: 'https://grok.x.ai', cat: 'Chat', color: '#ffffff', popular: false },
    { id: 'huggingchat', name: 'HuggingChat', desc: 'Open-source chat interface for various LLM models.', url: 'https://huggingface.co/chat', cat: 'Chat', color: '#ffbd2e', popular: false },
    { id: 'deepseek', name: 'DeepSeek', desc: 'High-performance AI models for reasoning and coding.', url: 'https://chat.deepseek.com', cat: 'Chat', color: '#4d6eff', popular: true },
    { id: 'pi', name: 'Inflection Pi', desc: 'A personal AI designed to be supportive and smart.', url: 'https://pi.ai', cat: 'Chat', color: '#2ec4b6', popular: false },
    { id: 'mistral', name: 'Mistral', desc: 'Powerful European open-source AI models.', url: 'https://chat.mistral.ai', cat: 'Chat', color: '#f5d142', popular: false },

    // --- IMAGE GENERATION ---
    { id: 'midjourney', name: 'Midjourney', desc: 'Superior AI for high-quality artistic image generation.', url: 'https://www.midjourney.com', cat: 'Image', color: '#ffffff', popular: true },
    { id: 'leonardo', name: 'Leonardo AI', desc: 'Creative production platform for high-quality AI images.', url: 'https://leonardo.ai', cat: 'Image', color: '#00f2ff', popular: true },
    { id: 'stablediffusion', name: 'DreamStudio', desc: 'Official interface for Stable Diffusion image models.', url: 'https://dreamstudio.ai', cat: 'Image', color: '#7c3aed', popular: false },
    { id: 'ideogram', name: 'Ideogram', desc: 'AI specialized in generating images with readable text.', url: 'https://ideogram.ai', cat: 'Image', color: '#ff4d4d', popular: true },
    { id: 'bingimage', name: 'Bing Creator', desc: 'DALL-E 3 image generation directly from Microsoft.', url: 'https://www.bing.com/images/create', cat: 'Image', color: '#ffb900', popular: false },
    { id: 'adobe-firefly', name: 'Adobe Firefly', desc: 'Generative AI integrated into Photoshop and creative tools.', url: 'https://firefly.adobe.com', cat: 'Image', color: '#fa0f00', popular: true },
    { id: 'canva-ai', name: 'Canva AI', desc: 'Magic Media tools for effortless design and graphics.', url: 'https://www.canva.com/magic', cat: 'Design', color: '#00c4cc', popular: false },

    // --- VIDEO & MOTION ---
    { id: 'runway', name: 'Runway Gen-2', desc: 'Leader in AI video generation and video editing tools.', url: 'https://runwayml.com', cat: 'Video', color: '#ffffff', popular: true },
    { id: 'luma', name: 'Luma Dream Machine', desc: 'High-fidelity cinematic AI video generator.', url: 'https://lumalabs.ai', cat: 'Video', color: '#ff00ff', popular: true },
    { id: 'pika', name: 'Pika Labs', desc: 'An idea-to-video platform that brings your imagination to life.', url: 'https://pika.art', cat: 'Video', color: '#ffea00', popular: false },
    { id: 'synthesia', name: 'Synthesia', desc: 'Create AI videos with talking avatars from text.', url: 'https://www.synthesia.io', cat: 'Video', color: '#3155ff', popular: false },
    { id: 'd-id', name: 'D-ID', desc: 'AI video platform for creating talking digital humans.', url: 'https://www.d-id.com', cat: 'Video', color: '#ff6b00', popular: false },
    { id: 'invideo', name: 'InVideo AI', desc: 'Generate complete videos with voiceovers from a simple prompt.', url: 'https://invideo.io', cat: 'Video', color: '#00d084', popular: false },
    { id: 'kaiber', name: 'Kaiber AI', desc: 'Generative video platform for artists and musicians.', url: 'https://kaiber.ai', cat: 'Video', color: '#e5ff00', popular: false },

    // --- AUDIO & VOICE ---
    { id: 'elevenlabs', name: 'ElevenLabs', desc: 'The most realistic AI speech and text-to-speech software.', url: 'https://elevenlabs.io', cat: 'Audio', color: '#22d3ee', popular: true },
    { id: 'suno', name: 'Suno AI', desc: 'Create full songs with vocals and music from a prompt.', url: 'https://suno.com', cat: 'Audio', color: '#00ffa3', popular: true },
    { id: 'murf', name: 'Murf AI', desc: 'Professional AI voiceovers for various use cases.', url: 'https://murf.ai', cat: 'Audio', color: '#34d399', popular: false },

    // --- PRODUCTIVITY & WRITING ---
    { id: 'notion', name: 'Notion AI', desc: 'AI writing and organization assistant built into Notion.', url: 'https://www.notion.so/product/ai', cat: 'Productivity', color: '#000000', popular: true },
    { id: 'jasper', name: 'Jasper AI', desc: 'AI content platform for marketing and business teams.', url: 'https://www.jasper.ai', cat: 'Writing', color: '#ff4b2b', popular: false },
    { id: 'copyai', name: 'Copy.ai', desc: 'AI-driven copywriting and marketing automation.', url: 'https://www.copy.ai', cat: 'Writing', color: '#2ec4b6', popular: false },
    { id: 'writesonic', name: 'Writesonic', desc: 'SEO-optimized content and article generation.', url: 'https://writesonic.com', cat: 'Writing', color: '#3182ce', popular: false },
    { id: 'gamma', name: 'Gamma', desc: 'AI that creates beautiful presentations and docs instantly.', url: 'https://gamma.app', cat: 'Design', color: '#9d66ff', popular: true },

    // --- CODING & RESEARCH ---
    { id: 'phind', name: 'Phind', desc: 'The AI search engine optimized for developers and coding questions.', url: 'https://www.phind.com', cat: 'Coding', color: '#6366f1', popular: true },
    { id: 'you', name: 'You.com', desc: 'AI-powered search engine with coding and research focus.', url: 'https://you.com', cat: 'Research', color: '#3b82f6', popular: false },
    { id: 'otter', name: 'Otter.ai', desc: 'AI meeting assistant for transcription and summaries.', url: 'https://otter.ai', cat: 'Meeting', color: '#007aff', popular: false },
    { id: 'fireflies', name: 'Fireflies AI', desc: 'AI meeting notes and conversation intelligence.', url: 'https://fireflies.ai', cat: 'Meeting', color: '#7c3aed', popular: false }
];

// List of available categories for the UI
export const CATEGORIES = [
    'Chat', 'Image', 'Video', 'Audio', 'Coding', 'Research', 'Productivity', 'Design', 'Writing', 'Meeting'
];