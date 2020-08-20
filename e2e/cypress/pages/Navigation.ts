import { AppRoute } from '../../../src/routing/AppRoute.enum';

class Navigation {
  goToHome(): void {
    cy.get(`a[href*="${AppRoute.home}"]`)
      .first()
      .click();
  }

  goToLogin(): void {
    cy.get(`a[href*="${AppRoute.login}"]`)
      .first()
      .click();
  }

  get homeLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.home}`;
  }

  get loginLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.login}`;
  }
}

export const NavigationMenu = new Navigation();
