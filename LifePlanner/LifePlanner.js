class LifePlanner {
    constructor(forms) {
      this.forms = forms;
      this.currentFormIndex = 0;
      this.container = document.createElement('div');
      this.allFormData = [];
      document.body.appendChild(this.container);
      this.renderCurrentForm();
    }
  
    renderCurrentForm() {
      if (this.currentFormIndex >= this.forms.length) {
        this.container.innerHTML = '<p>All forms have been submitted!</p>';
        console.log('All forms data:', this.allFormData);
        return;
      }
  
      const formConfig = this.forms[this.currentFormIndex];
      const formElement = this.createFormElement(formConfig);
      this.container.innerHTML = '';
      this.container.appendChild(formElement);
    }
  
    createFormElement(formConfig) {
      const formElement = document.createElement('form');
      formConfig.fields.forEach(field => {
        const fieldElement = this.createFieldElement(field);
        formElement.appendChild(fieldElement);
      });
  
      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.textContent = 'Submit';
      formElement.appendChild(submitButton);
  
      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        this.handleSubmit(formConfig.onSubmit);
      });
  
      return formElement;
    }
  
    createFieldElement(field) {
      const fieldElement = document.createElement('div');
      const label = document.createElement('label');
      label.textContent = field.label;
  
      let input;
      if (field.type === 'textarea') {
        input = document.createElement('textarea');
      } else {
        input = document.createElement('input');
        input.type = field.type;
      }
      input.name = field.name;
  
      fieldElement.appendChild(label);
      fieldElement.appendChild(input);
  
      return fieldElement;
    }
  
    handleSubmit(onSubmit) {
      const formData = new FormData(this.container.querySelector('form'));
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      this.allFormData.push(data);
      console.log('Form data:', data);
      console.log('All forms data so far:', this.allFormData);
  
      onSubmit(data);
      this.currentFormIndex++;
      this.renderCurrentForm();
    }
  }
  
  // Example usage:
  const forms = [
    {
      fields: [
        { label: 'What work do you imagine yourself doing?', type: 'textarea', name: 'work' },
      ],
      onSubmit: (data) => console.log('Form 1 submitted:', data)
    },
    {
      fields: [
        { label: 'What do you imagine you are doing that is meaningful for people around you?', type: 'textarea', name: 'meaning' },
      ],
      onSubmit: (data) => console.log('Form 2 submitted:', data)
    },
    {
      fields: [
        { label: 'Discribe your living conditions, how you see yourself living.', type: 'textarea', name: 'living_conditions' },
      ],
      onSubmit: (data) => console.log('Form 3 submitted:', data)
    }
  ];
  
  const planner = new LifePlanner(forms);
  