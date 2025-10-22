// Enhanced DataTable Functionality for better UX

class EnhancedDataTable {
  constructor(tableSelector) {
    this.table = document.querySelector(tableSelector);
    this.tbody = this.table?.querySelector('.p-datatable-tbody');
    this.thead = this.table?.querySelector('.p-datatable-thead');
    this.init();
  }

  init() {
    if (!this.table) return;
    
    this.setupSorting();
    this.setupRowSelection();
    this.setupKeyboardNavigation();
    this.setupRowHover();
    this.setupResponsiveHandling();
    this.setupEmptyState();
  }

  // Enhanced Sorting
  setupSorting() {
    const sortableHeaders = this.thead?.querySelectorAll('.p-datatable-sortable-column');
    
    sortableHeaders?.forEach(header => {
      header.addEventListener('click', (e) => {
        this.handleSort(header);
      });

      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleSort(header);
        }
      });
    });
  }

  handleSort(header) {
    const currentSort = header.getAttribute('aria-sort');
    let newSort = 'ascending';
    
    // Reset all other headers
    this.thead?.querySelectorAll('.p-datatable-sortable-column').forEach(h => {
      if (h !== header) {
        h.setAttribute('aria-sort', 'none');
      }
    });

    // Toggle sort direction
    if (currentSort === 'ascending') {
      newSort = 'descending';
    } else if (currentSort === 'descending') {
      newSort = 'none';
    }

    header.setAttribute('aria-sort', newSort);
    
    // Trigger custom sort event
    const sortEvent = new CustomEvent('tableSort', {
      detail: { column: header, direction: newSort }
    });
    this.table.dispatchEvent(sortEvent);
  }

  // Enhanced Row Selection
  setupRowSelection() {
    const headerCheckbox = this.thead?.querySelector('.p-checkbox-input');
    const rowCheckboxes = this.tbody?.querySelectorAll('.p-checkbox-input');

    // Header checkbox - select all
    headerCheckbox?.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      rowCheckboxes?.forEach(checkbox => {
        checkbox.checked = isChecked;
        this.toggleRowSelection(checkbox.closest('tr'), isChecked);
      });
      
      this.updateSelectionCount();
    });

    // Individual row checkboxes
    rowCheckboxes?.forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const row = e.target.closest('tr');
        this.toggleRowSelection(row, e.target.checked);
        this.updateHeaderCheckbox();
      });
    });
  }

  toggleRowSelection(row, isSelected) {
    if (!row) return;
    
    row.classList.toggle('p-datatable-row-selected', isSelected);
    row.setAttribute('aria-selected', isSelected.toString());
  }

  updateHeaderCheckbox() {
    const headerCheckbox = this.thead?.querySelector('.p-checkbox-input');
    const rowCheckboxes = this.tbody?.querySelectorAll('.p-checkbox-input');
    
    if (!headerCheckbox || !rowCheckboxes) return;

    const checkedCount = Array.from(rowCheckboxes).filter(cb => cb.checked).length;
    const totalCount = rowCheckboxes.length;

    headerCheckbox.checked = checkedCount === totalCount;
    headerCheckbox.indeterminate = checkedCount > 0 && checkedCount < totalCount;
  }


  // Keyboard Navigation
  setupKeyboardNavigation() {
    const rows = this.tbody?.querySelectorAll('.p-datatable-row');
    let currentRowIndex = -1;

    this.table?.addEventListener('keydown', (e) => {
      if (!rows || rows.length === 0) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          currentRowIndex = Math.min(currentRowIndex + 1, rows.length - 1);
          this.focusRow(rows[currentRowIndex]);
          break;
          
        case 'ArrowUp':
          e.preventDefault();
          currentRowIndex = Math.max(currentRowIndex - 1, 0);
          this.focusRow(rows[currentRowIndex]);
          break;
          
        case 'Home':
          e.preventDefault();
          currentRowIndex = 0;
          this.focusRow(rows[currentRowIndex]);
          break;
          
        case 'End':
          e.preventDefault();
          currentRowIndex = rows.length - 1;
          this.focusRow(rows[currentRowIndex]);
          break;
          
        case 'Enter':
        case ' ':
          if (e.target.classList.contains('p-datatable-row')) {
            e.preventDefault();
            const checkbox = e.target.querySelector('.p-checkbox-input');
            if (checkbox) {
              checkbox.checked = !checkbox.checked;
              checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }
          break;
      }
    });

    // Track focused row
    rows?.forEach((row, index) => {
      row.addEventListener('focus', () => {
        currentRowIndex = index;
      });
    });
  }

  focusRow(row) {
    if (!row) return;
    row.focus();
    row.scrollIntoView({ block: 'nearest' });
  }

  // Enhanced Row Hover
  setupRowHover() {
    // Row hover is now handled purely by CSS
    // No JavaScript hover effects needed
  }

  // Responsive Handling
  setupResponsiveHandling() {
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const width = entry.contentRect.width;
        this.handleResponsiveColumns(width);
      });
    });

    resizeObserver.observe(this.table);
  }

  handleResponsiveColumns(width) {
    const headers = this.thead?.querySelectorAll('th');
    const mobileBreakpoint = 768;
    const tabletBreakpoint = 1024;

    headers?.forEach((header, index) => {
      // Hide less important columns on mobile
      if (width < mobileBreakpoint) {
        // Hide columns beyond essential ones (checkbox, preview, name, status)
        if (index > 4) {
          header.classList.add('p-datatable-hide-mobile');
          // Also hide corresponding body cells
          this.tbody?.querySelectorAll(`tr td:nth-child(${index + 1})`).forEach(cell => {
            cell.classList.add('p-datatable-hide-mobile');
          });
        }
      } else {
        header.classList.remove('p-datatable-hide-mobile');
        this.tbody?.querySelectorAll(`tr td:nth-child(${index + 1})`).forEach(cell => {
          cell.classList.remove('p-datatable-hide-mobile');
        });
      }
    });
  }

  // Empty State
  setupEmptyState() {
    this.checkEmptyState();
    
    // Monitor for changes in tbody
    const observer = new MutationObserver(() => {
      this.checkEmptyState();
    });

    if (this.tbody) {
      observer.observe(this.tbody, { childList: true });
    }
  }

  checkEmptyState() {
    const dataRows = this.tbody?.querySelectorAll('.p-datatable-row:not(.p-datatable-emptymessage)');
    
    if (!dataRows || dataRows.length === 0) {
      this.showEmptyState();
    } else {
      this.hideEmptyState();
    }
  }

  showEmptyState() {
    const existingEmptyRow = this.tbody?.querySelector('.p-datatable-emptymessage');
    if (existingEmptyRow) return;

    const headerCount = this.thead?.querySelectorAll('th').length || 1;
    const emptyRow = document.createElement('tr');
    emptyRow.className = 'p-datatable-emptymessage';
    emptyRow.innerHTML = `
      <td colspan="${headerCount}" class="p-datatable-emptymessage">
        <div style="text-align: center; padding: 2rem; color: var(--p-text-muted-color);">
          <i class="fa-light fa-folder-open" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
          Keine Texturen gefunden
        </div>
      </td>
    `;
    
    this.tbody?.appendChild(emptyRow);
  }

  hideEmptyState() {
    const emptyRow = this.tbody?.querySelector('.p-datatable-emptymessage');
    emptyRow?.remove();
  }

  // Public API methods
  getSelectedRows() {
    return Array.from(this.tbody?.querySelectorAll('.p-datatable-row-selected') || []);
  }

  clearSelection() {
    const checkboxes = this.table?.querySelectorAll('.p-checkbox-input');
    checkboxes?.forEach(checkbox => {
      checkbox.checked = false;
    });
    
    const selectedRows = this.table?.querySelectorAll('.p-datatable-row-selected');
    selectedRows?.forEach(row => {
      row.classList.remove('p-datatable-row-selected');
      row.setAttribute('aria-selected', 'false');
    });
    
    this.updateSelectionCount();
  }

  selectAll() {
    const checkboxes = this.tbody?.querySelectorAll('.p-checkbox-input');
    const headerCheckbox = this.thead?.querySelector('.p-checkbox-input');
    
    checkboxes?.forEach(checkbox => {
      checkbox.checked = true;
      this.toggleRowSelection(checkbox.closest('tr'), true);
    });
    
    if (headerCheckbox) {
      headerCheckbox.checked = true;
    }
    
    this.updateSelectionCount();
  }
}

// Initialize enhanced datatable when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const enhancedTable = new EnhancedDataTable('.p-datatable');
  
  // Make it globally accessible
  window.enhancedDataTable = enhancedTable;
  
  // Example event listeners
  enhancedTable.table?.addEventListener('tableSort', (e) => {
    console.log('Table sorted:', e.detail);
  });
  
  enhancedTable.table?.addEventListener('selectionChange', (e) => {
    console.log('Selection changed:', e.detail);
  });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EnhancedDataTable };
}
