import { IEnvironment } from './ienvironment';
const apiHost = 'troupon.deals.local';
const apiUrl = `http://${apiHost}'/api`;
export const environment: IEnvironment = {
  production: false,
  dealsBaseUri: `${apiUrl}/deals`,
  contactsBaseUri: `${apiUrl}/contacts`,
};
