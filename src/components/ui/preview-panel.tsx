"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  RotateCcw,
  Maximize2,
  Minimize2,
  Monitor,
  Smartphone,
  Tablet,
  Code,
  Eye,
  MousePointer,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface InspectedElement {
  tagName: string;
  id?: string;
  className?: string;
  styles?: Record<string, string>;
  attributes?: Record<string, string>;
  innerHTML?: string;
}

interface PreviewPanelProps {
  onElementInspect?: (element: InspectedElement) => void;
  className?: string;
}

const PreviewPanel = ({ onElementInspect, className }: PreviewPanelProps) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [inspectorMode, setInspectorMode] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const defaultHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    * {
      transition: outline 0.15s ease, background-color 0.15s ease;
    }
    body.inspector-enabled * {
      cursor: pointer !important;
    }
    body.inspector-enabled *:hover {
      outline: 2px solid #8b5cf6 !important;
      outline-offset: 2px !important;
      background-color: rgba(139, 92, 246, 0.05) !important;
    }
    .inspector-selected {
      outline: 2px solid #3b82f6 !important;
      outline-offset: 2px !important;
      background-color: rgba(59, 130, 246, 0.1) !important;
    }
  </style>
</head>
<body class="bg-linear-to-br from-purple-50 to-blue-50 min-h-screen p-8">
  <!-- Hero Section -->
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
          CS
        </div>
        <div>
          <h1 class="text-3xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            CodeSpeeder Preview
          </h1>
          <p class="text-gray-600">Interactive HTML/CSS/JS Preview</p>
        </div>
      </div>
      
      <p class="text-gray-700 text-lg leading-relaxed mb-6">
        This is a live preview panel with inspector functionality. Click any element to see its details in the chat panel.
      </p>
      
      <div class="flex gap-3">
        <button class="px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
          Get Started
        </button>
        <button class="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all">
          Learn More
        </button>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Fast Performance</h3>
        <p class="text-gray-600">Lightning-fast load times and smooth interactions</p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Secure</h3>
        <p class="text-gray-600">Bank-grade security for your code and data</p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Reliable</h3>
        <p class="text-gray-600">99.9% uptime guaranteed</p>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
      <h2 class="text-2xl font-bold mb-6 text-center">Trusted by Developers Worldwide</h2>
      <div class="grid grid-cols-3 gap-6 text-center">
        <div>
          <div class="text-4xl font-bold mb-2">10k+</div>
          <div class="text-purple-200">Active Users</div>
        </div>
        <div>
          <div class="text-4xl font-bold mb-2">50k+</div>
          <div class="text-purple-200">Projects</div>
        </div>
        <div>
          <div class="text-4xl font-bold mb-2">99.9%</div>
          <div class="text-purple-200">Uptime</div>
        </div>
      </div>
    </div>
  </div>

  <script>
    (function() {
      let inspectorEnabled = true;
      let selectedElement = null;

      // Listen for messages from parent
      window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'toggleInspector') {
          inspectorEnabled = event.data.enabled;
          updateInspectorMode();
        }
      });

      function updateInspectorMode() {
        if (inspectorEnabled) {
          document.body.classList.add('inspector-enabled');
        } else {
          document.body.classList.remove('inspector-enabled');
          // Remove any selected highlight
          clearSelection();
        }
      }

      function clearSelection() {
        if (selectedElement) {
          selectedElement.classList.remove('inspector-selected');
          selectedElement = null;
        }
      }

      // Handle element clicks
      document.addEventListener('click', function(e) {
        if (!inspectorEnabled) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const element = e.target;
        
        // Clear previous selection before adding new one
        clearSelection();
        
        // Add new selection
        element.classList.add('inspector-selected');
        selectedElement = element;
        
        // Get computed styles
        const computedStyles = window.getComputedStyle(element);
        const styles = {};
        const importantStyles = [
          'display', 'position', 'width', 'height', 'margin', 'padding',
          'backgroundColor', 'color', 'fontSize', 'fontWeight', 'border',
          'borderRadius', 'boxShadow', 'textAlign', 'lineHeight'
        ];
        
        importantStyles.forEach(function(prop) {
          styles[prop] = computedStyles[prop];
        });
        
        // Get attributes
        const attributes = {};
        Array.from(element.attributes).forEach(function(attr) {
          attributes[attr.name] = attr.value;
        });
        
        // Get inner HTML (truncated)
        const innerHTML = element.innerHTML.substring(0, 200);
        
        // Prepare element data
        const elementData = {
          tagName: element.tagName,
          id: element.id || undefined,
          className: element.className || undefined,
          styles: styles,
          attributes: attributes,
          innerHTML: innerHTML
        };
        
        // Send to parent window
        try {
          window.parent.postMessage({
            type: 'elementInspected',
            data: elementData
          }, '*');
        } catch (error) {
          console.error('Failed to send message to parent:', error);
        }
      }, true);

      // Prevent default link behavior when inspector is active
      document.addEventListener('click', function(e) {
        if (inspectorEnabled && e.target.tagName === 'A') {
          e.preventDefault();
        }
      });

      // Initial setup
      updateInspectorMode();
      
      // Notify parent that iframe is ready
      window.parent.postMessage({ type: 'iframeReady' }, '*');
    })();
  </script>
</body>
</html>`;

  const [htmlContent, setHtmlContent] = useState(defaultHTML);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (doc) {
        doc.open();
        doc.write(htmlContent);
        doc.close();
      }
    }
  }, [htmlContent]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'elementInspected' && onElementInspect) {
        onElementInspect(event.data.data);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onElementInspect]);

  useEffect(() => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'toggleInspector',
        enabled: inspectorMode
      }, '*');
    }
  }, [inspectorMode]);

  const handleRefresh = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (doc) {
        doc.open();
        doc.write(htmlContent);
        doc.close();
      }
    }
  };

  const getViewportClass = () => {
    switch (viewMode) {
      case 'mobile':
        return 'w-[375px]';
      case 'tablet':
        return 'w-[768px]';
      default:
        return 'w-full';
    }
  };

  return (
    <div className={cn('flex flex-col h-full bg-card/20 backdrop-blur-sm', className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-card/50">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-chart-1/10 border border-chart-1/20">
            <Eye className="h-5 w-5 text-chart-1" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Preview Panel</h2>
            <p className="text-xs text-muted-foreground">
              {inspectorMode ? 'Inspector Active' : 'Inspector Disabled'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode */}
          <div className="flex items-center gap-1 p-1 rounded-lg border bg-background">
            <Button
              variant={viewMode === 'desktop' ? 'default' : 'ghost'}
              size="icon-sm"
              onClick={() => setViewMode('desktop')}
              title="Desktop view"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'tablet' ? 'default' : 'ghost'}
              size="icon-sm"
              onClick={() => setViewMode('tablet')}
              title="Tablet view"
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'mobile' ? 'default' : 'ghost'}
              size="icon-sm"
              onClick={() => setViewMode('mobile')}
              title="Mobile view"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>

          {/* Actions */}
          <Button
            variant={inspectorMode ? 'default' : 'outline'}
            size="icon-sm"
            onClick={() => setInspectorMode(!inspectorMode)}
            title="Toggle inspector"
          >
            <MousePointer className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setShowCode(!showCode)}
            title="View code"
          >
            <Code className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleRefresh}
            title="Refresh"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 overflow-auto p-4 flex justify-center items-start bg-muted/20">
        <div className={cn('transition-all duration-300', getViewportClass())}>
          <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Device Frame */}
            {viewMode !== 'desktop' && (
              <div className="h-12 bg-gray-900 flex items-center justify-center">
                <div className="w-20 h-1 bg-gray-700 rounded-full" />
              </div>
            )}

            {/* Iframe */}
            <iframe
              ref={iframeRef}
              className="w-full h-[calc(100vh-250px)] border-0"
              title="Preview"
              sandbox="allow-scripts allow-same-origin"
            />

            {/* Inspector Badge */}
            {inspectorMode && (
              <Badge
                className="absolute top-4 right-4 shadow-lg"
                variant="default"
              >
                <MousePointer className="h-3 w-3 mr-1" />
                Inspector Active
              </Badge>
            )}
          </div>

          {/* Viewport Size Indicator */}
          <div className="mt-4 text-center text-xs text-muted-foreground">
            {viewMode === 'mobile' && '375px × Viewport'}
            {viewMode === 'tablet' && '768px × Viewport'}
            {viewMode === 'desktop' && 'Full Width'}
          </div>
        </div>
      </div>

      {/* Code View */}
      {showCode && (
        <div className="border-t bg-card/50 p-4 max-h-[300px] overflow-auto">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">HTML Source</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigator.clipboard.writeText(htmlContent)}
            >
              Copy Code
            </Button>
          </div>
          <pre className="text-xs bg-muted p-4 rounded-lg overflow-auto">
            <code>{htmlContent}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default PreviewPanel;
