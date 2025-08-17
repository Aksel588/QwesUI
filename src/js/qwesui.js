/**
 * QwesUI - Modern Frontend Framework
 * ===================================
 * Lightweight, modular UI framework for fast development
 */

(function(global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else {
    // Browser globals
    global.QwesUI = factory();
  }
})(this, function() {
  'use strict';

  // QwesUI Core Class
  class QwesUI {
    constructor() {
      this.version = '1.0.0';
      this.components = new Map();
      this.init();
    }

    // Initialize the framework
    init() {
      this.initComponents();
      this.initEventListeners();
      this.initTheme();
    }

    // Initialize all components
    initComponents() {
      // Initialize modals
      this.initModals();
      
      // Initialize dropdowns
      this.initDropdowns();
      
      // Initialize tabs
      this.initTabs();
      
      // Initialize tooltips
      this.initTooltips();
      
      // Initialize toasts
      this.initToasts();
      
      // Initialize forms
      this.initForms();
    }

    // Event listeners
    initEventListeners() {
      // Theme toggle
      document.addEventListener('click', (e) => {
        if (e.target.matches('[data-theme-toggle]')) {
          this.toggleTheme();
        }
      });

      // Auto-hide toasts
      document.addEventListener('click', (e) => {
        if (e.target.matches('.toast-close')) {
          const toast = e.target.closest('.toast');
          if (toast) {
            this.hideToast(toast);
          }
        }
      });
    }

    // Theme management
    initTheme() {
      const savedTheme = localStorage.getItem('qwesui-theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }

    toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('qwesui-theme', newTheme);
    }

    // Modal Component
    initModals() {
      document.addEventListener('click', (e) => {
        if (e.target.matches('[data-modal]')) {
          const modalId = e.target.getAttribute('data-modal');
          this.showModal(modalId);
        }
        
        if (e.target.matches('.modal-close, .modal-backdrop')) {
          const modal = e.target.closest('.modal');
          if (modal) {
            this.hideModal(modal);
          }
        }
      });

      // Close modal on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const openModal = document.querySelector('.modal.show');
          if (openModal) {
            this.hideModal(openModal);
          }
        }
      });
    }

    showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('show');
        document.body.classList.add('modal-open');
        
        // Focus first focusable element
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length > 0) {
          focusable[0].focus();
        }
      }
    }

    hideModal(modal) {
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
    }

    // Dropdown Component
    initDropdowns() {
      document.addEventListener('click', (e) => {
        if (e.target.matches('[data-dropdown]')) {
          const dropdown = e.target.closest('.dropdown');
          if (dropdown) {
            this.toggleDropdown(dropdown);
          }
        }
        
        // Close dropdowns when clicking outside
        if (!e.target.closest('.dropdown')) {
          this.closeAllDropdowns();
        }
      });
    }

    toggleDropdown(dropdown) {
      const isOpen = dropdown.classList.contains('show');
      
      if (isOpen) {
        this.closeDropdown(dropdown);
      } else {
        this.closeAllDropdowns();
        this.openDropdown(dropdown);
      }
    }

    openDropdown(dropdown) {
      dropdown.classList.add('show');
    }

    closeDropdown(dropdown) {
      dropdown.classList.remove('show');
    }

    closeAllDropdowns() {
      document.querySelectorAll('.dropdown.show').forEach(dropdown => {
        this.closeDropdown(dropdown);
      });
    }

    // Tab Component
    initTabs() {
      document.addEventListener('click', (e) => {
        if (e.target.matches('[data-tab]')) {
          const tabId = e.target.getAttribute('data-tab');
          const tabContainer = e.target.closest('.tabs');
          if (tabContainer) {
            this.showTab(tabContainer, tabId);
          }
        }
      });
    }

    showTab(tabContainer, tabId) {
      // Hide all tab contents
      tabContainer.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // Remove active class from all tabs
      tabContainer.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Show selected tab content
      const selectedContent = tabContainer.querySelector(`[data-tab-content="${tabId}"]`);
      if (selectedContent) {
        selectedContent.classList.add('active');
      }
      
      // Add active class to selected tab
      const selectedTab = tabContainer.querySelector(`[data-tab="${tabId}"]`);
      if (selectedTab) {
        selectedTab.classList.add('active');
      }
    }

    // Tooltip Component
    initTooltips() {
      document.addEventListener('mouseenter', (e) => {
        if (e.target.matches('[data-tooltip]')) {
          this.showTooltip(e.target);
        }
      });

      document.addEventListener('mouseleave', (e) => {
        if (e.target.matches('[data-tooltip]')) {
          this.hideTooltip(e.target);
        }
      });
    }

    showTooltip(element) {
      const text = element.getAttribute('data-tooltip');
      const position = element.getAttribute('data-tooltip-position') || 'top';
      
      const tooltip = document.createElement('div');
      tooltip.className = `tooltip tooltip-${position}`;
      tooltip.textContent = text;
      
      document.body.appendChild(tooltip);
      
      // Position tooltip
      const rect = element.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      
      let top, left;
      
      switch (position) {
        case 'top':
          top = rect.top - tooltipRect.height - 8;
          left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'bottom':
          top = rect.bottom + 8;
          left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'left':
          top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
          left = rect.left - tooltipRect.width - 8;
          break;
        case 'right':
          top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
          left = rect.right + 8;
          break;
      }
      
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
      tooltip.classList.add('show');
      
      element._tooltip = tooltip;
    }

    hideTooltip(element) {
      if (element._tooltip) {
        element._tooltip.remove();
        element._tooltip = null;
      }
    }

    // Toast Component
    initToasts() {
      // Auto-hide toasts after 5 seconds
      setInterval(() => {
        document.querySelectorAll('.toast:not(.toast-persistent)').forEach(toast => {
          if (toast.classList.contains('show')) {
            this.hideToast(toast);
          }
        });
      }, 5000);
    }

    showToast(message, type = 'info', duration = 5000) {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      
      toast.innerHTML = `
        <div class="toast-content">
          <span class="toast-message">${message}</span>
          <button class="toast-close">&times;</button>
        </div>
      `;
      
      document.body.appendChild(toast);
      
      // Trigger reflow for animation
      toast.offsetHeight;
      toast.classList.add('show');
      
      if (duration > 0) {
        setTimeout(() => {
          this.hideToast(toast);
        }, duration);
      }
      
      return toast;
    }

    hideToast(toast) {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.remove();
        }
      }, 300);
    }

    // Form Component
    initForms() {
      document.addEventListener('submit', (e) => {
        if (e.target.matches('.form')) {
          this.handleFormSubmit(e.target);
        }
      });
    }

    handleFormSubmit(form) {
      const submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.classList.add('btn-loading');
        submitBtn.disabled = true;
      }
      
      // Simulate form processing
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.remove('btn-loading');
          submitBtn.disabled = false;
        }
        
        // Show success message
        this.showToast('Form submitted successfully!', 'success');
      }, 1000);
    }

    // Utility Methods
    isElement(element) {
      return element instanceof Element || element instanceof HTMLDocument;
    }

    // Public API Methods
    modal(id) {
      return {
        show: () => this.showModal(id),
        hide: () => {
          const modal = document.getElementById(id);
          if (modal) this.hideModal(modal);
        }
      };
    }

    toast(message, type = 'info', duration = 5000) {
      return {
        show: () => this.showToast(message, type, duration),
        hide: () => {
          // Find and hide toast by message
          const toasts = document.querySelectorAll('.toast');
          toasts.forEach(toast => {
            if (toast.querySelector('.toast-message').textContent === message) {
              this.hideToast(toast);
            }
          });
        }
      };
    }

    dropdown(element) {
      return {
        show: () => this.openDropdown(element),
        hide: () => this.closeDropdown(element),
        toggle: () => this.toggleDropdown(element)
      };
    }

    tab(container, tabId) {
      return {
        show: () => this.showTab(container, tabId)
      };
    }
  }

  // Create global instance
  const qwesui = new QwesUI();

  // Return the public API
  return qwesui;
});
