import { faker } from '@faker-js/faker';
import { toDoPage } from '../support/page-objects/todo-page';

describe('Todo page - AUT', () => {
    let randomItemName = faker.lorem.word()

    const testInfo = {
        itemToAdd: `test-${randomItemName}`,
        itemToEdit: `test-edit-${randomItemName}`
    };


    beforeEach(() => {
        cy.visit('../page-in-test/index.html');
    })

    it('Check default visible elements ', () => {
        cy.visit('../page-in-test/index.html');
        cy.url().should('include', 'page-in-test/index.html') 
        toDoPage.toDoInput.should('be.visible');
        toDoPage.addButton.should('be.visible');
        toDoPage.allFilter.should('be.visible');
        toDoPage.pendingFilter.should('be.visible');
        toDoPage.completedFilter.should('be.visible');
        toDoPage.clearButtonInactive.should('be.visible');
        toDoPage.notAvailableToDoTask.should('be.visible');
    });
  
    it('Add task', () => {
        toDoPage.addNewTask(testInfo.itemToAdd)
        cy.contains(testInfo.itemToAdd).should('be.visible')
    })

    it('Edit task', () => {
        toDoPage.addNewTask(testInfo.itemToAdd)
        toDoPage.editTask(testInfo.itemToEdit)
        cy.contains(testInfo.itemToEdit).should('be.visible')
    })

    it('Delete task', () => {
        toDoPage.addNewTask(testInfo.itemToAdd)
        toDoPage.deleteTask(testInfo.itemToEdit)
        toDoPage.notAvailableToDoTask.should('be.visible')
    })

    it('Mark task as completed', () => {
        toDoPage.addNewTask(testInfo.itemToAdd)
        toDoPage.toDoCheckBox.click() // set check box to complete task
        toDoPage.completedFilter.click()
        cy.contains(testInfo.itemToAdd).should('be.visible') // find completed task with 'completed' filter
    })
  })
