using from './cat-service';

// Notifications List
annotate Notifservice.Notifications with @(
    UI: {
        HeaderFacets: [
            {$Type: 'UI.ReferenceFacet', Label: 'Description', Target: '@UI.FieldGroup#Deleted'},
        ],
        Facets: [
            {$Type: 'UI.ReferenceFacet', Label: 'Type Information', Target: '@UI.FieldGroup#TypeGroup'},
        ],
        FieldGroup#TypeGroup: {
            Data: [
                {Value: Type_ID},
                {Value: Type},
            ]
        },
        Identification: [ {Value: Type} ],
        SelectionFields: [ Type ],
        LineItem: [
            {Value: Message_ID},
            {Value: Type},
            {Value: Text}
        ]
    }
);

// Message Details
annotate Notifservice.Messages with @(
    UI: {
    HeaderInfo: {
        TypeName: 'Message',
        TypeNamePlural: 'Messages',
        Title: {Value: Message_ID},
        Description: {Value: Message_ID}
    },
    }
 );

// Message Elements
annotate Notifservice.Messages with {
    Message_ID @title:'{i18n>Message_ID}' @UI.HiddenFilter;
    Type @title:'{i18n>Type}';
    Text @title:'{i18n>Text}';
}



// annotate CatalogService.Books with @(
//     UI: {
//          HeaderFacets: [
//           {$Type: 'UI.ReferenceFacet', Label: 'Description', Target: '@UI.FieldGroup#Descr'},
//        ],
//        Facets: [
//           {$Type: 'UI.ReferenceFacet', Label: 'Details', Target: '@UI.FieldGroup#Price'},
//        ],
//        FieldGroup#Descr: {
//           Data: [
//              {Value: descr},
//           ]
//        },
//        FieldGroup#Price: {
//           Data: [
//              {Value: price},
//              {Value: currency.symbol, Label: 'Currency'},
//           ]
//        },
//        Identification: [{Value:title}],
//       SelectionFields: [ ID,  price, currency_code ],
//        LineItem: [
//           {Value: ID},
//           {Value: title},
//           {Value: author_ID, Label:'Author ID'},
//           {Value: stock},
//           {Value: price},
//           {Value: currency.symbol, Label:''},
//        ]
//     }

//  );

//  ////////////////////////////////////////////////////////////////////////////
//  //
//  //	Books Details
//  //
//  annotate CatalogService.Books with @(
//     UI: {
//     HeaderInfo: {
//        TypeName: 'Book',
//        TypeNamePlural: 'Books',
//        Title: {Value: title},

//     },
//     }
//  );

//  ////////////////////////////////////////////////////////////////////////////
//  //
//  //	Books Elements
//  //
//  annotate CatalogService.Books with {
//     ID @title:'ID' @UI.HiddenFilter;
//     title @title:'Title';
//     author @title:'Author ID';
//     price @title:'Price';
//     stock @title:'Stock';
//     descr @UI.MultiLineText;
//  }