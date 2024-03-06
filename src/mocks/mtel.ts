export const mtel = {
  name: 'MTEL',
  command: {
    title: 'Mon timbre en ligne',
    vendor_name: 'La Poste',
    number: 'U0001899101',
    date: '2024-01-18T16:27:59+0000',
    price_ttc: 6.88,
    price_HT: 6.88,
    currency: '€',
    quantity: 1,
  },
  products: [
    {
      basePrice: 6.88,
      destination: 'France',
      contentType: 'document',
      nature: {
        code: 'K2',
        description:
          'Distribution en 2 jours (délai indicatif) *|Suivi inclus|Les avantages Services Plus',
        isNew: false,
        name: 'Lettre Services Plus',
        picture:
          '/medias/?context=bWFzdGVyfGltYWdlc3wyNTE2NHxpbWFnZS9zdmcreG1sfGFHRmhMMmd3WWk4eE1EYzFOamcyTnpNeU5UazRNZ3xmYTEwODM4OTU3Y2JmOTcxOTY5MjIzOWI0OGU4NTdmOTUwZjExZWJhNjgzNWI1NWMwN2I2YjdhOGMzYTk4MDlh',
        hasEmbeddedTracking: true,
      },
      visual:
        '/medias/sys_master/cms/h89/h61/10735109013534/Auvergne-Rhone-Alpes/Auvergne-Rhone-Alpes.jpg',
      productQuantity: 1,
      hasShippmentTracking: true,
      weightRange: 'Entre 250g et 500g',
      stampList: [
        {
          number: '87000720610100P',
          trackingId: '87000720610100P',
          natureCode: 'K2',
          status: { label: 'A télécharger', colorID: 0 },
          cta: [
            {
              id: 'trackingDetailMtelCta',
              action: 'redir',
              label: 'Voir le détail du suivi',
              url: '/mes-suivis/87000720610100P',
              target: '_self',
            },
          ],
        },
      ],
      cn23: false,
      isTrackingAvailable: true,
      id: 1,
    },
  ],
  sub_command: {
    status: 'READY_FOR_PICKUP_WITHOUT_EXPIRED_WITH_SERVICE',
    consignmentStatus: 'READY_FOR_PICKUP',
    maxValidityDate: '2024-01-25T17:27:59+0000',
    isExpired: false,
    totalTTC: 6.88,
    quantity: 1,
    isTrackingAvailable: true,
    isServicePlusAvailable: true,
    ngc: true,
    cn23: false,
  },
  stepper: {
    stepIndex: 0,
    isOrdered: true,
    status: 'A télécharger',
    steps: ['A télécharger', 'Téléchargé'],
    description:
      'À compter de la date d’achat, <p style="font-weight: bold">vous disposez d’un délai de 7 jours pour télécharger les timbres.</p>\n        Le fichier à télécharger est au format PDF. Vous pourrez l’ouvrir et l’imprimer en utilisant Adobe Reader.\n    <p>&nbsp;</p></br></br>\n    Un ou plusieurs de vos courriers, sont des Lettres Services Plus. Vous devez <p style="font-weight: bold">les activer avant de les expédier. </p>',
    label: 'À télécharger avant le 25/01/2024 ',
    information: '',
  },
  cta: [
    {
      id: 'urlDetail',
      action: 'redir',
      label: "Voir l'intégralité de la commande",
      url: '/mes-commandes/detail/U0001899101',
      target: '_self',
    },
    {
      id: 'downloadMTELCTA',
      action: 'redir',
      label: 'Télécharger les timbres',
      url: '/documents/downloads/sap/mtel/label?commandCode=U0001899101',
      target: '_self',
    },
  ],
};
