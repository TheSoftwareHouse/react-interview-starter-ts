import { AppRoute } from "../../../src/routing/AppRoute.enum";

class Navigation {
  goToHome() {
    cy.get(`a[href*="${AppRoute.Home}"]`).first().click();
  }

  goToLogin() {
    cy.get(`a[href*="${AppRoute.Login}"]`).first().click();
  }

  get homeLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.Home}`;
  }

  get loginLink() {
    return `${Cypress.env().baseUrl}${AppRoute.Login}`;
  }
}

export const NavigationMenu = new Navigation();
