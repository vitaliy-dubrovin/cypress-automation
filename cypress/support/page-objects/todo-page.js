class ToDoPage {
  
    // Elements
    get toDoInput() {return cy.get('[placeholder="Add a new task"]')}
    get addButton() {return cy.get('#addTask')}

    get allFilter() {return cy.get('#all')}
    get pendingFilter() {return cy.get('#pending')}
    get completedFilter() {return cy.get('#completed')}
    
    get clearButtonActive() {return cy.get('class="clear-btn active"]')}
    get clearButtonInactive() {return cy.get('[class="clear-btn"]')}
 

    get toDoSetting() {return cy.get('[class="settings"]')}
    get editTaskButton() {return cy.get('#task-menu').find('#edit-btn')}
    get deleteTaskButton() {return cy.get('#task-menu').find('#delete-btn')}

    get toDoCheckBox() {return cy.get('[type="checkbox"]')}
    get notAvailableToDoTask() {return cy.contains("You don't have any task here")}

  
    // Actions
    addNewTask(taskName) {
      this.toDoInput.type(taskName)
      this.addButton.click()
    }

    editTask(newTaskName) {
      this.toDoCheckBox.click()
      this.toDoSetting.click()
      this.editTaskButton.click()
      this.toDoInput.clear()
      this.toDoInput.type(newTaskName)
      this.addButton.click()
    }

    deleteTask() {
        this.toDoCheckBox.click()
        this.toDoSetting.click()
        this.deleteTaskButton.click()
    }
  }
  
  export const toDoPage = new ToDoPage();

