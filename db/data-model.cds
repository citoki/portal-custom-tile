namespace project.namespace.db;

using { managed } from '@sap/cds/common';

entity Notifications : managed {
    key Message_ID  : UUID;
        Type        : String(40);
        Text        : String(255);
}

