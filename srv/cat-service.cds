using { project.namespace.db, sap.common } from '../db/data-model';

service Notifservice {
  entity Notifications as projection on db.Notifications;
}