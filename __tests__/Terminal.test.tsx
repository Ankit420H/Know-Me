import { render, screen, fireEvent } from '@testing-library/react';
import { Terminal } from '@/components/features/Terminal';

// Mock matchMedia for framer-motion or other libs if needed
window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {},
        addEventListener: function() {},
        removeEventListener: function() {},
        dispatchEvent: function() { return false; },
    };
};

describe('Terminal Component', () => {
  it('opens terminal on button click and renders initial text', () => {
    // We only have the closed state button initially
    const { container } = render(<Terminal />);
    
    // The trigger button is a motion.button, let's find it by role or class
    const triggerButton = container.querySelector('button');
    expect(triggerButton).toBeInTheDocument();
    
    if (triggerButton) {
      fireEvent.click(triggerButton);
    }
    
    // Check if initial output is present
    expect(screen.getByText(/Welcome to Ankit's Terminal/i)).toBeInTheDocument();
  });
});
