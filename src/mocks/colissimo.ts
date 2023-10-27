export const colissimo = {
  data: {
    name: "COLIS",
    command: {
      title: "TEST FET",
      number: "Z0000904136",
      date: "2023-09-26T08:16:24+0000",
      price_ttc: 13.08,
      price_HT: 13.08,
      currency: "€",
      quantity: 1,
    },
    sub_command: {
      status: "READY_FOR_PICKUP",
      maxValidityDate: "03/10/2023",
      pickingDate: "27/09/2023",
      maxPickingHour: "8h00",
      image: "COLIS_STANDARD",
      withdrawalCode: "VH8RG",

      refundPdfUrl: false,

      refundExpiryDate: "25/09/2024",

      refundStatus: "readyforpickup",

      vendor_name: "La Poste",
    },

    product: {
      format: "Standard - 250",

      weight: 250,

      formatPrice: {
        currencyIso: "€",

        formattedValue: "0,00 €",

        priceType: "BUY",

        value: 0,
      },

      transportPrice: {
        currencyIso: "€",

        formattedValue: "4,95 €",

        priceType: "BUY",

        value: 4.95,
      },

      totalPrice: {
        currencyIso: "€",

        formattedValue: "4,95 €",

        priceType: "BUY",

        value: 4.95,
      },

      departureAdresse: {
        firstName: "MTEL",

        lastName: "Achats",

        line1: "11 BIS AVENUE CRAMPEL",

        postalCode: "31400",

        town: "TOULOUSE",

        country: "France",
      },

      depotModeCode: "D_BAL",

      departureMail: "R7Mtel@yopmail.com",

      destinationAdresse: {
        firstName: "TEST",

        lastName: "FET",

        apartment: "7B",

        building: "KATIA",

        line1: "254 Route de Dounoux",

        pobox: "KATIA",

        postalCode: "88220",

        town: "Hadol",

        country: "France",
      },

      deliveryModeCode: "L_BAL",

      image:
        "/medias/sys_master/images/hcf/ha7/9400141086750/colis_image/colis-image.svg",

      depotMode: "Depuis votre boîte aux lettres",

      deliveryMode: "En boîte aux lettres ",
    },

    stepper: {
      stepIndex: -1,

      isOrdered: true,

      steps: ["Téléchargé", "Expédié", "Livré"],

      description:
        'Le colis doit être déposé dans votre boîte aux lettres <p style="font-weight: bold">le  27/09/2023 avant 8h00 du matin.</p> Vous pouvez aussi expédier votre colis en point de contact La Poste jusqu\'au <p style="font-weight: bold">03/10/2023</p>.',

      label: "À télécharger avant le 03/10/2023 ",

      trackingNumber: "5Y00010395080",

      information: "",
    },

    cta: [
      {
        id: "downloadLabelCTA",
        action: "redir",
        label: "Télécharger l'étiquette",
        url: "/documents/downloads/sap/colis/label?commandCode=Z0000904136&trackingNumber=5Y00010395080",
        target: "_self",
      },
      {
        id: "urlDetail",
        action: "redir",
        label: "Voir l'intégralité de la commande",
        url: "/mes-commandes/detail/Z0000904136",
        target: "_self",
      },

      {
        id: "rebuyProductCTA",
        action: "redir",
        label: "Acheter à nouveau",
        url: "/colissimo-en-ligne",
        target: "_self",
      },
      {
        id: "trackingDetailCTA",
        action: "redir",
        label: "Voir le détail du suivi",
        url: "/suivi/5Y00010395080",
        target: "_self",
      },
    ],
  },
};
