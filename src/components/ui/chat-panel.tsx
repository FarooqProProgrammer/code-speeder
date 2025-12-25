"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Maximize2,
  Minimize2,
  RotateCcw,
  Copy,
  Check,
  Bot,
  User,
  Sparkles,
  Paperclip,
  X,
  FileText,
  Image as ImageIcon,
  File,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import MessageInput from '@/components/ui/message-input';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  attachments?: AttachmentFile[];
}

interface AttachmentFile {
  id: string;
  name: string;
  size: number;
  type: string;
  preview?: string;
}

interface InspectedElement {
  tagName: string;
  id?: string;
  className?: string;
  styles?: Record<string, string>;
  attributes?: Record<string, string>;
  innerHTML?: string;
}

interface ChatPanelProps {
  inspectedElement: InspectedElement | null;
  onSendMessage?: (message: string, attachments?: AttachmentFile[]) => void;
  className?: string;
}

const AI_MODELS = [
  { value: 'gpt-4', label: 'GPT-4', description: 'Most capable model' },
  { value: 'gpt-4-turbo', label: 'GPT-4 Turbo', description: 'Faster GPT-4' },
  { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo', description: 'Fast and efficient' },
  { value: 'claude-3', label: 'Claude 3', description: 'Advanced reasoning' },
  { value: 'gemini-pro', label: 'Gemini Pro', description: 'Google\'s model' },
];

const ChatPanel = ({ inspectedElement, onSendMessage, className }: ChatPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: 'Welcome to CodeSpeeder Dashboard! You can interact with the preview on the right. Click any element to inspect it.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [attachments, setAttachments] = useState<AttachmentFile[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Add inspected element details as a message
  useEffect(() => {
    if (inspectedElement) {
      const elementInfo = generateElementInfo(inspectedElement);
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'system',
        content: elementInfo,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newMessage]);
    }
  }, [inspectedElement]);

  const generateElementInfo = (element: InspectedElement): string => {
    let info = `🔍 **Inspected Element**\n\n`;
    info += `**Tag:** \`${element.tagName}\`\n`;
    
    if (element.id) {
      info += `**ID:** \`${element.id}\`\n`;
    }
    
    if (element.className) {
      info += `**Classes:** \`${element.className}\`\n`;
    }
    
    if (element.attributes && Object.keys(element.attributes).length > 0) {
      info += `\n**Attributes:**\n`;
      Object.entries(element.attributes).forEach(([key, value]) => {
        info += `- ${key}: "${value}"\n`;
      });
    }
    
    if (element.styles && Object.keys(element.styles).length > 0) {
      info += `\n**Computed Styles:**\n`;
      Object.entries(element.styles).slice(0, 10).forEach(([key, value]) => {
        info += `- ${key}: ${value}\n`;
      });
    }
    
    return info;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newAttachments: AttachmentFile[] = Array.from(files).map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      size: file.size,
      type: file.type,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
    }));

    setAttachments((prev) => [...prev, ...newAttachments]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((att) => att.id !== id));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return ImageIcon;
    if (type.includes('pdf') || type.includes('document')) return FileText;
    return File;
  };

  const handleSend = () => {
    if (!input.trim() && attachments.length === 0) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input || '(Attachments only)',
      timestamp: new Date(),
      attachments: attachments.length > 0 ? [...attachments] : undefined,
    };

    setMessages((prev) => [...prev, newMessage]);
    
    if (onSendMessage) {
      onSendMessage(input, attachments);
    }

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `I received your message${attachments.length > 0 ? ` with ${attachments.length} attachment(s)` : ''}! This is a demo response using ${AI_MODELS.find(m => m.value === selectedModel)?.label}. In a real implementation, this would process your request and interact with the iframe content.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setInput('');
    setAttachments([]);
  };

  const handleCopy = async (content: string, messageId: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(messageId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    setMessages([
      {
        id: '1',
        type: 'system',
        content: 'Chat cleared. Ready for new interactions!',
        timestamp: new Date(),
      },
    ]);
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content.split('\n').map((line, idx) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <strong key={idx}>{line.slice(2, -2)}</strong>;
      }
      if (line.includes('`')) {
        const parts = line.split('`');
        return (
          <span key={idx}>
            {parts.map((part, i) =>
              i % 2 === 0 ? part : <code key={i} className="px-1.5 py-0.5 rounded bg-muted text-xs">{part}</code>
            )}
          </span>
        );
      }
      return <span key={idx}>{line}</span>;
    });
  };

  const currentModel = AI_MODELS.find(m => m.value === selectedModel);

  return (
    <div className={cn('flex flex-col h-full bg-card/30 backdrop-blur-sm border-r', className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-card/50">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Chat Panel</h2>
            <p className="text-xs text-muted-foreground">Interact & Inspect</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleClear}
            title="Clear chat"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? 'Minimize' : 'Maximize'}
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div ref={scrollRef} className="space-y-4 overflow-y-auto">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'group relative',
                  message.type === 'user' && 'flex justify-end'
                )}
              >
                <div
                  className={cn(
                    'max-w-[85%] rounded-xl p-4 shadow-sm',
                    message.type === 'user' && 'bg-primary text-primary-foreground',
                    message.type === 'assistant' && 'bg-card border',
                    message.type === 'system' && 'bg-muted/50 border border-muted'
                  )}
                >
                  {/* Message Header */}
                  <div className="flex items-center gap-2 mb-2">
                    {message.type === 'user' && <User className="h-4 w-4" />}
                    {message.type === 'assistant' && <Bot className="h-4 w-4" />}
                    {message.type === 'system' && <Sparkles className="h-4 w-4" />}
                    <span className="text-xs font-medium opacity-70">
                      {message.type === 'user' ? 'You' : message.type === 'assistant' ? currentModel?.label : 'System'}
                    </span>
                    <span className="text-xs opacity-50">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>

                  {/* Message Content */}
                  <div className="text-sm whitespace-pre-wrap space-y-1">
                    {formatContent(message.content)}
                  </div>

                  {/* Attachments */}
                  {message.attachments && message.attachments.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.attachments.map((attachment) => {
                        const FileIcon = getFileIcon(attachment.type);
                        return (
                          <div
                            key={attachment.id}
                            className={cn(
                              'flex items-center gap-2 p-2 rounded-lg border',
                              message.type === 'user' ? 'bg-primary-foreground/10' : 'bg-muted/50'
                            )}
                          >
                            {attachment.preview ? (
                              <img
                                src={attachment.preview}
                                alt={attachment.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                            ) : (
                              <div className="p-2 rounded bg-muted">
                                <FileIcon className="h-6 w-6" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium truncate">{attachment.name}</p>
                              <p className="text-xs opacity-70">{formatFileSize(attachment.size)}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Copy Button */}
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleCopy(message.content, message.id)}
                  >
                    {copiedId === message.id ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* Message Input */}
      <MessageInput
        input={input}
        setInput={setInput}
        attachments={attachments}
        setAttachments={setAttachments}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        onSend={handleSend}
        onFileSelect={handleFileSelect}
        onRemoveAttachment={removeAttachment}
        fileInputRef={fileInputRef}
        disabled={!input.trim() && attachments.length === 0}
      />
    </div>
  );
};

export default ChatPanel;
