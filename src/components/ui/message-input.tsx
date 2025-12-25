import React, { useRef, useEffect } from 'react';
import { Send, Paperclip, Bot, X, FileText, Image as ImageIcon, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface AttachmentFile {
  id: string;
  name: string;
  size: number;
  type: string;
  preview?: string;
}

interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  attachments: AttachmentFile[];
  setAttachments: (value: AttachmentFile[]) => void;
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  onSend: () => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveAttachment: (id: string) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  disabled?: boolean;
  placeholder?: string;
}

const AI_MODELS = [
  { value: 'gpt-4', label: 'GPT-4', description: 'Most capable model' },
  { value: 'gpt-4-turbo', label: 'GPT-4 Turbo', description: 'Faster GPT-4' },
  { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo', description: 'Fast and efficient' },
  { value: 'claude-3', label: 'Claude 3', description: 'Advanced reasoning' },
  { value: 'gemini-pro', label: 'Gemini Pro', description: 'Google\'s model' },
];

const MessageInput = ({
  input,
  setInput,
  attachments,
  setAttachments,
  selectedModel,
  setSelectedModel,
  onSend,
  onFileSelect,
  onRemoveAttachment,
  fileInputRef,
  disabled = false,
  placeholder = "Message CodeSpeeder...",
}: MessageInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() || attachments.length > 0) {
        onSend();
      }
    }
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

  return (
    <div className="w-full border-t bg-card/50 p-4 dark:bg-muted/30">
      {/* Model Selection */}
      <div className="mb-3 flex items-center gap-2">
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="flex-1 h-9 bg-background/50 border-muted">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-primary" />
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent>
            {AI_MODELS.map((model) => (
              <SelectItem key={model.value} value={model.value}>
                <div className="flex flex-col">
                  <span className="font-medium">{model.label}</span>
                  <span className="text-xs text-muted-foreground">{model.description}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Badge variant="outline" className="shrink-0">
          <Bot className="h-3 w-3 mr-1" />
          Active
        </Badge>
      </div>

      {/* Attachment Preview */}
      {attachments.length > 0 && (
        <div className="mb-3 space-y-2">
          <div className="flex items-center gap-2">
            <Paperclip className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground">
              {attachments.length} file{attachments.length > 1 ? 's' : ''} attached
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {attachments.map((attachment) => {
              const FileIcon = getFileIcon(attachment.type);
              return (
                <div
                  key={attachment.id}
                  className="relative group flex items-center gap-2 p-2 pr-8 rounded-lg border bg-card/50 backdrop-blur-sm max-w-[200px]"
                >
                  {attachment.preview ? (
                    <img
                      src={attachment.preview}
                      alt={attachment.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                  ) : (
                    <div className="p-1.5 rounded bg-muted">
                      <FileIcon className="h-5 w-5" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">{attachment.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(attachment.size)}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="absolute top-1 right-1 h-6 w-6"
                    onClick={() => onRemoveAttachment(attachment.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Input Area - Minimal Design with Bottom Accent */}
      <div className="relative flex w-full items-end rounded-lg border border-transparent bg-background px-3 pb-3 pt-2 shadow-sm transition-all focus-within:border-primary/30 focus-within:shadow-md dark:bg-muted/50">
        <div className="flex w-full gap-2">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={onFileSelect}
            accept="image/*,.pdf,.doc,.docx,.txt"
          />
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 h-8 w-8"
            onClick={() => fileInputRef.current?.click()}
            title="Attach files"
            disabled={disabled}
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <div className="flex-1 min-h-[24px] max-h-40 overflow-hidden">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="min-h-[24px] max-h-40 w-full resize-none border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
              disabled={disabled}
              rows={1}
            />
          </div>
          <Button
            onClick={onSend}
            disabled={disabled || (!input.trim() && attachments.length === 0)}
            size="icon"
            className={cn(
              "shrink-0 h-8 w-8 transition-opacity",
              (input.trim() || attachments.length > 0) ? "opacity-100" : "opacity-0"
            )}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20"></div>
      </div>

      <p className="mt-2 text-xs text-muted-foreground text-center">
        Click elements in the preview to inspect them
      </p>
    </div>
  );
};

export default MessageInput;