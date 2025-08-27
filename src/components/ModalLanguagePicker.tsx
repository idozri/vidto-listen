import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ALL_LANGUAGES, Language } from '@/lib/languages';
import { cn } from '@/lib/utils';

interface ModalLanguagePickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (language: Language) => void;
}

const ModalLanguagePicker: React.FC<ModalLanguagePickerProps> = ({
  open,
  onClose,
  onSelect
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState(ALL_LANGUAGES);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredLanguages(ALL_LANGUAGES);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = ALL_LANGUAGES.filter(
      lang =>
        lang.name.toLowerCase().includes(query) ||
        lang.code.toLowerCase().includes(query)
    );
    setFilteredLanguages(filtered);
  }, [searchQuery]);

  useEffect(() => {
    if (open) {
      setSearchQuery('');
    }
  }, [open]);

  const handleSelect = (language: Language) => {
    onSelect(language);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div 
        className="bg-card border border-border rounded-lg shadow-xl w-full max-w-md max-h-[80vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Select Language</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
              autoFocus
            />
          </div>
        </div>

        {/* Language List */}
        <div className="flex-1 overflow-y-auto">
          {filteredLanguages.length > 0 ? (
            <div className="p-2">
              {filteredLanguages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleSelect(language)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-md text-left transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  )}
                >
                  {language.flag && (
                    <span className="text-lg flex-shrink-0">
                      {language.flag}
                    </span>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground">
                      {language.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {language.code}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No languages found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalLanguagePicker;