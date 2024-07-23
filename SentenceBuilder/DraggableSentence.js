class DraggableSentence {
  constructor(parentElement, items) {
      this.parentElement = parentElement;
      this.items = items;
      this.createDivs();
  }

  createDivs() {
      this.clearParent();
      this.items.forEach((item, index) => {
          const div = document.createElement('div');
          div.style.width = '50px';
          div.style.height = '50px';
          div.style.backgroundColor = 'red';
          div.style.display = 'inline-block';
          div.style.textAlign = 'center';
          div.style.lineHeight = '50px';
          div.style.color = 'white';
          div.style.marginLeft = '1vw';
          div.textContent = item.text;
          div.setAttribute('draggable', 'true');
          div.setAttribute('data-index', index);

          div.addEventListener('dragstart', this.handleDragStart.bind(this));
          div.addEventListener('dragover', this.handleDragOver.bind(this));
          div.addEventListener('drop', this.handleDrop.bind(this));

          this.parentElement.appendChild(div);
      });
  }

  handleDragStart(event) {
      event.dataTransfer.setData('text/plain', event.target.getAttribute('data-index'));
  }

  handleDragOver(event) {
      event.preventDefault();
  }

  handleDrop(event) {
      event.preventDefault();
      const draggedIndex = event.dataTransfer.getData('text/plain');
      const targetIndex = event.target.getAttribute('data-index');
      
      if (draggedIndex !== targetIndex) {
          this.moveDiv(parseInt(draggedIndex, 10), parseInt(targetIndex, 10));
      }
  }

  moveDiv(fromIndex, toIndex) {
      const [movedItem] = this.items.splice(fromIndex, 1);
      this.items.splice(toIndex, 0, movedItem);
      this.createDivs();
  }

  clearParent() {
      this.parentElement.innerHTML = '';
  }
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
  const parentElement = document.getElementById('sentence-container');
  const items = [
      { text: 'This' },
      { text: 'is' },
      { text: 'a' },
      { text: 'test' }
  ];
  const drawer = new DraggableSentence(parentElement, items);
});
